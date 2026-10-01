// Vektorisiert das Original-Emblem der Praxis (icon.png, 2016 px) mit potrace und zerlegt den
// Pfad in Teilpfade. Warum: Nur echte Vektorpfade lassen sich als „Linienzeichnung“ animieren
// (stroke-dashoffset). Jeder Teilpfad bekommt eine Verzögerung nach seiner Höhe, damit das Schloss
// beim Laden von unten nach oben „gebaut“ wird. Die Füllung bleibt das Original-PNG.
import potrace from 'potrace';
import sharp from 'sharp';
import fs from 'node:fs/promises';

const quelle = '../redesign/quellen/icon.png';
// Auf Weiß legen und in Schwarz/Weiß wandeln, damit potrace eine saubere Kontur findet.
const sw = await sharp(quelle).flatten({ background: '#ffffff' }).resize(1008).greyscale().threshold(200).png().toBuffer();
const svg = await new Promise((ok, err) => potrace.trace(sw, { turdSize: 12, optTolerance: 0.4, threshold: 128 }, (e, s) => (e ? err(e) : ok(s))));
const d = svg.match(/ d="([^"]+)"/)[1];
// Teilpfade an „M“ trennen und Koordinaten runden (kleinere Datei, kein sichtbarer Unterschied).
const teile = d.split(/(?=M)/).map((t) => t.trim()).filter(Boolean).map((t) => t.replace(/-?\d+\.\d+/g, (z) => (+z).toFixed(1)));
const box = (t) => { const z = t.match(/-?\d+(\.\d+)?/g).map(Number); const ys = z.filter((_, i) => i % 2 === 1); const xs = z.filter((_, i) => i % 2 === 0); return { y: Math.max(...ys), x: (Math.min(...xs) + Math.max(...xs)) / 2, h: Math.max(...ys) - Math.min(...ys) }; };
const mit = teile.map((t) => ({ t, ...box(t) }));
// Größter Teilpfad = Kreis: zuerst. Danach nach Unterkante absteigend (unten zuerst = „wächst nach oben“).
const kreis = mit.reduce((a, b) => (b.h > a.h ? b : a));
const rest = mit.filter((m) => m !== kreis).sort((a, b) => b.y - a.y);
const maxY = Math.max(...rest.map((r) => r.y)), minY = Math.min(...rest.map((r) => r.y));
const pfade = [`<path class="e-kreis" pathLength="1" d="${kreis.t}"/>`].concat(rest.map((r) => {
  const verz = (0.35 + 1.1 * (maxY - r.y) / (maxY - minY)).toFixed(2);
  return `<path pathLength="1" style="--d:${verz}s" d="${r.t}"/>`;
}));
const aus = `<svg class="emblem-linien" viewBox="0 0 1008 1008" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round">${pfade.join('')}</g></svg>`;
await fs.writeFile('../redesign/quellen/emblem-linien.svg', aus);
console.log('Teilpfade:', teile.length, '| Größe:', Math.round(aus.length / 1024), 'KB');
