# Phase C.3 – Lokales SEO

Prüfung am 01.10.2026 · Quelltexte aller echten Seiten, `robots.txt`, XML-Sitemap, Lighthouse-SEO-Audit · Google selbst wurde nicht automatisiert abgefragt (siehe Grenzen unten).

## Kurzfazit

Die technischen Grundlagen stimmen: indexierbar, HTTPS, Canonical, Sitemap. Es fehlen aber **alle lokalen und inhaltlichen Signale**:
- keine Meta-Descriptions,
- generische Seitentitel ohne Ort und Fachrichtung,
- keine H1 auf der Startseite,
- keine strukturierten Daten,
- eine Sitemap, die zu 79 % aus Demo-Müll besteht.

Hinzu kommen eine **nahezu namensgleiche Konkurrenzpraxis** in derselben PLZ und uneinheitliche Verzeichnisdaten. Lighthouse meldet „SEO 92“, misst aber nur technische Mindestanforderungen.

## 1. Seitentitel, Descriptions, Überschriften

| Seite | `<title>` | Meta-Description | H1 |
|---|---|---|---|
| Startseite | „PRAXIS ZUM SCHLOSS – Dr. Nalan BAGCI KAIKIS“ | **fehlt** | **fehlt** (Name als h3, Telefon/Adresse als h6) |
| Unsere Praxis | „UNSERE PRAXIS – PRAXIS ZUM SCHLOSS“ | fehlt | „UNSERE PRAXIS“ |
| Leistungen (16) | z. B. „ADERLASS – PRAXIS ZUM SCHLOSS“, „VORSORGELEİSTUNGEN – …“ (mit türkischem İ) | **fehlt auf allen** | Leistungsname in Versalien |
| Kontakt / Termin | „KONTAKT – …“ / „Termin – …“ | fehlt | ✔ |

**Problem:** Kein einziger Title enthält „Hausarzt/Hausärztin“, „Charlottenburg“ oder „Berlin“. Google bildet die Snippets daher selbst aus zufälligem Seitentext; im ungünstigsten Fall stammt er aus dem Corona-Block. Auf den Leistungsseiten fehlt im Title der Bezug „in Berlin-Charlottenburg“.

## 2. Indexierbarkeit

| Punkt | Befund | Bewertung |
|---|---|---|
| `robots.txt` | Standard-WordPress (`/wp-admin/` gesperrt), verweist auf Sitemap | ✔ |
| XML-Sitemap | WordPress-Kern-Sitemap mit 12 Teil-Sitemaps, **119 URLs, davon 94 Demo/Altlast** (Testimonials, Team, FAQ, Galerie, Shop, Slider, Sektionen) | ✘ lenkt Crawling auf irrelevante Seiten, verwässert die Website-Qualität |
| Canonical | gesetzt | ✔ |
| `noindex` | nirgends, auch nicht auf Demo-Seiten | ✘ |
| `lang="de"` | gesetzt | ✔ |
| HTTPS / Weiterleitungen | `http` → `https`, ohne `www` → `www`, jeweils 301 | ✔ |
| Mobilfreundlichkeit | responsiv, kein horizontales Scrollen | ✔ (aber langsam, siehe `technik.md`) |
| Core Web Vitals | LCP mobil 11,6 s (Labor) | ✘ Ranking- und Absprungfaktor |

## 3. Struktur und interne Verlinkung

- ✔ **Eigene Seite pro Leistung** (16 Seiten). Das ist eine gute Basis für Suchanfragen wie „Akupunktur Charlottenburg“ oder „Schröpfen Berlin“.
- ✘ URL-Fehler: Die Akupunktur-Seite liegt unter `/services/face-recovery-massage/` (Demo-Slug), alle Leistungen unter englischem `/services/`.
- ✘ Leistungsseiten verlinken nicht untereinander im Text und haben keinen Handlungsaufruf (Termin, Telefon) am Ende.
- ✘ Die Startseite verlinkt die hausärztlichen Kernleistungen nur über zwei Zitat-Icons und die Listen ganz unten.
- ✘ Keine Seiten für typische lokale Anliegen, etwa „Hausärztin in Charlottenburg – neu aufnehmen?“, Anfahrt mit U-Bahn/Bus oder Sprechzeiten.

## 4. Strukturierte Daten (Schema.org)

**Fakt:** Keine JSON-LD-Daten, keine Open-Graph-Tags. Es fehlt ein `Physician`/`MedicalClinic`-Eintrag mit Name, Adresse, Geo-Koordinaten, Telefon, Sprechzeiten (`openingHoursSpecification`), `medicalSpecialty` (Allgemeinmedizin), `availableLanguage` (Deutsch, Englisch, Türkisch), `isAcceptingNewPatients` und Links zu den Profilen (`sameAs`).

**Wettbewerbsvorteil:** Keine der fünf geprüften Nachbarpraxen nutzt solche Praxis-Daten (siehe `01-praxis/praxis-recherche.md`).

## 5. Lokale Signale und Abgleich mit Profilen

| Signal | Befund |
|---|---|
| NAP auf der Website | Adresse konsistent ✔; Telefon im falschen internationalen Format („+49 0303223612“); zweite Nummer 030 3255050 je nach Quelle Telefon oder Fax |
| Sprechzeiten | **drei Versionen** (Website, arzt-auskunft, Jameda), siehe Phase B |
| Name | fünf Schreibweisen (mit/ohne „Dr.“, mit/ohne Bindestrich, türkische Zeichen) |
| Google-Unternehmensprofil | nicht automatisiert geprüft → `NEEDS-HUMAN.md` Punkt 2 |
| Jameda / Sanego | nicht beansprucht, keine Leistungen, falsche Sprechzeiten (Jameda) |
| Kartenhinweis / Anfahrt auf der Website | fehlt |
| Namensverwechslung | „Praxis **am** Schloss“ (Klausenerplatz 2, gleiche PLZ, stärkere Website mit Online-Termin) |

## 6. Sichtbarkeit (Indiz)

Die Stichprobe mit dem verfügbaren Suchwerkzeug (nicht Google, nicht standortbezogen) hat die Praxis-Website **bei keinem von fünf lokalen Suchbegriffen** gezeigt. Sichtbar waren nur Verzeichnisprofile (Details: `01-praxis/praxis-recherche.md`, Abschnitt 5). Dieses Indiz deckt sich mit den fehlenden Titeln, Descriptions und strukturierten Daten. **Die echte Google-Position muss manuell geprüft werden** (`NEEDS-HUMAN.md` Punkt 3).

## 7. Maßnahmen (priorisiert)

1. **Sofort:** Demo-Inhalte löschen bzw. auf `noindex` setzen, aus der Sitemap nehmen und in der Google Search Console entfernen lassen.
2. **Vor dem Relaunch:** Eine verbindliche NAP- und Sprechzeiten-Fassung festlegen. Damit das Google-Profil beanspruchen bzw. prüfen und Jameda, arzt-auskunft und Sanego angleichen. Die KV-Daten über die KV Berlin pflegen.
3. **Im Relaunch:**
   - Titles nach dem Muster „Hausärztin in Berlin-Charlottenburg · Naturheilkunde & Akupunktur | Praxis zum Schloss“.
   - Eine Description je Seite.
   - Eine H1 je Seite.
   - `Physician`-JSON-LD mit allen Praxisdaten.
   - Saubere deutsche URLs (`/leistungen/akupunktur/` mit 301-Weiterleitungen von den alten URLs).
   - Anfahrt-Abschnitt.
   - Termin-Handlungsaufruf auf jeder Leistungsseite.
4. **Abgrenzung zur „Praxis am Schloss“:** Den Namen der Ärztin und „Schloßstraße 21“ in Title, H1 und Google-Profil führen. Prüfen, ob „Hausarztpraxis zum Schloss – Nalan Bagci-Kaikis“ als einheitlicher Markenname taugt.
5. **Laufend:** Sprechzeiten- und Urlaubshinweise aktuell halten. Bewertungen nur über die Plattformen, nicht als Zitate auf der Website (siehe Recht).

## Grenzen

Rankings bei Google sind personalisiert und standortabhängig und wurden nicht automatisiert erhoben. Search-Console-Daten (Klicks, Impressionen, indexierte Seiten) liegen nur der Praxis vor und sollten mit dem Zugang angefordert werden (→ `FRAGEN.md`).
