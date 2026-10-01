# Zusammenfassung: Anfrage Dr. Nalan Bagci / Praxis zum Schloss

Stand 01.10.2026 · Details in `00-plausibilitaet/`, `01-praxis/`, `02-website/`, `03-empfehlung/`, `redesign/`

## Fazit

Die Anfrage ist echt: Absenderin ist die Hausärztin Nalan Bagci-Kaikis, „Praxis zum Schloss“, Schloßstraße 21, Berlin-Charlottenburg. Die Website ist **hausarztpraxis-zum-schloss.de**. Die Seite hat gute Inhalte, steht aber auf einem veralteten Kauf-Theme mit stillgelegtem Framework, lädt mobil 11,6 s bis zum Hauptinhalt und zeigt unter dem Praxisnamen öffentlich Theme-Demoseiten (u. a. „Gratis-Botox“, erfundene Ärzte und Patientenstimmen). Wir empfehlen **Sofortmaßnahmen (≈ 3–6 h)** und danach einen **Relaunch auf neuer technischer Basis mit Übernahme und Überarbeitung der Inhalte (≈ 88–154 h)**. Eine reine Optimierung der bestehenden Installation ist nicht sinnvoll.

## Plausibilität (Konfidenz: hoch)

- **Fakt:** Das amtliche KBV-Register (116117) führt „Frau Nalan Bagci-Kaikis“, Hausärztin, Schloßstraße 21, 14059 Berlin, E-Mail info@hausarztpraxis-zum-schloss.de, Tel. 030 3223612. arzt-auskunft, Jameda (24 Bewertungen, Ø 4/5) und Sanego bestätigen das.
- „Kaikis“ ist Teil des Doppelnamens. Die Signatur „Dr. Nalan Bagci“ ist eine Kurzform. Der Grad „Dr.“ steht auf der Website und in der Mail, aber nicht im Register, im eigenen Impressum oder in den Verzeichnissen. Das wird **neutral im Gespräch geklärt**.
- Keine Warnsignale. Einziger Restpunkt: Absender ist eine GMX-Adresse statt der Praxisdomain → Rückruf über die Registernummer.

## Praxis in 5 Zeilen

- Einzelpraxis (nur sie unter der Adresse im Register), eigene Praxis seit 10/2019, in der Schloßstraße 21 seit 04/2021.
- Fachärztin für Allgemeinmedizin, laut Verzeichnis Zusatzbezeichnungen Akupunktur, Homöopathie, Naturheilverfahren; Lebenslauf mit Charité-Bezug.
- Profil: Hausarztpraxis (Vorsorge, Impfungen/Reisemedizin, Diagnostik, Psychosomatik) mit ausgeprägtem Naturheilkunde-Angebot (11 Verfahren). Im direkten Umfeld ist das ein Alleinstellungsmerkmal.
- Kasse, privat und Selbstzahler; Sprachen laut Verzeichnis Englisch und Türkisch (auf der Website nicht erwähnt).
- Keine Online-Buchung (nur Anfrageformular). 2 von 5 Nachbarpraxen nutzen nachweislich Buchungssysteme. Die fast namensgleiche „Praxis **am** Schloss“ liegt im selben Kiez.

## Website-Befund

**Stärken**
1. Eingeführte Domain; Hosting in Deutschland, schnell (80 ms Serverantwort), TLS 1.3.
2. Substanzielle Inhalte: Vorsorge-, Impf- und Diagnostik-Texte, Lebenslauf, eine Seite je Leistung.
3. Markenelemente mit Wiedererkennung: Logo mit Schloss-Illustration, Türkis, professionelles Porträt.
4. Keine Google Fonts, Karten oder Tracker; flache Navigation.

**Probleme nach Schwere**

| # | Schwere | Problem | Beleg |
|---|---|---|---|
| 1 | 🔴 | **94 von 119 Sitemap-URLs sind Theme-Demo-Inhalte**, öffentlich und ohne `noindex`, darunter „leading plastic surgery center“, „free trial bottox injection“, Vorher-Nachher-Hinweis, „86 Qualified doctors“, erfundene Ärzte und Patientenstimmen, Kaffee-FAQ, Shop | `02-website/inhalt-struktur.md` §6 |
| 2 | 🔴 | **Veraltete, ungepflegte Technik:** WordPress 6.7.1, Theme-Framework **Unyson seit 2023 geschlossen (CVE ohne Fix)**, WPBakery 6.10 mit bekannten XSS-Lücken, keine Sicherheits-Header, Pflege-Indiz: zuletzt Januar 2025 | `technik.md` §1–2 |
| 3 | 🟠 | **Mobil langsam:** Performance 62, LCP 11,6 s, 3,9 MB (3 Läufe, Median) | `technik.md` §3 |
| 4 | 🟠 | **Datenschutz:** Google reCAPTCHA lädt auf jeder Seite ohne Einwilligung, kein Consent-Banner; die Datenschutzerklärung nennt die Praxis als Hoster und beschreibt nicht genutzte Dienste; das Freitextfeld im Terminformular lädt zur Eingabe von Gesundheitsdaten ein | `recht-datenschutz.md` §2–4 |
| 5 | 🟠 | **Werbeaussagen (HWG) auffällig:** „Behandlungserfolge sprechen für sich“, „Leberentgiftung“, Falten/Cellulite „schnell, preiswert … korrigieren“; Fremdtexte (TK-Artikel) | `recht-datenschutz.md` §5–6 |
| 6 | 🟠 | **Impressum unvollständig:** Kammer, Berufsbezeichnung und Berufsrecht fehlen, „§ 5 TMG“ statt DDG, Link zur abgeschalteten OS-Plattform, Steuernummer veröffentlicht | `recht-datenschutz.md` §1 |
| 7 | 🟠 | **Veraltete Inhalte und Fehler:** Corona-Block auf der Startseite, verstümmelte Überschrift, falscher Text auf „Orthomolekulare Medizin“, Tippfehler | `inhalt-struktur.md` §2–3 |
| 8 | 🟡 | **Lokales SEO schwach:** keine Meta-Descriptions, keine H1 auf der Startseite, keine strukturierten Daten, drei verschiedene Sprechzeiten-Versionen im Netz, Website in Stichproben nicht sichtbar | `seo-lokal.md` |
| 9 | 🟡 | **Barrierefreiheit:** Kontrastfehler, Formulare ohne Labels, kaum sichtbarer Tastaturfokus, kein Sprunglink | `technik.md` §6 |

## Empfehlung und Aufwand (Stunden, keine Preise)

| Paket | Inhalt | Aufwand |
|---|---|---|
| **Stufe 0 – Sofort** | Backup, Demo-Inhalte löschen bzw. `noindex`, Corona-Block raus, Impressum-Minimalkorrektur, reCAPTCHA aus | **≈ 3–6 h** |
| **Relaunch** | Neue Basis (statisch *oder* schlankes WordPress), neues Design mit bestehenden Markenelementen, ~25 Seiten mit überarbeiteten Inhalten, HWG-bewusste Naturheilkunde-Texte, lokales SEO inkl. `Physician`-Schema und Weiterleitungen, Online-Termin-Einbindung, Barrierefreiheit WCAG 2.2 AA | **≈ 88–154 h** |
| Optional | Buchungs-Auswahlberatung 2–4 h · Mehrsprachigkeit EN/TR 10–20 h (+ externe Übersetzung) · Rezeptbestellung 4–8 h · Fotoshooting-Koordination 2–4 h · Verzeichnisprofile 2–4 h | separat |
| Laufend | Wartung WordPress ≈ 1–2 h/Monat **oder** statisch ≈ 0,25–0,5 h/Monat; Hosting/Domain/Buchungstool als Verträge der Praxis | getrennt ausweisen |

**Behalten:** Domain, Hosting, Texte (überarbeitet), Porträt, Logo-Idee, Türkis, „eine Seite pro Leistung“. **Ersetzen:** Theme/Framework/Builder, Design, Stockfotos, Rechtstexte, reCAPTCHA. Plattform-Empfehlung: **statisch mit kleinem Pflegekontingent**. Die Praxis hat die bestehende WordPress-Installation nachweislich nicht gewartet. WordPress nur mit Wartungsvertrag.

**Prototyp:** Neue Startseite in `redesign/` (statisch, GitHub-Pages-tauglich, `noindex`, als Entwurf markiert). Gemessen: mobil **Performance 99, Barrierefreiheit 100, LCP 1,8 s, 126 KB** (vorher 62 / 86 / 11,6 s / 3,9 MB); axe-core 0 Verstöße; keine Drittanbieter, keine Cookies.

## Risiken für den Festpreis

Fehlende Zugänge oder ein blockierender Altdienstleister · Freigabeschleifen bei medizinischen Texten · gewünschte juristische Prüfung der Werbeaussagen · fehlende eigene Fotos bzw. unklare Bildrechte · Anbindung des Buchungssystems an die Praxissoftware · Praxis-E-Mail beim selben Hoster · unbekannte Backend-Altlasten · wachsende Wünsche (Mehrsprachigkeit, Rezeptbestellung). Gegenmittel: Mitwirkungspflichten, 2 Korrekturschleifen, Rechtstexte als Kundenbeistellung, optionale Module separat (`03-empfehlung/`).

## Nächste Schritte

1. **Mohamed:** Prototyp und Screenshots ansehen und die Fragen in `NEEDS-HUMAN.md` beantworten (Design-Feedback Nr. 5; Google-Profil und Index Nr. 2–3; Mail-Header Nr. 1).
2. **Antwortmail** senden (`entwurf-antwort-mail.md`), 15-Minuten-Telefonat über die Praxisnummer aus dem Register.
3. Im Gespräch die **A-Fragen aus `FRAGEN.md`** klären, vor allem Zugänge, Pflegemodell, Terminsystem, Budget und Zeit; **Sofortmaßnahme Demo-Seiten** freigeben lassen.
4. Danach Festpreis-Angebot: Stufe 0, Relaunch, optionale Module, laufende Kosten getrennt.
5. Prototyp erst **nach Zustimmung** der Kundin öffentlich zeigen (Anleitung `redesign/README.md`).

*Hinweis: Rechtliche Einschätzungen sind Hinweise, keine Rechtsberatung.*
