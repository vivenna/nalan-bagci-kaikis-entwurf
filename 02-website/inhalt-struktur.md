# Phase C.2 – Inhalt und Struktur

Prüfung am 01.10.2026. Grundlage: Quelltexte aller 25 echten Seiten (Startseite, 5 Hauptseiten, 2 Kategorieseiten, 16 Leistungsseiten, Impressum/Datenschutz) unter `rohdaten/`, bereinigte Leistungstexte in [`rohdaten/leistungen/_texte-bereinigt.txt`](rohdaten/leistungen/_texte-bereinigt.txt), Screenshots unter [`screenshots/`](screenshots/).

## Kurzfazit

Die Praxis hat **mehr gute Inhalte, als die Website zeigt**: einen fundierten Lebenslauf, eine saubere Vorsorge-Übersicht und ausführliche Texte zu elf naturheilkundlichen Verfahren. Diese Substanz geht unter
- in einer Startseite ohne klare Führung,
- in veralteten Corona-Hinweisen,
- in Stockfotos aus dem Kosmetikbereich
- und in sichtbaren Fehlern.

Am schwersten wiegt etwas außerhalb des Menüs: **94 öffentlich erreichbare Demo-Seiten des Themes** zeigen unter dem Praxisnamen Lorem ipsum, fiktive Ärzte und eine „plastic surgery“-Startseite mit Gratis-Botox-Angebot.

## 1. Auffindbarkeit der wichtigsten Informationen (Patientensicht)

| Information | Wo zu finden | Klicks/Scrollen ab Startseite | Bewertung |
|---|---|---|---|
| Telefonnummer | Kopfzeile Desktop (klein), Footer; **mobil erst ganz unten** | Desktop 0 / mobil ≈ 10 Bildschirmhöhen | ✘ mobil |
| Sprechzeiten | Footer, Kontaktseite (überschrieben „Sonderöffnungszeiten während der Corona-Pandemie“) | ganz unten | ✘ versteckt und missverständlich |
| Adresse / Anfahrt | Kopfzeile (Desktop), Footer; **keine Anfahrtsbeschreibung, kein ÖPNV-Hinweis, kein Kartenlink** | – | ✘ |
| Termin | Button „Termin“ im Menü → Anfrageformular | 1 Klick | ~ vorhanden, aber nur Anfrage, Ablauf unklar |
| Leistungen | Menü „Leistungsspektrum“ (Dropdown mit 16 Punkten in Versalien) | 1 Klick | ~ vollständig, aber unübersichtlich |
| Ärztin / Qualifikation | „Unsere Praxis“: Porträt + Lebenslauf (unter einem Zitat) | 1 Klick | ✔ Inhalt gut, Einstieg unglücklich |
| Team | nicht vorhanden (nur „Helferin“, „Praxisteam“ erwähnt) | – | ✘ |
| Sprachen (Englisch, Türkisch) | **nicht erwähnt** | – | ✘ |
| Barrierefreier Zugang der Praxis | nicht erwähnt | – | ✘ |
| Notfall | Kontaktseite: 116117 / 112 | 1 Klick | ✔ |
| Rezept-/Überweisungsbestellung | nicht vorhanden | – | ✘ (häufigster Hausarzt-Anlass) |

**Navigationstiefe:** flach (max. 2 Ebenen) ✔, aber das Menü mischt Kassenleistungen und Naturheilkunde in einem langen Dropdown. Leistungsseiten haben eine gute Seitenleiste mit allen Leistungen ✔.

## 2. Startseite im Detail (Reihenfolge von oben)

| Abschnitt | Befund |
|---|---|
| Slider mit Blumenbild und Porträt | Freundlich, aber generisch („Hier bieten wir Ihnen ein umfangreiches Spektrum an Diagnostik, Beratung und Therapien.“). Kein Hinweis „Hausärztin in Charlottenburg“, kein Handlungsaufruf. Mobil ist das Porträt abgeschnitten. Verursacht LCP 11,6 s |
| Kasten „Die Hausarztpraxis zum Schloss“ | Untertitel „Fachärztin für Allgemeinmedizin, Akupunktur und Naturheilkunde, Reisemedizin“; Foto einer Akupunktur-Szene (Stockfoto) |
| Einleitungstext | Inhaltlich gut („dauerhaft angelegte Arzt-Patienten-Beziehung“), aber als fette Großschrift gesetzt |
| Zwei Zitat-Icons mit Links „Vorsorgeleistungen“, „Therapeutische Leistungen“ | Anführungszeichen-Icons als Aufzählungszeichen, irreführend |
| Karussell Naturheilkunde (3 sichtbar) | Bilder aus dem Kosmetikbereich (Pipette auf Gesicht = „Enzymtherapie“, Gesichtsmassage = „Aufbaukuren“), Teaser mitten im Satz abgeschnitten („Ein Enzymdefekt“) |
| Überschrift „Wir betrachten den **sondern deren Ursachen.**“ | **Satz verstümmelt** (Wortteil fehlt). Foto: Schröpfgläser mit Kerzen und Räucherstäbchen (Spa-Anmutung) |
| **Corona-Hinweis** „STOP !!! Bitte betreten Sie unsere Praxis nicht!“, Risikogebiete laut RKI, Senats-Hotline, Corona-Abstrichstellen | **Veraltet** (Stand 2020/21), wirkt abweisend, verwirrt Patientinnen und Patienten |
| Buttons „Vorsorgeuntersuchungen“, „Terminvergabe“, „Notfallnummern“, „Sprechzeiten“ + Listen (Check-up, EKG, Lungenfunktion …) | Nützlich, aber ganz unten |
| Logo-Leiste ärzte-naturheilverfahren.de, jameda, arzt-auskunft, sanego | **Link zu ärzte-naturheilverfahren.de ist tot (HTTP 404)**; Bewertungsportale verlinkt, aber nicht gepflegt |
| Footer | „Allgemeinmediziner“ (männliche Form), „© 2022“, Uhrzeiten mit „°°“ |

## 3. Textqualität und Aktualität

| Befund | Beispiele / Ort | Schwere |
|---|---|---|
| **Veraltete Inhalte** | Corona-Block (Startseite), „Sonderöffnungszeiten während der Corona-Pandemie“ und „neue Praxisräume … ab April 2021“ (Kontakt), „© 2022“ | hoch |
| **Sichtbare Fehler** | „Wir betrachten den sondern deren Ursachen.“; „VORSORGELEİSTUNGEN“/„MEDİZİN“ mit türkischem İ (auch in H1 und Seitentitel); „THERAPEUTISCHE-LEISTUNGEN“ mit Bindestrich; „Revitaöisierend“, „Aufkur“, „psychiche“, „äussere“; „Human Medizin“, „HumboldtUniversität“, „Charité`“; Footer „Allgemeinmedizineri-n“ | mittel–hoch (Vertrauen) |
| **Falscher Text auf falscher Seite** | „Orthomolekulare Medizin“ enthält Absätze aus „Mesotherapie“ („mit sehr feinen Nadeln … in die Haut injiziert“) | hoch (fachlich falsch) |
| **Fremdtexte** | Phytotherapie: mehrere Passagen wortgleich aus einem Artikel der Techniker Krankenkasse („Gegen jedes Leiden ist ein Kraut gewachsen – daran glauben jedenfalls 72 Prozent …“, Arnika-, Ringelblumen-Absätze; Abgleich 01.10.2026 mit [tk.de](https://www.tk.de/techniker/gesundheit-und-medizin/behandlungen-und-medizin/alternativ-heilen/phytotherapie-kraft-der-pflanzen-2016252)). Enzymtherapie: Herstellerformulierung („… zum Wohle von Mensch und Tier – in den Mittelpunkt unseres Handelns“). Schröpfen: Zitat mit Fremdkürzel „(S.S.)“ | hoch (Urheberrecht, Duplicate Content) |
| **Uneinheitliche Ansprache** | Sie-Form im Text, **Du-Form im Kontaktformular** („Dein Name“, „Deine E-Mail“) | niedrig |
| **Versalien-Überschriften** | alle Leistungstitel in Großbuchstaben | niedrig (Lesbarkeit) |
| **Textlänge** | 145–1.010 Wörter je Leistungsseite; „Aufbaukuren“ (1.010) und „Phytotherapie/Homöopathie“ (895) sehr lang, „Eigenbluttherapie“ (145) und „Aderlass“ (160) knapp | – |
| **Gute, wiederverwendbare Texte** | Vorsorge (Check-up 35, Hautkrebs-Screening, Krebsvorsorge, J1/J2, geriatrisches Basisassessment, STIKO-Impfberatung), Impfungen/Reisemedizin, Diagnostik (Labor, EKG, Lungenfunktion, Langzeit-RR), Lebenslauf | ✔ |

## 4. Bilder

| Befund | Bewertung |
|---|---|
| Porträt der Ärztin (Slider, „Unsere Praxis“): professionell, freundlich | ✔ **behalten** (Freigabe und Nutzungsrechte klären) |
| Logo mit Illustration von Schloss Charlottenburg | ✔ Wiedererkennungswert, lokaler Bezug. Liegt nur als PNG vor (`massage_logo_01.png`) → als Vektor neu aufsetzen |
| Leistungsbilder: Stockfotos mit Kosmetik-/Spa-Anmutung (Gesichtsbehandlungen, Kerzen, Räucherstäbchen, Blutkörperchen-Grafik) | ✘ passt nicht zu einer seriösen Hausarztpraxis; Lizenzen unbekannt |
| **Keine Fotos der Praxisräume, des Teams, des Gebäudes/Eingangs** | ✘ fehlende Vertrauens- und Orientierungselemente |
| Dateigrößen bis 956 KB, keine modernen Formate | ✘ (siehe `technik.md`) |

## 5. Vertrauenselemente und Handlungsaufrufe

- **Vorhanden:** Lebenslauf mit Charité-Bezug, Facharztbezeichnung, Notfallnummern, Logos der Bewertungsportale.
- **Fehlen:**
  - Praxisfotos, Team
  - Sprachen
  - barrierefreier Zugang
  - Kassen-/Privat-Hinweis
  - Ablauf des ersten Besuchs
  - Hinweise zu IGeL-Kosten bei Naturheilverfahren (nur einmal bei der Diagnostik erwähnt)
  - aktuelle Hinweise (Urlaub, Vertretung)
  - Rezeptbestellung
- **Handlungsaufrufe:** „Termin“-Button im Menü ✔; mobil fehlt ein dauerhaft sichtbarer Anruf-Button. Auf Leistungsseiten gibt es keinen Termin-Hinweis am Seitenende.

## 6. Demo-Inhalte des Themes (öffentlich erreichbar)

**Fakt:** 94 der 119 URLs in der XML-Sitemap stammen aus dem Theme-Demo. Stichprobe am 01.10.2026: alle HTTP 200, kein `noindex`, Seitentitel jeweils „… – PRAXIS ZUM SCHLOSS“. Screenshots: [`screenshots/demo-homepage-plastic-laptop-1366px.png`](screenshots/demo-homepage-plastic-laptop-1366px.png), [`screenshots/demo-team-laptop-1366px.png`](screenshots/demo-team-laptop-1366px.png).

| URL (Auswahl) | Sichtbarer Inhalt unter dem Praxisnamen |
|---|---|
| `/homepage-plastic/` | „We are the leading plastic surgery center in the World“, **„Get a free trial bottox injection – free“**, „86 Qualified doctors · 19 Diagnostic departments · 27 Years of experience · 50+ Patients every day“, „Look at the difference before and after procedures“ (Face surgery, Breasts reconstruction, Botox Injections), „Robin Patrick – chief plastic surgeon“, Telefon „+3 (092) 508-38-01“, Lorem-ipsum-„Patientenstimmen“ |
| `/team/`, `/team/antony-taylor/` u. a. | Fiktive Ärzte (Cardiology, Surgery, Urology, Neurosurgery), Profil „Engineer, Age 28“, Skills „Barista 53 %“, E-Mail `johnrichards@your-company.com` |
| `/testimonials/` | 14 erfundene „Patientenstimmen“ (Lorem ipsum, „Truck Driver“, „Business Analyst“) |
| `/faq/`, `/?faq=how-to-choose-the-right-coffee` | Kaffee- und Shop-FAQ |
| `/shop/`, `/cart/`, `/checkout/`, `/mein-konto/` | Shop-Gerüst |
| `/gallery/neurosurgery/`, `/gallery/mri-scanning/` … | Fremde Fachgebiete |
| `/homepage-diagnostic/`, `/homepage-medical-blog/`, `/elements/…` | Demo-Layouts |

**Bewertung:** Diese Seiten widersprechen dem Wunsch nach „seriösem Erscheinungsbild“ am stärksten. Sie können jederzeit über Google oder eine geteilte URL gefunden werden. Rechtliche Einordnung siehe [`recht-datenschutz.md`](recht-datenschutz.md). **Empfehlung unabhängig vom Angebot: sofort löschen bzw. auf `noindex` setzen und aus der Sitemap nehmen.**

## 7. Schwächste Seite (für die Prototyp-Auswahl)

Kandidaten:
- **Startseite:** erste Anlaufstelle; veraltet, verstümmelte Überschrift, mobil überlang, langsam, ohne H1.
- „Unsere Praxis“: gute Inhalte, aber das Bach-Zitat („Versagen der modernen medizinischen Wissenschaft“) steht vor dem Lebenslauf.
- „Termin“: funktional dünn.

Die Startseite bündelt die meisten Probleme **und** ist die Seite mit der größten Wirkung. Begründung der Wahl in `redesign/README.md`.
