// Nimmt einen ruhigen Rundgang durch den Entwurf als Video auf (zum Mitschicken an die Kundin).
// Warum Video: Animationen (Schloss-Zeichnung, Einblendungen) wirken auf Screenshots nicht.
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import ffmpeg from 'ffmpeg-static';
import fs from 'node:fs';
import path from 'node:path';

const [url, ziel] = process.argv.slice(2);
const tmp = path.join(path.dirname(ziel), '_video');
fs.mkdirSync(tmp, { recursive: true });
const b = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: tmp, size: { width: 1440, height: 900 } }, timezoneId: 'Europe/Berlin', locale: 'de-DE' });
const p = await ctx.newPage();
await p.goto(url, { waitUntil: 'networkidle' });
// Entwurfsplakette bleibt sichtbar – der Film zeigt ehrlich einen Entwurf.
await p.waitForTimeout(4200);
const sanft = async (bis, dauer) => p.evaluate(async ([bis, dauer]) => {
  const start = scrollY, t0 = performance.now(), d = bis - start;
  const ease = (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  await new Promise((fertig) => { const s = (n) => { const t = Math.min(1, (n - t0) / dauer); scrollTo(0, start + d * ease(t)); t < 1 ? requestAnimationFrame(s) : fertig(); }; requestAnimationFrame(s); });
}, [bis, dauer]);
const y = async (sel, off = 90) => p.evaluate(([s, o]) => document.querySelector(s).getBoundingClientRect().top + scrollY - o, [sel, off]);
await sanft(await y('.haltung', 40), 2600); await p.waitForTimeout(600);
await sanft(await y('.haltung', -260), 2200); await p.waitForTimeout(900);
await sanft(await y('#leistungen'), 1800); await p.waitForTimeout(1600);
await p.hover('.kachel--gross'); await p.mouse.move(420, 560, { steps: 18 }); await p.waitForTimeout(700);
await p.click('#tab-natur'); await p.waitForTimeout(2200);
await p.click('#tab-haus'); await p.waitForTimeout(900);
await sanft(await y('#aerztin'), 2200); await p.waitForTimeout(700);
await sanft(await y('#aerztin', -380), 2600); await p.waitForTimeout(900);
await sanft(await y('#sprechzeiten'), 2000); await p.waitForTimeout(2400);
await sanft(await y('#termin'), 2000); await p.waitForTimeout(2200);
await sanft(await y('#kontakt'), 2000); await p.waitForTimeout(1800);
await sanft(0, 3200); await p.waitForTimeout(1200);
const webm = await p.video().path();
await ctx.close(); await b.close();
execFileSync(ffmpeg, ['-y', '-i', webm, '-c:v', 'libx264', '-preset', 'slow', '-crf', '23', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', ziel], { stdio: 'ignore' });
fs.rmSync(tmp, { recursive: true, force: true });
console.log('Video:', ziel, Math.round(fs.statSync(ziel).size / 1024), 'KB');
