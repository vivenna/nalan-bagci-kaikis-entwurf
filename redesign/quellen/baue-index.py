# Setzt das animierbare Emblem (inline SVG) in die Vorlage ein und schreibt site/index.html.
# Warum inline: Nur so lassen sich die einzelnen Linien per CSS nacheinander „zeichnen“.
from pathlib import Path
hier = Path(__file__).parent
vorlage = (hier / 'index.vorlage.html').read_text(encoding='utf-8')
emblem = (hier / 'emblem-linien.svg').read_text(encoding='utf-8').strip()
assert '<!--EMBLEM-->' in vorlage
(hier.parent / 'site' / 'index.html').write_text(vorlage.replace('<!--EMBLEM-->', emblem), encoding='utf-8')
print('site/index.html geschrieben')
