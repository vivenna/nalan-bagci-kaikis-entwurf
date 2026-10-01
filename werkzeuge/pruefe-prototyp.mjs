// Prüft den Prototyp in mehreren Breiten: Screenshots, Konsolenfehler, fehlgeschlagene und
// Drittanbieter-Anfragen, horizontales Scrollen, Tastatur-Fokus.
// Aufruf: node pruefe-prototyp.mjs <url> <screenshot-ordner>
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const [url, out] = process.argv.slice(2);
await fs.mkdir(out, { recursive: true });
const origin = new URL(url).origin;
const VIEWPORTS = [
  ['mobil', { width: 360, height: 800, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }],
  ['tablet', { width: 768, height: 1024, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }],
  ['laptop', { width: 1366, height: 768 }],
  ['desktop', { width: 1920, height: 1080 }],
];
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ergebnis = [];
for (const [name, vp] of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.deviceScaleFactor ?? 1, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch, locale: 'de-DE', timezoneId: 'Europe/Berlin' });
  const page = await ctx.newPage();
  const fehler = [], fremd = [], kaputt = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') fehler.push(m.text()); });
  page.on('pageerror', (e) => fehler.push('pageerror: ' + e.message));
  page.on('request', (r) => { if (!r.url().startsWith(origin) && !r.url().startsWith('data:')) fremd.push(r.url()); });
  page.on('response', (r) => { if (r.status() >= 400) kaputt.push(r.status() + ' ' + r.url()); });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // Gegen die feste Gerätebreite prüfen: In der Mobil-Emulation zoomt Chrome bei Überbreite heraus,
  // dann wächst innerWidth mit und ein Vergleich damit würde den Fehler verschleiern.
  const befund = await page.evaluate((breite) => ({
    hScroll: document.documentElement.scrollWidth > breite + 1 || window.innerWidth > breite + 1,
    scrollWidth: document.documentElement.scrollWidth,
    hoehe: document.documentElement.scrollHeight,
    h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim()),
    schriften: [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family + ' ' + f.weight),
    heute: document.querySelector('[data-heute]')?.textContent,
    zuKleineZiele: [...document.querySelectorAll('a, button')].filter((el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && s.display !== 'inline' && (r.height < 24 || r.width < 24); }).map((el) => el.textContent.trim().slice(0, 30)),
  }), vp.width);
  // Ganzseiten-Aufnahme in eigenem Kontext mit Pixeldichte 1: Bei 2x überschreiten lange Seiten die
  // Chrome-Texturgrenze (16384 px) und der untere Teil wird falsch (wiederholt) gezeichnet.
  {
    const c2 = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch, locale: 'de-DE', timezoneId: 'Europe/Berlin' });
    const p2 = await c2.newPage();
    await p2.goto(url, { waitUntil: 'networkidle' });
    await p2.evaluate(() => document.fonts.ready);
    await p2.screenshot({ path: path.join(out, `startseite-${name}-${vp.width}px.png`), fullPage: true });
    await c2.close();
  }
  await page.screenshot({ path: path.join(out, `startseite-${name}-${vp.width}px-erster-bildschirm.png`) });
  if (name === 'mobil') {
    await page.click('.menue-knopf');
    await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(out, `startseite-mobil-360px-menue-offen.png`) });
  }
  if (name === 'laptop') {
    // Tastatur: die ersten 12 Tab-Stopps und ob ein sichtbarer Fokusrahmen existiert
    const fokus = [];
    for (let i = 0; i < 12; i++) {
      await page.keyboard.press('Tab');
      fokus.push(await page.evaluate(() => { const e = document.activeElement; const s = getComputedStyle(e); return { text: (e.textContent || '').trim().slice(0, 28), outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2 }; }));
    }
    befund.fokus = fokus;
    await page.keyboard.press('Shift+Tab');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.keyboard.press('Tab');
    await page.screenshot({ path: path.join(out, `startseite-laptop-1366px-fokus-sprunglink.png`) });
  }
  ergebnis.push({ ansicht: name, breite: vp.width, ...befund, konsole: fehler, fremdanfragen: fremd, fehlgeschlagen: kaputt });
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(ergebnis, null, 1));
