# Redesign-Prototyp: Startseite „Praxis zum Schloss“

> **Entwurf.** Gestaltungsvorschlag von vivenna für die Hausarztpraxis Nalan Bagci-Kaikis. Er enthält Namen und Inhalte einer realen Praxis, **die noch nicht zugestimmt hat**. Die Seite ist sichtbar als Entwurf markiert und mit `<meta name="robots" content="noindex, nofollow">` von Suchmaschinen ausgeschlossen. **Nicht öffentlich veröffentlichen, bevor die Kundin zugestimmt hat** (siehe Abschnitt GitHub Pages).

## Was gebaut wurde

Eine vollständig neu gestaltete **Startseite** als statische Website in `site/`:

- reines HTML + CSS + 65 Zeilen JavaScript (inkl. Kommentaren), ohne Framework und ohne Build-Schritt,
- Schriften lokal, keine Drittanbieter, keine Cookies, kein Consent-Banner nötig,
- mobile first, mit fester Leiste „Anrufen / Termin“ auf dem Smartphone,
- strukturierte Daten (`Physician`, Schema.org), Meta-Description, Open Graph,
- Barrierefreiheit: Sprunglink, sichtbare Fokusrahmen, semantische Landmarks, Tabellen-Semantik für Sprechzeiten, Textkontraste von mindestens 6,4:1 (WCAG AA verlangt 4,5:1; Fließtext 13,9:1).

**Warum die Startseite und nicht die schwächste Unterseite?** Die Startseite ist zugleich die schwächste und die wichtigste Seite. Sie bündelt die meisten Befunde aus `02-website/`:

- keine H1,
- verstümmelte Überschrift,
- veralteter Corona-Block,
- LCP mobil 11,6 s,
- Telefon und Sprechzeiten mobil erst ganz unten,
- Kosmetik-Stockfotos.

Sie ist die Seite, über die Patientinnen und Patienten aus Google und den Verzeichnissen ankommen. Ein Vorher-Nachher an dieser Seite zeigt der Kundin am deutlichsten, was der Relaunch bringt. Alternativ wäre „Unsere Praxis“ in Frage gekommen, die hat aber gute Inhalte und braucht vor allem Umsortierung.

**Warum ohne Framework?** Für eine einzelne Seite wäre eine Build-Kette Overhead. Statisches HTML läuft auf GitHub Pages im Unterpfad ohne Konfiguration, und jeder Nachfolger kann es lesen. Für den echten Relaunch mit ~25 Seiten empfiehlt sich ein statischer Generator wie Astro oder Eleventy (gemeinsame Vorlagen, Bildoptimierung) oder ein schlankes WordPress, siehe `03-empfehlung/`. Das Design ist auf beide übertragbar.

## Gestaltungsentscheidungen

| Entscheidung | Begründung |
|---|---|
| **Tiefes Praxis-Türkis** `#0e5f5b` als Markenfarbe | Wiedererkennung der bisherigen Website, aber abgedunkelt: Weiß auf Türkis 7,5:1, Türkis auf Papier 7,0:1 (bisher kontrastschwach) |
| Warmes Papierweiß `#faf7f2` statt Klinik-Weiß, ruhige Sandtöne | Seriös und freundlich, ohne Spa-Anmutung (keine Blumen, Kerzen, Kosmetikmotive) |
| **Atkinson Hyperlegible Next** (Fließtext, 18 px) | Vom Braille Institute für maximale Lesbarkeit entwickelt, wichtig für ältere Patientinnen und Patienten. OFL-Lizenz, lokal eingebunden |
| **Source Serif 4** (Überschriften) | Ruhige Serifenschrift, wirkt hochwertig und vertrauenswürdig. OFL-Lizenz, lokal |
| Logo-Zeichen: **eigene Linienzeichnung einer Schlosskuppel** | Greift die Idee des bisherigen Logos auf (Schloss Charlottenburg), ist aber neu gezeichnet und keine Kopie. Im Projekt wird das **Original-Logo** als Vektor übernommen oder verfeinert, nach Absprache |
| Inhaltsreihenfolge: Wer/Wo/Was → Termin & Telefon → „Heute“-Karten → Leistungen → Naturheilkunde → Ärztin → Termin → Sprechzeiten & Anfahrt | Die häufigsten Anliegen (Anrufen, Sprechzeiten, Notfall) sind ohne Scrollen bzw. über die feste Leiste erreichbar |
| Hausärztliche Versorgung und Naturheilkunde **getrennt** | Klare, seriöse Positionierung. Naturheilkunde sachlich beschrieben, mit Kosten- und „kein Heilversprechen“-Hinweis (HWG-bewusst) |
| Karte nur als **Link** (OpenStreetMap / Google Maps) | Keine Einbettung, also kein Datentransfer vor einem Klick und keine Einwilligung nötig |
| Online-Buchung als **Knopf-Platzhalter** | Einbindung später per Link oder Widget, das erst nach Klick lädt |

## Herkunft der Inhalte (nichts erfunden)

| Inhalt | Quelle |
|---|---|
| Name, Fachärztin für Allgemeinmedizin, Adresse, Telefon, E-Mail | KBV-Arztsuche 116117 und bisherige Website (01.10.2026) |
| Einleitungssatz („… dauerhaft angelegte Arzt-Patienten-Beziehung“) | Bisherige Startseite, leicht umgestellt |
| Leistungen hausärztlich (Vorsorge, Impfungen, Diagnostik, Behandlung, Psychosomatik) | Bisherige Leistungsseiten und Startseite, gekürzt |
| Naturheilkundliche Verfahren | Bisherige Leistungsliste. Die Kurzbeschreibungen sind **sachlich neu formuliert, ohne Wirkversprechen** |
| Termin-Text, „Kinder oder schwer Kranke werden vorgezogen“, 116117/112 | Bisherige Kontaktseite |
| Werdegang | Bisherige Seite „Unsere Praxis“, ohne private Angaben (z. B. Geburtsjahr) |
| Sprechzeiten | Bisherige Website. **Verzeichnisse weichen ab → als „bitte bestätigen“ markiert** |
| Sprachen (Englisch, Türkisch), Zugang „ebenerdig oder Aufzug“, Zusatzbezeichnungen | Verzeichnis arzt-auskunft.de → **gelb markiert, zu bestätigen** |
| Fotos | **Keine.** Kein Porträt, keine Stockfotos (Lizenzfrage); stattdessen sichtbarer Platzhalter |

**Bewusst nicht verwendet:** der Titel „Dr.“. Website-Kopfzeile und Mail nutzen ihn, das KBV-Register, das Impressum und die Verzeichnisse nicht. Die korrekte Bezeichnung wird mit der Kundin geklärt (`FRAGEN.md`).

## Offene Platzhalter (gelb markiert)

1. Porträt der Ärztin (vorhandenes Foto, Freigabe und Nutzungsrechte klären)
2. Online-Terminbuchung (Anbieter offen)
3. Rezept-/Überweisungsbestellung (optionales Modul)
4. Bus & Bahn: Haltestellen und Linien (von der Praxis zu ergänzen)
5. Fax-Nummer (030 3255050 ist je nach Quelle Telefon oder Fax)
6. Impressum- und Datenschutz-Links (Texte liefert die Praxis)
7. Zu bestätigen: Sprechzeiten, Sprachen, barrierefreier Zugang, Zusatzbezeichnungen

## Qualität (gemessen)

Messumgebung: lokaler Server (`python3 -m http.server`), Seite unter Unterpfad `/site/` wie auf GitHub Pages, Google Chrome headless, Lighthouse 13.5.0, je **3 Läufe**, Median (Spanne), **01.10.2026 08:31–08:33 MESZ**. Die mobile Messung nutzt die simulierte Drosselung von Lighthouse. Da lokal gemessen wurde, fehlt echte Netzlatenz; online sind leicht höhere Werte zu erwarten.

| | Performance | Barrierefreiheit | Best Practices | SEO | LCP | Gewicht | Anfragen |
|---|---|---|---|---|---|---|---|
| **Bisherige Startseite, mobil** | 62 | 86 | 92 | 92 | 11,6 s | 3.939 KB | 70 |
| **Prototyp, mobil** | **99** (99–100) | **100** | **100** | 60* | **1,8 s** | **126 KB** | **6** |
| Bisherige Startseite, Desktop | 90 | 91 | 96 | 92 | 0,8 s (CLS 0,18) | 5.055 KB | 79 |
| **Prototyp, Desktop** | **100** | **100** | **100** | 60* | **0,4 s** (CLS 0) | **126 KB** | **6** |

\* SEO 60 nur wegen des gewollten `noindex`. Eine Kopie ohne `noindex` erreicht **SEO 100** (Einzelmessung).

Weitere Prüfungen (Skripte in `../werkzeuge/`):

- **axe-core** (WCAG 2.0/2.1/2.2 A+AA + Best Practices), 360 px und 1366 px: **0 Verstöße**. 7 Elemente „manuell prüfen“: Texte auf den gelben Platzhalter-Verläufen, rechnerisch ≥ 6:1.
- **Viewports:** 320, 360, 390, 768, 1024, 1366, 1920 px: kein horizontales Scrollen, kein Element ragt heraus.
- **Netzwerk:** 0 Anfragen an Drittanbieter, 0 Fehler (404), 0 Konsolenfehler, 0 Cookies.
- **Tastatur:** 12 von 12 geprüften Tab-Stopps mit sichtbarem Fokusrahmen; Sprunglink „Zum Inhalt springen“.

Screenshots: [`screenshots/`](screenshots/) (360, 768, 1366, 1920 px, jeweils ganze Seite und erster Bildschirm, dazu Menü offen und Fokus auf dem Sprunglink). Lighthouse-Berichte: [`lighthouse-berichte/`](lighthouse-berichte/).

## Lokal ansehen

Im Terminal:

```bash
cd "/Users/mohamed/github-projekte/Neuer Ordner/redesign"
python3 -m http.server 8000
```

Dann im Browser öffnen: <http://localhost:8000/site/> (beenden mit `Ctrl + C`).

Der Unterpfad `/site/` simuliert absichtlich GitHub Pages. Direktes Öffnen von `site/index.html` per Doppelklick funktioniert ebenfalls weitgehend, Schriften können dabei aber je nach Browser blockiert werden.

Prüfungen erneut ausführen (Server muss laufen):

```bash
cd "/Users/mohamed/github-projekte/Neuer Ordner/werkzeuge"
node pruefe-prototyp.mjs http://localhost:8000/site/ ../redesign/screenshots
node axe-pruefung.mjs http://localhost:8000/site/
```

## Auf GitHub Pages veröffentlichen (erst nach Zustimmung der Kundin)

> ⚠️ **Nur den Ordner `site/` veröffentlichen, niemals dieses Analyse-Repository.** Es enthält die vollständige Analyse einer realen Praxis, Rohdaten und Screenshots ihrer Website. GitHub Pages ist bei kostenlosen Konten nur für **öffentliche** Repositories verfügbar. Private Repositories mit Pages brauchen GitHub Pro/Team, und auch dann ist die **veröffentlichte Seite öffentlich erreichbar** (nur der Code bleibt privat). Der Entwurf ist per `noindex` von Suchmaschinen ausgeschlossen, über den Link aber für jeden aufrufbar.

**Schritt für Schritt (separates Repository, empfohlen):**

1. Neues, leeres Verzeichnis anlegen und nur den Prototyp hineinkopieren:
   ```bash
   mkdir -p ~/praxis-zum-schloss-entwurf
   cp -R "/Users/mohamed/github-projekte/Neuer Ordner/redesign/site/." ~/praxis-zum-schloss-entwurf/
   cd ~/praxis-zum-schloss-entwurf
   ls -a   # muss index.html, assets/ und .nojekyll zeigen
   ```
2. Git-Repository anlegen und committen:
   ```bash
   git init -b main
   git add -A
   git commit -m "Entwurf Startseite Praxis zum Schloss"
   ```
3. Auf GitHub ein Repository anlegen und hochladen. Entweder mit der GitHub-CLI:
   ```bash
   gh repo create praxis-zum-schloss-entwurf --public --source=. --push
   ```
   oder auf github.com → „New repository“ (leer, ohne README) anlegen und dann:
   ```bash
   git remote add origin https://github.com/<IHR-KONTO>/praxis-zum-schloss-entwurf.git
   git push -u origin main
   ```
4. Auf github.com im Repository: **Settings → Pages → „Build and deployment“ → Source: „Deploy from a branch“ → Branch: `main`, Ordner: `/ (root)` → Save.**
5. Nach 1–2 Minuten ist die Seite erreichbar unter `https://<IHR-KONTO>.github.io/praxis-zum-schloss-entwurf/`. Alle Pfade sind relativ, der Projekt-Unterpfad funktioniert ohne Anpassung. `.nojekyll` verhindert, dass GitHub die Dateien durch Jekyll schickt.
6. Nach der Präsentation: Repository auf „Private“ stellen oder unter Settings → Pages die Veröffentlichung beenden, wenn die Seite nicht mehr gebraucht wird.

**Alternative ohne öffentlichen Link:** Für ein Gespräch genügt oft eine Präsentation vom eigenen Rechner (`python3 -m http.server`) oder ein Versand der Screenshots.

## Struktur

```
redesign/
├── README.md                    diese Datei
├── site/                        ← nur dieser Ordner wird veröffentlicht
│   ├── index.html               Startseite (Entwurf, noindex)
│   ├── .nojekyll
│   └── assets/
│       ├── css/style.css        gesamtes Layout, kommentiert
│       ├── js/main.js           Menü, „Sprechzeiten heute“, Platzhalter-Links
│       ├── fonts/               Atkinson Hyperlegible Next, Source Serif 4 (+ OFL-Lizenzen)
│       └── img/                 Logo-Zeichen und Favicon (SVG, eigene Zeichnung)
├── screenshots/                 Prüf-Screenshots des Prototyps
└── lighthouse-berichte/         Lighthouse-Berichte (Median-Lauf) und Zusammenfassung
```
