# Redesign-Entwurf 2: Startseite „Praxis zum Schloss“

> **Entwurf.** Gestaltungsvorschlag von vivenna für die Hausarztpraxis Nalan Bagci-Kaikis. Er enthält Logo, Porträt und Inhalte einer realen Praxis, **mit der noch kein Vertrag besteht**. Die Seite ist sichtbar als Entwurf markiert (Plakette unten links) und mit `<meta name="robots" content="noindex, nofollow">` von Suchmaschinen ausgeschlossen. Der Entwurf ist zum Zeigen **an die Ärztin selbst** gedacht, nicht zur öffentlichen Verbreitung.

## Die Idee in einem Satz

**Das Bogenfenster aus dem eigenen Schloss-Emblem der Praxis wird zur Bühne:** Beim Laden zeichnet sich das Original-Emblem (Schloss Charlottenburg) Linie für Linie von unten nach oben, dann tritt die Ärztin in das Fenster, und die Info-Karten schweben ein. Logo, Farben und Porträt sind die der Praxis; alles andere ist neu.

Vorschau ohne Browser: [`vorschau/rundgang-desktop.mp4`](vorschau/rundgang-desktop.mp4) (63 s, 1440 × 900, ~8 MB) und [`vorschau/rundgang-mobil.mp4`](vorschau/rundgang-mobil.mp4) (84 s, Smartphone 390 × 844, ~6,5 MB); beide laufen auf Mac/iPhone/Windows.

## Was von der alten Website erkennbar bleibt

| Element | Umsetzung |
|---|---|
| **Logo** | Original-Wortmarke „PRAXIS ZUM SCHLOSS“ (400 × 101 px, unverändert) in Kopf und Fuß |
| **Emblem** | Original-Emblem (2016 px) vektorisiert (`potrace`) → animierte Linienzeichnung im Einstieg, als Wasserzeichen in „Ihre Ärztin“, „Termin“ und in der Vorsorge-Karte |
| **Farben** | exakt aus Logo und bisheriger Website: Marineblau `#2C3662`, Logo-Türkis `#00A09B`, Website-Türkis `#47CCC8`, zweites Türkis `#29AEAA`, Creme `#F6F3ED` |
| **Porträt** | Original-Foto der Seite „Unsere Praxis“ (freigestellt), als AVIF/WebP in drei Größen (20–60 KB statt 1,6 MB) |
| **Inhalte** | wie Entwurf 1: aus bisheriger Website, KBV-Register und Verzeichnissen (siehe unten) |

## Was neu ist

- **Typografie:** *Fraunces* (Display-Serife mit optischer Größe, elegante Kursive für Akzente wie *Ganzes*) + *Figtree* (klare, moderne Textschrift, passt zur geometrischen Wortmarke). Beide OFL, lokal eingebunden.
- **Formensprache:** Bogenfenster, Glas-Karten, weiche Farbnebel in den Markenfarben statt Blumenfotos.
- **Struktur:** Einstieg → Laufband der Leistungen → Haltung (Satz der Praxis, Wort für Wort beim Scrollen) → Leistungen (Reiter: *Hausärztliche Versorgung* / *Naturheilkunde & Akupunktur*) → Ihre Ärztin (Zeitleiste, die sich beim Scrollen füllt) → Sprechzeiten als **Wochenplan mit „Jetzt“-Linie** → Termin in drei Schritten → Anfahrt & Kontakt.
- **„Intelligente“ Details:** Live-Status „Jetzt geöffnet · bis 18 Uhr“ / „Öffnet morgen um 9 Uhr“ (Zeitzone Berlin, minütlich aktualisiert) in Kopfzeile, Einstieg und Sprechzeiten; Kopfzeile wird beim Scrollen zu Glas und blendet sich beim Runterscrollen aus; Lichtkegel folgt der Maus auf den Karten; Hauptknöpfe leicht „magnetisch“; auf dem Smartphone erscheint nach dem Einstieg eine schwebende Leiste „Anrufen / Termin“.
- **Zurückhaltung:** keine 3D-Effekte, keine Bibliotheken, keine Ladeanimation. Alle Bewegungen entfallen bei der Systemeinstellung „Bewegung reduzieren“; ohne JavaScript ist alles sofort sichtbar.

## Herkunft der Inhalte (nichts erfunden)

| Inhalt | Quelle |
|---|---|
| Name, Fachärztin für Allgemeinmedizin, Adresse, Telefon, E-Mail | KBV-Arztsuche 116117, bisherige Website |
| „Den Menschen als Ganzes sehen“ | bisherige Startseite („Wir betrachten den Menschen als Ganzes …“) |
| Haltungssatz und Nachsatz | bisherige Startseite, wörtlich |
| Leistungen, Werdegang, Termin-Hinweise, 116 117/112 | bisherige Leistungsseiten, „Unsere Praxis“, Kontaktseite (gekürzt; Naturheilkunde **sachlich, ohne Wirkversprechen**) |
| „seit 2019 eigene Praxis“ | „Unsere Praxis“ („Seit Oktober 2019 …“) |
| Sprechzeiten | bisherige Website – **Verzeichnisse weichen ab, mit der Kundin bestätigen** |
| Sprachen, „ebenerdig oder mit Aufzug“, Zusatzbezeichnungen | Verzeichnis arzt-auskunft.de – **zu bestätigen** |

Bewusst **ohne „Dr.“**: Titel nicht im KBV-Register und nicht im Impressum der Praxis – Bezeichnung im Gespräch klären (`FRAGEN.md` Nr. 13).

**Platzhalter:** Online-Terminbuchung (markiert mit „Entwurf“), Impressum/Datenschutz-Links.

## Qualität (gemessen)

Messung: lokaler Server, Unterpfad `/site/` (wie GitHub Pages), Chrome headless, Lighthouse 13.5.0, je 3 Läufe, Median, **01.10.2026 17:08–17:10 MESZ**. Lokal gemessen → online leicht höhere Ladezeiten zu erwarten.

| | Performance | Barrierefreiheit | Best Practices | SEO | LCP | Gewicht | Anfragen |
|---|---|---|---|---|---|---|---|
| Bisherige Website, mobil | 62 | 86 | 92 | 92 | 11,6 s | 3.939 KB | 70 |
| Entwurf 1 (schlicht), mobil | 99 | 100 | 100 | 60* | 1,8 s | 126 KB | 6 |
| **Entwurf 2, mobil** | **94** | **100** | **100** | 63* | **2,9 s** | **342 KB** | **11** |
| **Entwurf 2, Desktop** | **98** | **100** | **100** | 63* | **0,6 s** | 332 KB | 12 |

\* SEO-Abzug nur durch das gewollte `noindex`.
Einordnung LCP mobil 2,9 s: Lighthouse simuliert ein Mittelklasse-Smartphone mit langsamem 4G. Entwurf 2 lädt echte Fotos und zwei Schriftschnitte mehr als Entwurf 1. Das ist bewusst so gewählt, denn beides trägt die Wirkung. Performance bleibt im grünen Bereich.

Weitere Prüfungen (Skripte in `../werkzeuge/`):

- **axe-core** (WCAG 2.0/2.1/2.2 A+AA + Best Practices), 360 px und 1366 px: **0 Verstöße**. 15 Fälle, die axe nicht automatisch berechnen kann, liegen auf Farbverlauf bzw. Wasserzeichen; rechnerisch ≥ 5:1.
- **Kontraste der Farbkombinationen:**
  - Marine auf Creme: 10,5:1
  - Marine auf Türkis (Knöpfe, Wochenplan): 5,9:1
  - Türkis auf Marine: 5,9:1
  - Nebentext: ≥ 5,0:1
  - blasse Wörter im Haltungssatz (vor dem Scrollen): ≥ 3,2:1 (große Schrift)
- **Breiten:** 320, 360, 390, 768, 1024, 1366 und 1920 px. Kein horizontales Scrollen.
- **Netzwerk:** 0 Drittanbieter, 0 Cookies, 0 Fehler, 0 Konsolenmeldungen.
- **Tastatur:** 12 von 12 geprüften Tab-Stopps mit sichtbarem Fokus. Dazu kommen Sprunglink, ARIA-Reiter mit Pfeiltasten und ein Menü, das sich mit Esc schließt.

Screenshots: [`screenshots/`](screenshots/) · Lighthouse-Berichte: [`lighthouse-berichte/`](lighthouse-berichte/)

## Lokal ansehen

```bash
cd "/Users/mohamed/github-projekte/Neuer Ordner/redesign"
python3 -m http.server 8000
```

Dann im Browser öffnen: <http://localhost:8000/site/> (beenden mit `Ctrl + C`). Tipp: Das Fenster einmal neu laden, um die Einstiegsanimation zu sehen. Das Smartphone-Layout zeigen die Entwicklertools (⌥⌘I → Gerätesymbol).

## Der Ärztin zeigen

1. **Am einfachsten:** die Videos `vorschau/rundgang-desktop.mp4` (8 MB) und `vorschau/rundgang-mobil.mp4` (6,5 MB) mitschicken (zusammen 15 MB, passen in die meisten Mails) und dazu einen Link.
2. **Link über GitHub Pages:** Damit kann sie die Seite selbst am Handy ausprobieren (Live-Status, Menü, Animationen). Die Anleitung steht unten.
3. **Im Termin vor Ort oder per Bildschirmfreigabe:** lokal starten wie oben.

## Auf GitHub Pages veröffentlichen

> ⚠️ **Nur den Ordner `site/` veröffentlichen, niemals dieses Analyse-Repository.** Es enthält die vollständige Analyse, Rohdaten und Screenshots der bisherigen Website. Eine GitHub-Pages-Seite ist über den Link **für jeden erreichbar**, auch wenn sie per `noindex` nicht in Suchmaschinen erscheint. Sie enthält Porträt und Logo der Praxis. Deshalb den Link nur an die Ärztin geben und die Seite nach dem Gespräch wieder abschalten (Schritt 6).

1. Prototyp in ein eigenes Verzeichnis kopieren:
   ```bash
   mkdir -p ~/praxis-zum-schloss-entwurf
   cp -R "/Users/mohamed/github-projekte/Neuer Ordner/redesign/site/." ~/praxis-zum-schloss-entwurf/
   cd ~/praxis-zum-schloss-entwurf
   ls -a   # muss index.html, assets/ und .nojekyll zeigen
   ```
2. Git-Repository anlegen:
   ```bash
   git init -b main
   git add -A
   git commit -m "Entwurf Startseite Praxis zum Schloss"
   ```
3. Hochladen, entweder mit der GitHub-CLI:
   ```bash
   gh repo create praxis-zum-schloss-entwurf --public --source=. --push
   ```
   oder auf github.com ein leeres Repository anlegen und dann:
   ```bash
   git remote add origin https://github.com/<IHR-KONTO>/praxis-zum-schloss-entwurf.git
   git push -u origin main
   ```
   (GitHub Pages braucht bei kostenlosen Konten ein öffentliches Repository. Bei GitHub Pro/Team geht auch ein privates, die Seite selbst bleibt trotzdem über den Link erreichbar.)
4. Auf github.com: **Settings → Pages → Build and deployment → Source: „Deploy from a branch“ → Branch `main`, Ordner `/ (root)` → Save.**
5. Nach 1–2 Minuten ist die Seite erreichbar unter `https://<IHR-KONTO>.github.io/praxis-zum-schloss-entwurf/`. Alle Pfade sind relativ, der Unterpfad funktioniert ohne Anpassung.
6. Nach dem Gespräch: unter **Settings → Pages** die Veröffentlichung beenden oder das Repository löschen bzw. auf privat stellen.

## Aufbau und Pflege

```
redesign/
├── README.md
├── site/                         ← nur dieser Ordner wird veröffentlicht
│   ├── index.html                erzeugt aus quellen/index.vorlage.html (nicht direkt bearbeiten)
│   ├── .nojekyll
│   └── assets/
│       ├── css/style.css         gesamtes Layout und alle Animationen, kommentiert
│       ├── js/main.js            Live-Status, Menü, Reiter, Scroll-Effekte (ohne Bibliothek)
│       ├── fonts/                Fraunces, Figtree (+ OFL-Lizenzen)
│       └── img/                  Logo, Porträt (AVIF/WebP), Emblem-Linien (SVG), Icons
├── quellen/                      Originaldateien der Praxis + Bauschritte
│   ├── index.vorlage.html        HTML-Quelle mit Platzhalter <!--EMBLEM-->
│   ├── emblem-linien.svg         vektorisiertes Emblem (für die Zeichenanimation)
│   ├── baue-index.py             setzt das Emblem ein → site/index.html
│   └── *.png                     Original-Logo, Emblem, Porträt der bisherigen Website
├── vorschau/rundgang-desktop.mp4
├── vorschau/rundgang-mobil.mp4
├── screenshots/
└── lighthouse-berichte/
```

Änderungen am HTML in `quellen/index.vorlage.html` vornehmen, dann `python3 quellen/baue-index.py`. Bilder neu erzeugen: `node ../werkzeuge/bilder-aufbereiten.mjs`; Emblem neu vektorisieren: `node ../werkzeuge/emblem-vektorisieren.mjs` (jeweils aus `werkzeuge/` starten). Prüfungen: `node pruefe-prototyp.mjs http://localhost:8000/site/ ../redesign/screenshots` und `node axe-pruefung.mjs http://localhost:8000/site/`; Videos: `node rundgang-video.mjs http://localhost:8000/site/ ../redesign/vorschau/rundgang-desktop.mp4 desktop` bzw. `… ../redesign/vorschau/rundgang-mobil.mp4 mobil`.

Entwurf 1 (schlichte Variante ohne Fotos) liegt in der Git-Historie (Commit `2e56b99`).
