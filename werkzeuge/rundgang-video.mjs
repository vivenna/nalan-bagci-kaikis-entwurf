// Nimmt einen ruhigen Rundgang durch den Entwurf als Video auf (zum Mitschicken an die Kundin).
// Warum Video: Animationen (Schloss-Zeichnung, Einblendungen) wirken auf Screenshots nicht.
// Aufruf: node rundgang-video.mjs <url> <ziel.mp4> [desktop|mobil]
// Tempo wie ein Mensch, der sich die Seite genauer ansieht: gleichmäßig scrollen, an jedem
// Bereich kurz stehen bleiben (Texte überfliegen), lange Bereiche in mehreren Etappen.
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import ffmpeg from 'ffmpeg-static';
import fs from 'node:fs';
import path from 'node:path';

const [url, ziel, modus = 'desktop'] = process.argv.slice(2);
const mobil = modus === 'mobil';
const tmp = path.join(path.dirname(ziel), '_video-' + modus);
fs.mkdirSync(tmp, { recursive: true });

const viewport = mobil ? { width: 390, height: 844 } : { width: 1440, height: 900 };
const b = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await b.newContext({
  viewport, recordVideo: { dir: tmp, size: viewport } /* Aufnahme ist immer in CSS-Pixeln; größer = grauer Rand */, timezoneId: 'Europe/Berlin', locale: 'de-DE',
  ...(mobil ? { isMobile: true, hasTouch: true, deviceScaleFactor: 2 } : {}),
});
const p = await ctx.newPage();
await p.goto(url, { waitUntil: 'networkidle' });
// CSS-„smooth“ würde jedes scrollTo selbst nochmals animieren → Ruckeln. Für die Aufnahme aus.
await p.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
// Entwurfsplakette bleibt sichtbar – der Film zeigt ehrlich einen Entwurf.
const warte = (ms) => p.waitForTimeout(ms);

// Scrollt weich zu einer Seitenposition; Dauer wächst mit der Strecke (≈ 650–700 px/s in der Mitte).
const scrolle = (bis) => p.evaluate(async (bis) => {
  const max = document.documentElement.scrollHeight - innerHeight;
  const start = scrollY, ziel = Math.max(0, Math.min(max, bis)), d = ziel - start;
  if (Math.abs(d) < 4) return;
  const dauer = Math.min(3400, Math.max(1100, 700 + Math.abs(d) * 1.25));
  const ease = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
  const t0 = performance.now();
  await new Promise((fertig) => {
    const s = (n) => {
      const t = Math.min(1, (n - t0) / dauer);
      scrollTo({ top: start + d * ease(t), behavior: 'instant' });
      t < 1 ? requestAnimationFrame(s) : fertig();
    };
    requestAnimationFrame(s);
  });
}, bis);
const oben = (sel, abstand) => p.evaluate(([s, a]) => document.querySelector(s).getBoundingClientRect().top + scrollY - a, [sel, abstand]);
const kopf = mobil ? 76 : 0; // mobil ist die Kopfzeile immer sichtbar
const hoehe = (sel) => p.evaluate((s) => document.querySelector(s).offsetHeight, sel);

// Einen Bereich ansehen: an den Anfang, dann in Etappen von ~60 % Bildschirmhöhe durch.
async function bereich(sel, { lesen = 2600, etappe = 2000, aktion } = {}) {
  const start = await oben(sel, kopf + (mobil ? 8 : 24));
  await scrolle(start); await warte(lesen);
  if (aktion) await aktion();
  const ende = start + (await hoehe(sel)) - viewport.height * 0.75;
  for (let y = start + viewport.height * 0.6; y < ende + viewport.height * 0.3; y += viewport.height * 0.6) {
    await scrolle(Math.min(y, ende)); await warte(etappe);
    if (y >= ende) break;
  }
}

// Einstieg: Emblem zeichnet sich, Ärztin tritt ins Fenster, Karten schweben ein.
// Mobil liegt das Fenster unter der Überschrift → früher hinwischen, damit die Zeichnung zu sehen ist.
if (mobil) { await warte(2000); await scrolle(viewport.height * 0.55); await warte(3600); }
else await warte(4800);
await bereich('#philosophie', { lesen: 3600 }); // Satz baut sich Wort für Wort auf
await bereich('#leistungen', {
  lesen: 2400, etappe: 2300,
  aktion: async () => {
    if (!mobil) { await p.mouse.move(300, 500); await p.mouse.move(700, 620, { steps: 30 }); await warte(600); }
    mobil ? await p.tap('#tab-natur') : await p.click('#tab-natur');
    await warte(3000);
    mobil ? await p.tap('#tab-haus') : await p.click('#tab-haus');
    await warte(1500);
  },
});
await bereich('#sprechzeiten', { lesen: 3200 });
await bereich('#termin', { lesen: 2800 });
await bereich('#kontakt', { lesen: 2600 });
await bereich('#aerztin', { lesen: 3200, etappe: 2600 });
await scrolle(1e6); await warte(2200); // Fußzeile
await scrolle(0); await warte(mobil ? 1600 : 2400);
if (mobil) { // zum Schluss das Menü zeigen
  await p.tap('.menue-knopf'); await warte(2600);
  await p.tap('.menue-knopf'); await warte(1400);
}

const webm = await p.video().path();
await ctx.close(); await b.close();
execFileSync(ffmpeg, ['-y', '-i', webm, '-c:v', 'libx264', '-preset', 'slow', '-crf', '22', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', ziel], { stdio: 'ignore' });
fs.rmSync(tmp, { recursive: true, force: true });
console.log('Video:', ziel, Math.round(fs.statSync(ziel).size / 1024), 'KB');
