# Phase D – Erhalten, optimieren oder neu bauen?

Stand: 01.10.2026 · Grundlage: Phasen A–C (`00-plausibilitaet/`, `01-praxis/`, `02-website/`). **Keine Preise, keine Stundensätze.** Aufwände sind grobe Spannen in Stunden für vivenna, bevor Zugänge und Backend gesichtet wurden.

## Gesamtempfehlung in einem Satz

**Relaunch auf neuer technischer Basis mit Übernahme und Überarbeitung der vorhandenen Inhalte.** Inhaltlich ist das ein Teil-Relaunch, technisch und gestalterisch ein Neubau. Vorgeschaltet werden **Sofortmaßnahmen auf der bestehenden Seite** (wenige Stunden), weil einige Befunde nicht bis zum Relaunch warten sollten.

## Warum nicht „nur optimieren“? (ehrlich gegen den Wunsch „kein Neubau“)

Die Kundin wünscht ausdrücklich keinen Neubau, *sofern* sich die Seite sinnvoll optimieren lässt. Genau das ist hier nicht der Fall:

1. **Das Fundament ist ein Auslaufmodell.** Das Theme „Holamed“ braucht das Framework Unyson. Unyson ist seit Oktober 2023 wegen einer Sicherheitslücke aus dem WordPress-Verzeichnis entfernt und erhält keine Updates (`technik.md` §1). Jede Optimierung würde auf diesem Fundament aufbauen und es damit verlängern.
2. **Das Layout ist an den Page-Builder gebunden.** Alle Seiten bestehen aus WPBakery-Shortcodes eines Spa-Demos (`massage_logo`, `face-recovery-massage`). Ein neues, seriöses Design innerhalb dieses Gerüsts kostet ähnlich viel wie ein sauberer Neuaufbau, liefert aber ein schlechteres Ergebnis.
3. **Die Performance-Probleme sind strukturell.** LCP mobil 11,6 s entsteht durch Slider, Builder-CSS/JS, zwei Icon-Bibliotheken und Theme-Bilder. Ohne diese Bausteine gibt es die Probleme nicht.
4. **Die Altlasten sind umfangreich.** 94 Demo-URLs, theme-eigene Inhaltstypen, Shop-Gerüst. Ein Aufräumen bis zur Fehlerfreiheit ist schwer kalkulierbar, ein Festpreis darauf riskant.
5. **Optimierung wäre kein Festpreis-freundliches Produkt.** Der Zustand des Backends (Plugins, Datenbank, Lizenzen, Formulareingänge) ist unbekannt. Bei einem Neuaufbau ist der Leistungsumfang dagegen klar definierbar.

**Was dagegen spricht und trotzdem gilt:** Die *Inhalte* sind besser als ihr Auftritt und werden weitgehend übernommen. Ebenso bleiben Domain, Hosting, Logo-Idee, Porträt, Farbwelt und das Konzept „eine Seite pro Leistung“. Für die Kundin fühlt es sich daher wie eine **Modernisierung ihrer Website** an, nicht wie ein Neuanfang.

## Bewertung pro Bereich

| Bereich | Urteil | Begründung | Beleg |
|---|---|---|---|
| **Domain** `hausarztpraxis-zum-schloss.de` | **behalten** | Eingeführt, im KV-Register, in Verzeichnissen und in der Praxis-E-Mail | Phase A |
| **Hosting** (Alfahosting/dogado, DE) | **behalten** (Tarif prüfen) | Serverstandort Deutschland, 80 ms Antwortzeit, TLS 1.3, E-Mail läuft dort. Ein Umzug brächte Risiko ohne Nutzen. PHP-Version und Tarif mit dem Zugang prüfen | `technik.md` §2 |
| **Design** | **ersetzen**, Markenelemente **behalten** | Spa-Anmutung, Slider, Kosmetik-Stockfotos, Versalien, „°°“-Uhrzeiten. **Behalten:** Logo-Idee mit Schloss-Illustration (als Vektor neu aufsetzen), Türkis als Akzentfarbe, Porträt der Ärztin | `inhalt-struktur.md` §2, §4 |
| **Struktur** | **überarbeiten** | **Behalten:** flache Navigation, eigene Seite je Leistung. **Neu:** klare Trennung „Hausärztliche Versorgung“ / „Naturheilkunde & Akupunktur“, Sprechzeiten/Anfahrt/Telefon prominent, Team, Sprachen, Barrierefreiheit der Praxis, Rezept/Überweisung, Aktuelles (Urlaub). **Entfernen:** Demo-Inhaltstypen | `inhalt-struktur.md` §1, §6 |
| **Texte** | **überarbeiten** (teils ersetzen) | **Weitgehend behalten:** Vorsorge, Impfungen/Reisemedizin, Diagnostik, therapeutische Leistungen, Lebenslauf (ohne Privatangaben). **Neu schreiben:** Startseite, Naturheilkunde-Texte (sachlich statt Wirkversprechen, HWG), Phytotherapie (Fremdtext), Orthomolekular (falscher Text). **Löschen:** Corona-Block, Bach-Zitat als Einstieg | `inhalt-struktur.md` §3, `recht-datenschutz.md` §5–6 |
| **Bilder** | **teils behalten, überwiegend ersetzen** | **Behalten:** Porträt, Logo. **Ersetzen:** Theme-/Stockfotos (Lizenz unklar, Kosmetik-Anmutung). **Neu (empfohlen):** kleines Fotoshooting Praxis, Eingang, Team, Behandlungsraum | `inhalt-struktur.md` §4 |
| **Technik** | **ersetzen** | Holamed + Unyson (geschlossen, CVE ohne Fix) + WPBakery 6.10 + veraltetes WordPress, reCAPTCHA, Konsolenfehler, keine Sicherheits-Header | `technik.md` |
| **SEO** | **neu aufsetzen**, Basis **behalten** | **Behalten:** Domain, Seiten je Leistung, Canonical, HTTPS. **Neu:** Titles/Descriptions, H1, `Physician`-Schema, deutsche URLs mit 301-Weiterleitungen, bereinigte Sitemap, Google-Profil und Verzeichnisse angleichen | `seo-lokal.md` |
| **Recht / Datenschutz** | **ersetzen** | Impressum ergänzen (Kammer, Berufsbezeichnung, Berufsrecht, KV), OS-Link raus, Datenschutzerklärung neu (realer Hoster, keine Fantasie-Dienste, Formulare/Gesundheitsdaten), reCAPTCHA weg und dadurch **kein Consent-Banner nötig**, HWG-konforme Leistungstexte | `recht-datenschutz.md` |
| **Terminbuchung** | **neu** | Bisher nur Anfrageformular. Im Umfeld haben 3 von 5 Praxen eine Online-Buchung. Anbieter nach Praxissoftware wählen, Einbindung per Link/Button (lädt nichts vor dem Klick) | `01-praxis/praxis-recherche.md` §4–5 |

## Stufe 0 – Sofortmaßnahmen auf der bestehenden Seite (unabhängig vom Angebot empfohlen)

| Maßnahme | Warum sofort | Aufwand |
|---|---|---|
| Vollbackup (Dateien + Datenbank) | Vor jeder Änderung | 0,5–1 h |
| **Demo-Inhalte löschen** (Plastic-Startseite, Team, Testimonials, FAQ, Galerie, Shop, Elements …) bzw. mindestens `noindex` + aus Sitemap; ggf. Entfernung in der Google Search Console beantragen | 🔴 Gratis-Botox, Vorher-Nachher, erfundene Zahlen unter Praxisnamen | 1,5–3 h |
| Corona-Block und „Sonderöffnungszeiten … Corona“ entfernen, Sprechzeiten vereinheitlichen | Patienteninformation falsch/veraltet | 0,5 h |
| Impressum: OS-Link entfernen, DDG statt TMG, Kammer/Berufsbezeichnung/Berufsrecht ergänzen, Telefonformat | Rechtliche Mindestkorrektur | 0,5–1 h |
| reCAPTCHA deaktivieren (Honeypot statt Google) | Lädt ohne Einwilligung auf jeder Seite, funktioniert vermutlich nicht | 0,5–1 h |
| **Summe Stufe 0** | | **≈ 3–6 h** |

> Risiko Stufe 0: Updates von Theme/Plugins **nicht** im Rahmen der Sofortmaßnahmen. Bei diesem Stack können Updates die Seite zerlegen. Stufe 0 räumt nur Inhalte und Einstellungen auf.

## Aufwandsindikation Relaunch (Stunden-Spannen, ohne Preise)

Annahme: ca. 25 Seiten (Startseite, Praxis/Ärztin, Team, Sprechzeiten & Anfahrt, Termin, Kontakt, 2 Übersichten, 16 Leistungen, Impressum, Datenschutz), Deutsch, Übernahme vorhandener Texte mit Überarbeitung.

| Bereich | Inhalt | Stunden |
|---|---|---|
| Projektstart | Gespräch, Zugänge sichern, Inhaltsinventur, Abstimmung NAP/Sprechzeiten | 4–6 |
| Informationsarchitektur | Seitenstruktur, Navigation, Wireframes mobil/Desktop | 4–8 |
| Design | Gestaltung Startseite + Vorlagen (Leistung, Info-Seite, Kontakt), Logo als Vektor, 2 Korrekturschleifen | 12–20 |
| Technische Umsetzung | Templates/Komponenten, mobile first, Barrierefreiheit WCAG 2.2 AA, Performance (Ziel Lighthouse grün), Sicherheits-Header | 24–40 |
| Inhalte | Übernahme und Lektorat von ~25 Seiten, Neufassung Startseite und 11 Naturheilkunde-Texte (sachlich, HWG-bewusst), Einarbeitung der Freigaben | 16–28 |
| Bilder | Auswahl, Zuschnitt, moderne Formate (AVIF/WebP), Alt-Texte | 3–6 |
| Online-Terminbuchung | Einbindung eines gewählten Anbieters (Button/Link, Datenschutzhinweis) | 2–6 |
| Lokales SEO | Titles, Descriptions, H1, `Physician`-JSON-LD, 301-Weiterleitungen aller alten URLs, Sitemap, Search Console, Abgleich Google-Profil/Jameda/arzt-auskunft (Anleitung bzw. Umsetzung mit Zugang) | 6–10 |
| Recht/Datenschutz (technisch) | Einbau Impressum/Datenschutz (Texte von Kundin/Generator/Anwalt), einwilligungsfreie Lösungen, Formular ohne Gesundheitsdaten | 3–6 |
| Qualitätssicherung und Go-Live | Geräte-/Browsertest, Lighthouse/axe, Weiterleitungstest, Umstellung, Einweisung | 6–10 |
| Projektleitung/Abstimmung | ≈ 10–15 % | 8–14 |
| **Summe Relaunch** | | **≈ 88–154 h** |

**Optionale Module** (nur wenn gewünscht, separat ausweisen):

| Modul | Stunden |
|---|---|
| Auswahlberatung Terminbuchung (Abgleich mit Praxissoftware, 2–3 Anbieter) | 2–4 |
| Mehrsprachigkeit Englisch/Türkisch (Technik + Einpflegen; **Übersetzung extern**) | 10–20 |
| Rezept-/Überweisungsbestellung (sichere Lösung mit AVV, ohne Klartext-Mail) | 4–8 |
| Koordination Fotoshooting (Fotograf extern) | 2–4 |
| Aufräumen/Korrigieren der Verzeichnisprofile im Auftrag (mit Zugängen) | 2–4 |

**Laufende Leistungen** (für die getrennte Ausweisung „laufende Kosten“):

| Posten | Art | Indikation |
|---|---|---|
| Hosting, Domain | Bestandsvertrag der Praxis (Alfahosting) | unverändert, kein vivenna-Aufwand |
| Terminbuchung | Lizenz des Anbieters (Vertrag der Praxis) | anbieterabhängig |
| Wartung (Updates, Backups, Monitoring, Sicherheits-Checks) | vivenna | WordPress: **≈ 1–2 h/Monat**; statische Seite: **≈ 0,25–0,5 h/Monat** |
| Inhaltspflege (Sprechzeiten, Urlaub, Aktuelles) | vivenna oder Praxis | nach Bedarf; Kontingent z. B. 1 h/Monat |
| Rechtstexte aktuell halten | Generator-Abo oder Anwalt (Praxis) | extern |

## Plattformwahl (Entscheidung nach dem Gespräch)

| Variante | Für wen | Vorteile | Nachteile |
|---|---|---|---|
| **A: WordPress neu** (Block-Theme, Core-Editor, max. 3–5 Plugins, kein Page-Builder) | Praxis will Inhalte **selbst und häufig** pflegen | Vertraut, Selbstpflege möglich, gleicher Hosting-Tarif | Laufende Updates Pflicht; ohne Wartungsvertrag droht derselbe Zustand wie heute |
| **B: Statische Website** (z. B. Astro, wie im Prototyp) | Änderungen **selten**, Pflege durch vivenna | Sehr schnell, kaum Angriffsfläche, kaum Wartung, kein Datenbank-/Plugin-Risiko | Änderungen über vivenna oder ein einfaches Redaktionswerkzeug |

**Einschätzung:** Die bestehende Installation wurde seit etwa Januar 2025 nicht mehr aktualisiert. Das ist ein deutliches Indiz, dass Selbstwartung im Praxisalltag nicht stattfindet. Deshalb empfehle ich **Variante B mit kleinem Pflegekontingent**. Variante A empfehle ich nur, wenn die Praxis regelmäßig selbst pflegen will **und** einen Wartungsvertrag abschließt. Ausschlaggebend ist die Frage „Wer pflegt künftig Inhalte?“ (`FRAGEN.md`).

## Risiken für einen Festpreis

| Risiko | Wirkung | Absicherung im Angebot |
|---|---|---|
| Zugänge zu Domain, Hosting, WordPress fehlen oder liegen beim früheren Dienstleister | Verzögerung, Mehraufwand | Zugänge als Mitwirkungspflicht vor Projektstart |
| Fachliche Freigabe der (Naturheilkunde-)Texte zieht sich, viele Schleifen | Mehraufwand Inhalte | Anzahl Korrekturschleifen festlegen (z. B. 2), Freigabefristen |
| Juristische Prüfung von Werbeaussagen gewünscht | Externe Kosten, Wartezeit | Nicht im Festpreis; Empfehlung, Texte durch Kammer/Anwalt prüfen zu lassen |
| Rechtstexte (Impressum/Datenschutz) | Haftung | Texte liefert die Praxis (Generator/Anwalt); vivenna baut ein |
| Fehlende eigene Fotos, unklare Lizenzen alter Bilder | Verzögerung oder Ersatzbeschaffung | Fotos als Kundenbeistellung oder optionales Modul |
| Wahl des Buchungssystems, Anbindung an die Praxissoftware | Unbekannter Integrationsaufwand | Nur Einbindung per Link/Widget im Festpreis; Integration separat |
| E-Mail läuft beim selben Hoster (MX `secure-mailgate.com`) | Ausfall der Praxis-Mail bei DNS-Fehlern | DNS nur für die Website ändern, Mail unangetastet; Test vor Go-Live |
| Unbekannte Backend-Altlasten (gespeicherte Formulareingänge, Benutzerkonten, Lizenzen) | Aufwand Bereinigung, ggf. Datenschutzpflichten | Sichtung im Projektstart, Bereinigung als eigener Posten |
| Wünsche wachsen (Mehrsprachigkeit, Blog, Rezeptbestellung) | Scope Creep | Optionale Module separat ausweisen |
| Uneinheitliche Namens-/Titelführung, NAP | Nacharbeit an vielen Stellen | Verbindliche Fassung als erster Projektschritt |

## Annahmen (ausdrücklich)

1. Einzelpraxis, weniger als 10 Beschäftigte (aus Register abgeleitet, Teamgröße unbekannt).
2. Domain und Hosting bleiben bei Alfahosting; Zugang ist beschaffbar.
3. Die vorhandenen Texte dürfen überarbeitet werden. Fremdtexte (TK) werden ersetzt, nicht übernommen.
4. Porträt und Logo gehören der Praxis bzw. sind für die Website lizenziert (zu bestätigen).
5. Deutsch als einzige Sprache im Grundumfang.
6. Die Ärztin gibt medizinische Inhalte fachlich frei; vivenna verantwortet Sprache, Struktur und Technik, nicht die medizinische Richtigkeit.
7. Keine Anbindung an die Praxissoftware im Grundumfang.
8. Rechtstexte liefert die Praxis.
