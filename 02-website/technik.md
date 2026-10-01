# Phase C.1 – Technik

Website: https://www.hausarztpraxis-zum-schloss.de/ · Prüfung am 01.10.2026 · nur passive Abrufe (Seitenaufrufe, Header, Quelltext, öffentliche DNS/RDAP-Daten, Lighthouse), keine Sicherheitstests.

## Kurzfazit

Die Website ist ein **WordPress-Kauf-Theme („Holamed“) mit dem Page-Builder WPBakery und dem Framework Unyson**. Das Framework ist seit Oktober 2023 wegen einer Sicherheitslücke aus dem WordPress-Verzeichnis entfernt und bekommt keine Updates mehr. Core und Plugins sind seit etwa Januar 2025 nicht aktualisiert. Das Hosting selbst ist solide: Server in Deutschland, schnelle Antwortzeit, gültiges TLS. Langsam wird die Seite durch das Frontend, also überdimensionierte Bilder, render-blockierendes CSS/JS und den Slider. **Auf dem Smartphone erscheint der Hauptinhalt nach 11,6 s (LCP), Ziel ist unter 2,5 s.** Eine technische Bereinigung der bestehenden Installation wäre möglich, hieße aber, einen Stack weiterzupflegen, der nicht mehr zukunftsfähig ist (siehe Phase D).

## 1. System und Versionen

| Komponente | Gefunden | Stand / Bewertung | Beleg |
|---|---|---|---|
| CMS | **WordPress 6.7.1** (öffentlich im `generator`-Meta-Tag) | Veraltet. Erschien Ende 2024, aktuell ist die 7.x-Reihe (7.0 seit Mai 2026; ein Nachbar-Wettbewerber läuft bereits auf 7.1.2). Die Versionsangabe im Quelltext erleichtert Angreifern die Auswahl | `rohdaten/startseite.html` |
| Theme | **Holamed 1.8.2**, Autor „Like Themes“ (Kauf-Theme) | Ursprünglich ein Massage-/Spa-Demo (Logo-Datei `massage_logo_01.png`, Slider „massage-1/2“, Slug `face-recovery-massage`). Pflegestatus des Themes nicht feststellbar | `style.css`, Sitemap |
| Theme-Framework | **Unyson 2.7.25** | **Kritisch:** Das Plugin ist seit 11.10.2023 im WordPress-Verzeichnis wegen eines Sicherheitsproblems geschlossen; CVE-2023-44472 (Broken Access Control, ≤ 2.7.28) **ohne Fix**. Das Theme hängt davon ab | [Wordfence/WPScan](https://wpscan.com/vulnerability/0d72fc36-1caa-400b-9a00-f27b8744445d), [Patchstack](https://patchstack.com/database/vulnerability/unyson/wordpress-unyson-plugin-2-7-28-broken-access-control-vulnerability) |
| Page-Builder | **WPBakery 6.10.0** (`js_composer`) | Veraltet; mehrere Stored-XSS-Lücken in Versionen bis 7.5/7.7 (CVE-2024-1805, CVE-2024-1841, CVE-2024-5708; Ausnutzung erfordert ein Redaktionskonto). **Inhalte stecken in WPBakery-Shortcodes**, ein Wechsel des Builders bedeutet manuelle Übernahme | [Patchstack](https://patchstack.com/database/vulnerability/js_composer/wordpress-wpbakery-visual-composer-plugin-7-5-authenticated-contributor-stored-cross-site-scripting-via-attributes-vulnerability) |
| Formulare | Contact Form 7 6.0.3 | Veraltet (Fix-Stand ≥ 6.0.6); die bekannte Lücke CVE-2025-3247 betrifft nur die Stripe-Anbindung, hier **geringe Relevanz** | [Wordfence](https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/contact-form-7/contact-form-7-605-order-replay-vulnerability) |
| Weitere Plugins | User Profile Picture 2.6.3, Post Views Counter 1.4.8, WP Fastest Cache (Verzeichnis `wpfc-minified`) | Profilbild-Plugin: CVE-2026-61971 (niedrig, CVSS 2,7). Zähler-Plugin ohne erkennbaren Nutzen für Patientinnen und Patienten | [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-61971) |
| JavaScript | jQuery 3.7.1 + Migrate, 8 jQuery-Erweiterungen (Countdown, Counter, Masonry, Nicescroll, Paroller, Zoomslider …), **zwei Font-Awesome-Versionen** parallel (Unyson + WPBakery) | Viel Ballast für eine Praxis-Website mit statischem Inhalt | Netzwerkprotokoll |
| Letzte Pflege | `last-modified` der Startseite 15.01.2025, Sitemap-`lastmod` der Kontaktseite 15.01.2025; Domain zuletzt geändert 19.04.2022 | **Indiz:** Seit Januar 2025 keine Wartung | Header, Sitemap, RDAP |

## 2. Hosting, Domain, Sicherheit

| Punkt | Befund | Bewertung |
|---|---|---|
| Hoster | Nameserver `cns1–3.alfahosting.info`, Server `host206.alfahosting-server.de`, IP 81.88.34.183 (Netz der dogado GmbH, Dortmund) | **Fakt:** Alfahosting (dogado-Gruppe), **Serverstandort Deutschland** ✔ |
| Webserver | nginx; Antwortzeit des HTML-Dokuments 80 ms (Lighthouse) | Schnell ✔ |
| Mail | MX `mx03/mx04.secure-mailgate.com`, SPF `v=spf1 a mx include:secure-mailgate.com ~all` | SPF vorhanden ✔ (DMARC nicht geprüft) |
| TLS | TLS 1.3, Let's Encrypt (Wildcard `*.hausarztpraxis-zum-schloss.de`), gültig 08.09.–07.12.2026, wird automatisch erneuert; `http://` und Variante ohne `www` leiten per 301 auf `https://www.` | ✔ |
| Sicherheits-Header | **Keiner** gesetzt: kein `Strict-Transport-Security`, keine `Content-Security-Policy`, kein `X-Content-Type-Options`, kein `X-Frame-Options`/`frame-ancestors`, keine `Referrer-Policy`, keine `Permissions-Policy` | Auffällig. Mit wenigen Zeilen Server-Konfiguration behebbar |
| Session-Cookie | `PHPSESSID` wird schon bei der Weiterleitung und auf Demoseiten gesetzt | Kein Nutzen für Besucher; technisch unnötig |
| Öffentliche Demo-/Altseiten | **94 von 119 URLs der XML-Sitemap (79 %)** stammen aus dem Theme-Demo (Shop, Warenkorb, Checkout, „Mein Konto“, Demo-Team, Demo-FAQ, „Homepage Plastic“ …) Stichprobe von 11 dieser Seiten: alle HTTP 200, keine mit `noindex` | Vergrößert die Angriffs- und Pflegefläche; inhaltlich gravierend (siehe `inhalt-struktur.md`, `recht-datenschutz.md`) |

## 3. Ladezeit und Core Web Vitals

**Messumgebung:** Lighthouse 13.5.0 (CLI) mit lokal installiertem Google Chrome (headless), macOS, Netz des Arbeitsplatzes. „Mobil“ = Lighthouse-Standard (simuliertes Mittelklasse-Smartphone, gedrosseltes 4G); „Desktop“ = `--preset=desktop`. Zeitraum: **01.10.2026, 07:13–07:18 MESZ**. Startseite je **3 Läufe**, Werte = Median (Spanne). Berichte: [`lighthouse-berichte/`](lighthouse-berichte/).

| Seite / Gerät | Läufe | Performance | Barrierefreiheit | Best Practices | SEO | FCP s | LCP s | TBT ms | CLS | Speed Index s | Gewicht KB | Anfragen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Startseite mobil | 3 | **62** | 86 | 92 | 92 | 3,72 (3,72–3,86) | **11,64** (11,64–11,65) | 0 | 0 | 6,08 (6,05–6,64) | **3.939** | 70 |
| Startseite Desktop | 3 | 90 (89–90) | 91 | 96 | 92 | 0,64 (0,59–0,69) | 0,79 (0,74–1,01) | 0 | **0,18** | 1,44 (1,40–1,44) | **5.055** | 79 |
| Unsere Praxis mobil | 1 | 63 | 90 | 96 | 92 | 3,74 | 10,83 | 4 | 0 | 5,89 | 2.059 | 53 |
| Termin mobil | 1 | 68 | 89 | 96 | 92 | 3,61 | 6,39 | 0 | 0 | 4,49 | 1.035 | 52 |
| Leistung Vorsorge mobil | 1 | 66 | 86 | 96 | 92 | 3,76 | 5,96 | 0 | 0 | 5,52 | 1.080 | 55 |

Zielwerte (Google „gut“): LCP ≤ 2,5 s, CLS ≤ 0,1, INP ≤ 200 ms. **Mobil wird der LCP-Zielwert auf allen gemessenen Seiten deutlich verfehlt.** Felddaten echter Nutzer (CrUX) liegen für eine so kleine Seite vermutlich nicht vor und wurden nicht abgefragt.

**Ursachen laut Lighthouse (Startseite mobil):**

| Ursache | Wirkung |
|---|---|
| LCP-Element ist der weiße Untertitel im Slider (`<h5 style="…color:#ffffff">`). Er wird erst nach Slider-Initialisierung und Animation sichtbar | LCP 11,6 s trotz schnellem Server |
| Render-blockierende CSS/JS-Dateien | ≈ 2,7 s geschätzte Einsparung |
| Bilder: Hintergrund-PNG `leaves_bg_10.png` **956 KB**, Slider-Bild `SLIDE_02-1.jpg` **829 KB**, Leistungsbilder in 768 px für 266–492 px Anzeige; kein WebP/AVIF | ≈ 1,5 MB Einsparung |
| Ungenutztes CSS (zwei 120–130-KB-Stylesheets) | ≈ 258 KB Einsparung |
| Webfonts ohne `font-display`-Optimierung, 13 Schriftdateien | ≈ 170 ms |
| CLS Desktop 0,18: Vollbreiten-Sektionen von WPBakery werden per JavaScript nachträglich gestreckt, Navigation springt | Sichtbares Springen beim Laden |
| Konsolenfehler `ReferenceError: grecaptcha is not defined` (Contact-Form-7-Modul reCAPTCHA) | **Spamschutz der Formulare läuft möglicherweise ins Leere** |

## 4. Eingebundene Drittdienste (beim Erstbesuch, ohne Einwilligung)

Messung: Playwright mit frischem Browserprofil je Seite (keine Cookies, keine Einwilligung), 18 Seitenaufrufe in 4 Breiten, Rohdaten [`rohdaten/browser-audit.json`](rohdaten/browser-audit.json), [`rohdaten/netzwerk-startseite-laptop.json`](rohdaten/netzwerk-startseite-laptop.json).

| Dienst | Wo | Lädt vor Einwilligung? |
|---|---|---|
| **Google reCAPTCHA v3** (`www.google.com/recaptcha/api.js`) | **auf jeder Seite**, nicht nur bei Formularen | **ja** (kein Consent-Banner vorhanden) |
| Google Fonts | lokal gehostet | – (kein Abruf bei Google) ✔ |
| Adobe Fonts | in der Datenschutzerklärung genannt | **nicht** im Netzwerkverkehr gefunden |
| Karten, Videos, Analyse, Social Pixel | – | nicht gefunden ✔ |
| Cookies vor Einwilligung | Startseite und Unterseiten: keine; Demo-Seite „Homepage Plastic“: `PHPSESSID` | – |

## 5. Darstellung in mehreren Breiten

Screenshots unter [`screenshots/`](screenshots/). Breiten: 360 px (Smartphone), 768 px (Tablet), 1366 px (Laptop), 1920 px (Desktop). Vor dem Ganzseiten-Screenshot wurde jede Seite einmal durchgescrollt, damit die Einblend-Animationen des Page-Builders auslösen.

| Befund | Breite | Beleg |
|---|---|---|
| Kein horizontales Scrollen auf allen geprüften Seiten ✔ | alle | `browser-audit.json` |
| Startseite mobil **≈ 7.900 px lang** (≈ 10 Bildschirmhöhen); Telefonnummer und Termin-Button erst weit unten | 360 px | `startseite-mobil-360px.png` |
| Erster Bildschirm mobil: nur Logo, Menü-Symbol, Blumenbild, Name; **das Porträt der Ärztin ist abgeschnitten**, kein Anruf-/Termin-Button sichtbar | 360 px | `startseite-mobil-360px-erster-bildschirm.png` |
| Footer bricht „Allgemeinmedizineri-n“ mitten im Wort um | 360 px | `termin-mobil-360px.png` |
| Uhrzeiten als „9°°–12°°“ mit Gradzeichen gesetzt (Screenreader liest „Grad“) | alle | Footer |
| Desktop: ruhiger erster Eindruck mit Porträt; darunter viel Leerraum und Bildkarussell | 1366/1920 px | `startseite-laptop-1366px.png` |

## 6. Barrierefreiheit (Grobcheck, kein Audit nach WCAG/BITV)

| Prüfpunkt | Befund |
|---|---|
| Lighthouse-Score | 86–91 (automatisch prüfbarer Anteil) |
| Kontraste | 5 Elemente mit unzureichendem Kontrast (u. a. hellgraue Texte, türkise Beschriftungen „Telefon:“, „Montag:“ auf dunklem Bild im Footer; Button „Terminanfrage Senden“ türkis auf hellem Türkis) |
| Alternativtexte | Startseite: 7 von 22 Bildern ohne Alt-Text; viele Alt-Texte sind Dateinamen („akapuntur2“) |
| Bedienelemente | 2 Buttons ohne zugänglichen Namen, 9 Links ohne erkennbaren Namen (Pfeil-/Bildlinks) |
| Überschriften | Startseite **ohne H1**; Hierarchie springt (h6 → h3 → h5 …); Telefonnummer und Adresse als `h6` ausgezeichnet |
| Tastatur | Stichprobe 20× Tab auf der Startseite: nur **3 von 20** Fokuspositionen mit erkennbarem Fokusrahmen (Indiz; geprüft wurden Outline und Box-Shadow). **Kein „Zum Inhalt springen“-Link** |
| Formulare | Felder nur mit Platzhaltertext, **keine sichtbaren Labels**; Platzhalter verschwinden beim Tippen |
| Schriftgröße | Fließtext 16–18 px ✔; Hinweis- und Footertexte teils kleiner und kontrastarm |
| Sprache | `lang="de"` gesetzt ✔ |

## 7. Wartbarkeit und Lock-in

- **Fakt:** Inhalte liegen als WPBakery-Shortcodes in der WordPress-Datenbank. Ein Export ist möglich, weil WordPress Standard-Export und Datenbankzugriff bietet. **Proprietär ist nur das Layout**: Ohne WPBakery erscheinen die Seiten als Shortcode-Wirrwarr.
- **Fakt:** Ein Teil der Inhalte steckt in Theme-eigenen Inhaltstypen von Unyson/Holamed (`services`, `sections`, `sliders`, `team`, `testimonials`, `faq`, `gallery`).
- **Folgerung:** Texte, Bilder und Daten sind **übernehmbar**. Design und Seitenaufbau sind an Theme und Builder gebunden und praktisch nicht sinnvoll weiterzuverwenden.
