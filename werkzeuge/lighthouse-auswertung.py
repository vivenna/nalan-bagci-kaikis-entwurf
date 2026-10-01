"""Fasst Lighthouse-JSON-Berichte zu einer Markdown-Tabelle zusammen.

Warum Median statt Einzelwert: Lighthouse-Läufe schwanken je nach Netz und Server-Cache.
Wir berichten den Median der Läufe und die Spanne, damit die Zahlen belastbar und ehrlich sind.

Aufruf: python3 lighthouse-auswertung.py <ordner-mit-*.report.json> [präfix ...]
"""
import json
import statistics
import sys
from pathlib import Path

ordner = Path(sys.argv[1])
praefixe = sys.argv[2:] or sorted({p.name.rsplit('-', 1)[0] for p in ordner.glob('*.report.json')})

KAT = ['performance', 'accessibility', 'best-practices', 'seo']
METRIK = {
    'first-contentful-paint': ('FCP', 's', 1000),
    'largest-contentful-paint': ('LCP', 's', 1000),
    'total-blocking-time': ('TBT', 'ms', 1),
    'cumulative-layout-shift': ('CLS', '', None),
    'speed-index': ('SI', 's', 1000),
}


def lade(datei):
    d = json.loads(datei.read_text())
    zeile = {k: round(d['categories'][k]['score'] * 100) for k in KAT if d['categories'].get(k, {}).get('score') is not None}
    for audit, (kurz, einheit, teiler) in METRIK.items():
        wert = d['audits'][audit].get('numericValue')
        if wert is None:
            continue
        zeile[kurz] = round(wert / teiler, 2) if teiler else round(wert, 3)
    zeile['Bytes_KB'] = round(d['audits']['total-byte-weight']['numericValue'] / 1024)
    zeile['Anfragen'] = len(d['audits']['network-requests']['details']['items'])
    zeile['Zeitpunkt'] = d['fetchTime']
    zeile['Gerät'] = d['configSettings']['formFactor']
    zeile['LH'] = d['lighthouseVersion']
    return zeile


def fmt(werte):
    if not werte:
        return '–'
    m = statistics.median(werte)
    if len(werte) == 1 or min(werte) == max(werte):
        return f'{m:g}'
    return f'{m:g} ({min(werte):g}–{max(werte):g})'


print('| Seite / Gerät | Läufe | Performance | Barrierefreiheit | Best Practices | SEO | FCP s | LCP s | TBT ms | CLS | Speed Index s | Gewicht KB | Anfragen |')
print('|---|---|---|---|---|---|---|---|---|---|---|---|---|')
for pf in praefixe:
    laeufe = [lade(p) for p in sorted(ordner.glob(f'{pf}-*.report.json'))]
    if not laeufe:
        continue
    spalte = lambda k: [l[k] for l in laeufe if k in l]
    print(f"| {pf} | {len(laeufe)} | {fmt(spalte('performance'))} | {fmt(spalte('accessibility'))} | {fmt(spalte('best-practices'))} | {fmt(spalte('seo'))} | "
          f"{fmt(spalte('FCP'))} | {fmt(spalte('LCP'))} | {fmt(spalte('TBT'))} | {fmt(spalte('CLS'))} | {fmt(spalte('SI'))} | {fmt(spalte('Bytes_KB'))} | {fmt(spalte('Anfragen'))} |")
alle = [lade(p) for p in sorted(ordner.glob('*.report.json'))]
if alle:
    zeiten = sorted(l['Zeitpunkt'] for l in alle)
    print(f"\nMesszeitraum: {zeiten[0]} bis {zeiten[-1]} (UTC) · Lighthouse {alle[0]['LH']} · Werte = Median (Spanne)")
