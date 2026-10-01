// Vollständiger axe-core-Test (WCAG 2.0/2.1/2.2, Stufen A und AA) in zwei Breiten.
// Ergänzt Lighthouse, das nur eine Teilmenge der axe-Regeln ausführt.
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
const url = process.argv[2];
const b = await chromium.launch({ channel: 'chrome', headless: true });
for (const [name, w, mobile] of [['mobil', 360, true], ['laptop', 1366, false]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 800 }, isMobile: mobile, hasTouch: mobile });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: 'networkidle' });
  const r = await new AxeBuilder({ page: p }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze();
  console.log(`${name}: ${r.violations.length} Verstöße, ${r.passes.length} bestandene Regeln, ${r.incomplete.length} manuell zu prüfen`);
  for (const v of r.violations) console.log('  VERSTOSS', v.id, v.impact, v.nodes.length, v.help);
  for (const v of r.incomplete) console.log('  manuell', v.id, v.nodes.length, v.help);
  await ctx.close();
}
await b.close();
