// Passiver Browser-Audit einer bestehenden Website.
// Warum ein eigenes Skript statt eines Online-Dienstes: Wir wollen den Zustand *vor jeder Einwilligung*
// beobachten (frischer Browser-Kontext ohne Cookies) und Belege reproduzierbar im Repo ablegen.
// Das Skript klickt nichts an, füllt nichts aus und sendet keine Formulare.
//
// Aufruf: node audit-browser.mjs <basis-url> <ausgabe-ordner-screenshots> <ausgabe-ordner-rohdaten>
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const [base, shotDir, rawDir] = process.argv.slice(2);
if (!base || !shotDir || !rawDir) {
  console.error('Aufruf: node audit-browser.mjs <basis-url> <screenshots> <rohdaten>');
  process.exit(1);
}
await fs.mkdir(shotDir, { recursive: true });
await fs.mkdir(rawDir, { recursive: true });

const VIEWPORTS = {
  mobil: { width: 360, height: 800, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  tablet: { width: 768, height: 1024, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  laptop: { width: 1366, height: 768 },
  desktop: { width: 1920, height: 1080 },
};

// Welche Seite in welchen Breiten: Startseite in allen, Unterseiten mobil + Laptop.
const PAGES = [
  { slug: 'startseite', path: '/', views: ['mobil', 'tablet', 'laptop', 'desktop'] },
  { slug: 'unsere-praxis', path: '/unsere-praxis/', views: ['mobil', 'laptop'] },
  { slug: 'leistungsspektrum', path: '/services-category/leistungsspektrum/', views: ['mobil', 'laptop'] },
  { slug: 'leistung-vorsorge', path: '/services/vorsorgeleistungen/', views: ['mobil', 'laptop'] },
  { slug: 'leistung-schroepfen', path: '/services/schroepfen-hacamat-hijama/', views: ['laptop'] },
  { slug: 'kontakt', path: '/kontakt/', views: ['mobil', 'laptop'] },
  { slug: 'termin', path: '/termin/', views: ['mobil', 'laptop'] },
  { slug: 'impressum', path: '/impressum/', views: ['laptop'] },
  { slug: 'demo-homepage-plastic', path: '/homepage-plastic/', views: ['laptop'] },
  { slug: 'demo-team', path: '/team/', views: ['laptop'] },
];

const UA_DESKTOP = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const UA_MOBILE = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const host = (u) => { try { return new URL(u).host; } catch { return u; } };

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report = { erstellt: new Date().toISOString(), basis: base, seiten: [] };

for (const p of PAGES) {
  for (const v of p.views) {
    const vp = VIEWPORTS[v];
    // Frischer Kontext je Aufruf = Erstbesuch ohne gespeicherte Einwilligung.
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.deviceScaleFactor ?? 1,
      isMobile: !!vp.isMobile,
      hasTouch: !!vp.hasTouch,
      userAgent: vp.isMobile ? UA_MOBILE : UA_DESKTOP,
      locale: 'de-DE',
    });
    const page = await ctx.newPage();
    const requests = [];
    page.on('request', (r) => requests.push({ url: r.url(), typ: r.resourceType() }));
    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 300)); });
    const t0 = Date.now();
    let status = null;
    try {
      const resp = await page.goto(base + p.path, { waitUntil: 'networkidle', timeout: 60000 });
      status = resp?.status() ?? null;
    } catch (e) {
      consoleErrors.push('NAVIGATION: ' + e.message.slice(0, 200));
    }
    const ladezeitMs = Date.now() - t0;
    await sleep(1500); // Nachlader (Slider, Lazy-Load) zur Ruhe kommen lassen
    // Page-Builder-Themes blenden Elemente erst beim Scrollen ein („appear“-Animationen, Lazy-Load).
    // Ohne Durchscrollen zeigt ein Ganzseiten-Screenshot leere Flächen, die ein echter Besucher nie sieht.
    await page.evaluate(async () => {
      const step = Math.max(200, Math.floor(window.innerHeight * 0.6));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 180));
      }
      window.scrollTo(0, 0);
    });
    await sleep(1200);

    const befund = await page.evaluate(() => {
      const de = document.documentElement;
      const bodyText = document.body ? document.body.innerText : '';
      const pEl = document.querySelector('main p, .content p, article p, p');
      const fs = pEl ? parseFloat(getComputedStyle(pEl).fontSize) : null;
      const h1 = [...document.querySelectorAll('h1')].map((h) => h.innerText.trim()).filter(Boolean);
      const imgs = [...document.images];
      const consentHinweis = /cookie|einwilligung|zustimm|akzeptier|consent/i.test(
        [...document.querySelectorAll('body *')].filter((el) => {
          const s = getComputedStyle(el);
          return (s.position === 'fixed' || s.position === 'sticky') && el.innerText && el.innerText.length < 2000;
        }).map((el) => el.innerText).join(' ')
      );
      return {
        titel: document.title,
        h1,
        horizontalScroll: de.scrollWidth > window.innerWidth + 1,
        scrollWidth: de.scrollWidth,
        innerWidth: window.innerWidth,
        seitenhoehe: de.scrollHeight,
        fliesstextPx: fs,
        bilder: imgs.length,
        bilderOhneAlt: imgs.filter((i) => !i.hasAttribute('alt') || i.getAttribute('alt').trim() === '').length,
        bilderUeberdimensioniert: imgs.filter((i) => i.naturalWidth > 0 && i.clientWidth > 0 && i.naturalWidth > i.clientWidth * window.devicePixelRatio * 1.5).map((i) => ({ src: i.currentSrc.split('/').pop(), natuerlich: i.naturalWidth, angezeigt: i.clientWidth })).slice(0, 15),
        consentBannerSichtbar: consentHinweis,
        textLaenge: bodyText.length,
      };
    });
    const cookies = (await ctx.cookies()).map((c) => ({ name: c.name, domain: c.domain, ablauf: c.expires > 0 ? new Date(c.expires * 1000).toISOString().slice(0, 10) : 'Sitzung' }));
    const fremd = [...new Set(requests.map((r) => host(r.url)).filter((h) => !h.endsWith('hausarztpraxis-zum-schloss.de')))];
    const shot = path.join(shotDir, `${p.slug}-${v}-${vp.width}px.png`);
    await page.screenshot({ path: shot, fullPage: true });
    // Zusätzlich der erste Bildschirm (above the fold) – das sieht ein Patient zuerst.
    if (p.slug === 'startseite' || p.slug === 'unsere-praxis') {
      await page.screenshot({ path: path.join(shotDir, `${p.slug}-${v}-${vp.width}px-erster-bildschirm.png`), fullPage: false });
    }
    report.seiten.push({
      seite: p.slug, pfad: p.path, ansicht: v, breite: vp.width, http: status, ladezeitBisNetzwerkruheMs: ladezeitMs,
      anfragen: requests.length, fremdHosts: fremd, cookiesVorEinwilligung: cookies, konsolenfehler: consoleErrors.slice(0, 10), ...befund,
      screenshot: path.basename(shot),
    });
    if (p.slug === 'startseite' && v === 'laptop') {
      await fs.writeFile(path.join(rawDir, 'netzwerk-startseite-laptop.json'), JSON.stringify(requests, null, 1));
    }
    console.log(`${p.slug} ${v}: HTTP ${status}, ${requests.length} Anfragen, Fremd: ${fremd.join(', ') || '–'}, Cookies: ${cookies.map((c) => c.name).join(', ') || '–'}, hScroll: ${befund.horizontalScroll}`);
    await ctx.close();
    await sleep(2000); // moderate Abrufrate
  }
}
await fs.writeFile(path.join(rawDir, 'browser-audit.json'), JSON.stringify(report, null, 1));
await browser.close();
