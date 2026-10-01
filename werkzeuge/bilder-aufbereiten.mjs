// Bereitet die Original-Bilder der Praxis für den Entwurf auf.
// Warum: Das Porträt-PNG hat 1000×1499 px und ~1 MB; moderne Formate in passenden Breiten
// (srcset) sparen > 90 % Ladevolumen, ohne sichtbaren Qualitätsverlust.
import sharp from 'sharp';
const Q = '../redesign/quellen/', Z = '../redesign/site/assets/img/';
for (const w of [480, 720, 960]) {
  await sharp(Q + 'portrait-original.png').resize({ width: w }).avif({ quality: 58, effort: 6 }).toFile(`${Z}portrait-${w}.avif`);
  await sharp(Q + 'portrait-original.png').resize({ width: w }).webp({ quality: 78, alphaQuality: 90 }).toFile(`${Z}portrait-${w}.webp`);
}
await sharp(Q + 'massage_logo_01.png').png({ compressionLevel: 9, palette: true, quality: 95 }).toFile(Z + 'logo-praxis-zum-schloss.png');
await sharp(Q + 'icon.png').resize(48).png().toFile(Z + 'favicon-48.png');
await sharp(Q + 'icon.png').resize(180).flatten({ background: '#ffffff' }).png().toFile(Z + 'apple-touch-icon.png');
await sharp(Q + 'icon.png').resize(1200, 630, { fit: 'contain', background: '#F6F3ED' }).flatten({ background: '#F6F3ED' }).jpeg({ quality: 82 }).toFile(Z + 'vorschau-og.jpg');
console.log('ok');
