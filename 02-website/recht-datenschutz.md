# Phase C.4 – Recht und Datenschutz (Indizien)

> **Wichtig:** Dies ist **keine Rechtsberatung** und kein Rechtsgutachten. Es handelt sich um technische und redaktionelle Beobachtungen, die als **„auffällig – bitte prüfen“** zu lesen sind. Verbindlich bewerten können das nur eine Fachanwältin bzw. ein Fachanwalt (Medizin-/IT-Recht) oder die Ärztekammer Berlin, die ihre Mitglieder zu berufsrechtlichen Werbefragen berät.

Prüfung am 01.10.2026 · Impressum, Datenschutzerklärung, Formulare, alle 25 echten Seiten, Stichprobe von 11 Demo-Seiten · Netzwerkverkehr nur passiv beobachtet (frisches Browserprofil, nichts angeklickt).

## Ampel

| Bereich | Einschätzung | Wichtigster Punkt |
|---|---|---|
| Demo-Seiten unter Praxisname | 🔴 auffällig, dringend | Gratis-Botox, Vorher-Nachher-Hinweis, erfundene Kennzahlen und Patientenstimmen öffentlich unter „PRAXIS ZUM SCHLOSS“ |
| Werbeaussagen Leistungsseiten (HWG/Berufsordnung) | 🟠 auffällig | Wirk- und Heilaussagen zu Verfahren mit umstrittener Evidenz („Entgiftung“, „Entschlackung“, „heilende Wirkung“) |
| Einwilligung / Drittdienste | 🟠 auffällig | Google reCAPTCHA lädt auf jeder Seite ohne Einwilligung; kein Consent-Banner |
| Datenschutzerklärung | 🟠 auffällig | Falscher Hoster, beschreibt nicht genutzte Dienste, Gesundheitsdaten im Formular nicht behandelt |
| Impressum | 🟠 unvollständig | Kammer, Berufsbezeichnung/Staat, berufsrechtliche Regelungen fehlen; veraltete Rechtsgrundlage und OS-Link |
| Formulare / Gesundheitsdaten | 🟠 prüfen | Freitextfelder laden zur Eingabe von Gesundheitsdaten ein; Übertragungsweg unbekannt |
| Urheberrecht | 🟠 prüfen | Fremdtexte (TK-Artikel), Stockfotos mit unbekannter Lizenz |
| Barrierefreiheit (BFSG) | 🟡 Hinweis | Kleinstunternehmen-Ausnahme dürfte greifen; Online-Buchung trotzdem barrierefrei planen |

## 1. Impressum

Quelle: https://www.hausarztpraxis-zum-schloss.de/impressum/ (Rohdaten `rohdaten/seite-impressum.html`)

| Befund | Einordnung |
|---|---|
| Überschrift „Angaben gemäß § 5 TMG“ | Das TMG wurde am 14.05.2024 durch das **Digitale-Dienste-Gesetz (DDG)** ersetzt; Inhalte der Impressumspflicht unverändert in § 5 DDG. Verweis aktualisieren oder weglassen ([IHK München](https://www.ihk-muenchen.de/ratgeber/recht/internetrecht/impressum/)) |
| **Fehlt:** zuständige Kammer (Ärztekammer Berlin), gesetzliche Berufsbezeichnung („Ärztin“) und der Staat, in dem sie verliehen wurde, Bezeichnung der berufsrechtlichen Regelungen (Berufsordnung der Ärztekammer Berlin, Berliner Heilberufekammergesetz) und wo sie zugänglich sind | Für reglementierte Berufe nach § 5 Abs. 1 Nr. 5 DDG vorgesehen → **prüfen und ergänzen** |
| **Fehlt:** Angabe zur Zulassung/Aufsicht (bei Vertragsärztinnen üblich: Kassenärztliche Vereinigung Berlin) | prüfen |
| „Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: **Steuernummer: ZN …**“ | Beschriftung widersprüchlich. Die Veröffentlichung einer Steuernummer ist nicht vorgeschrieben und birgt Missbrauchsrisiko; ärztliche Heilbehandlungen sind meist umsatzsteuerfrei. **Mit der Steuerberatung klären, ggf. entfernen** |
| Link zur EU-OS-Plattform | Die Plattform wurde am **20.07.2025 abgeschaltet**; der Hinweis ist überholt und sollte entfernt werden ([IHK Osnabrück](https://www.ihk.de/osnabrueck/recht-und-fair-play/recht/internetrecht/einstellung-os-plattform-6474562)) |
| Telefon „+49 0303223612“ | Formal falsch (richtig: +49 30 3223612) |
| Name „Allgemeinmedizinerin Nalan Bagci Kaikis“, Kopfzeile „Dr. Nalan Bagci Kaikis“ | Uneinheitlich; Registereintrag ohne akademischen Grad. **Korrekte Namens- und Titelführung mit der Kundin klären** (keine Wertung, siehe Phase A) |
| Footer: „Allgemeinmediziner“, „© 2022“ | redaktionell |

## 2. Datenschutzerklärung

Quelle: https://www.hausarztpraxis-zum-schloss.de/datenschutzerklaerung/ – erkennbar ein Generatortext (Aufbau wie gängige Online-Generatoren, Stand vermutlich 2022, kein Datum angegeben).

| Befund | Einordnung |
|---|---|
| Als **Hoster ist die Praxis selbst** eingetragen („Wir setzen folgenden Hoster ein: PRAXIS ZUM SCHLOSS …“), dazu ein AVV „mit dem oben genannten Anbieter“ | Inhaltlich falsch: Hoster ist laut DNS Alfahosting (dogado GmbH). AVV mit dem Hoster prüfen |
| Beschreibt **Borlabs Cookie** als Consent-Tool | Auf der Website ist **kein** Consent-Banner und kein Borlabs-Plugin zu finden → Erklärung beschreibt einen Zustand, der nicht existiert |
| Beschreibt **Adobe Fonts** (Laden von Adobe-Servern, USA) | Im Netzwerkverkehr nicht gefunden → überflüssig oder veraltet |
| Beschreibt Google reCAPTCHA, gestützt auf „berechtigtes Interesse“ (Art. 6 Abs. 1 lit. f DSGVO); Analyse beginnt „automatisch, sobald der Websitebesucher die Website betritt“ | Für den Zugriff auf das Endgerät verlangt § 25 TDDDG grundsätzlich eine Einwilligung, wenn er nicht unbedingt erforderlich ist; Fachliteratur stuft reCAPTCHA überwiegend als einwilligungspflichtig ein ([IT-Recht Kanzlei](https://www.it-recht-kanzlei.de/google-recaptcha-einwilligungspflicht.html)) → **prüfen** |
| Abschnitt „eCommerce und Zahlungsanbieter“, Hinweise auf „Analyse-Tools“ | Nicht zutreffend (kein Shop, keine Analyse gefunden) |
| Abschnitte „Auftragsverarbeitung“ und „Allgemeine Hinweise“ **doppelt** | redaktionell |
| **Keine Aussage** zu Gesundheitsdaten (Art. 9 DSGVO), obwohl das Terminformular ein Freitextfeld „Beschreibungstext“ hat | Lücke → prüfen |
| Keine Angaben zu Server-Logfiles, zu Post Views Counter, zur Speicherdauer der Formularanfragen | Lücke |
| Kein Datum / Stand | redaktionell |
| Datenschutzbeauftragte/r | Nicht genannt. Pflicht ab i. d. R. 20 Personen, die ständig personenbezogene Daten verarbeiten (§ 38 BDSG); bei Einzelpraxis vermutlich nicht erforderlich → **Annahme, prüfen** |

## 3. Einwilligung und Drittdienste

**Messung:** 18 Seitenaufrufe mit frischem Browserprofil, ohne Interaktion (`rohdaten/browser-audit.json`).

- **Fakt:** Es erscheint **kein Cookie-/Consent-Banner**.
- **Fakt:** Auf **jeder** Seite lädt `https://www.google.com/recaptcha/api.js` vor jeder Interaktion. Damit erhält Google mindestens IP-Adresse und Browserdaten, auch auf Seiten ohne Formular.
- **Fakt:** Keine Google Fonts von Google-Servern (lokal), keine Karten, Videos, Analyse- oder Werbe-Pixel ✔.
- **Fakt:** Konsolenfehler `grecaptcha is not defined`. Der reCAPTCHA-Schutz funktioniert möglicherweise nicht einmal.
- **Empfehlung:** reCAPTCHA entfernen und durch eine einwilligungsfreie Lösung ersetzen (Honeypot/Zeitprüfung oder ein EU-gehosteter Dienst). Dann ist **gar kein Consent-Banner** nötig, das beste Ergebnis für eine Praxis-Website. Karten nur als Zwei-Klick-Lösung oder Link.

## 4. Formulare und Gesundheitsdaten

| Formular | Felder | Befund |
|---|---|---|
| Termin (`/termin/`) | Name, Telefon, E-Mail, Wunschdatum, vormittags/nachmittags, **Freitext „Beschreibungstext“** | Patientinnen und Patienten werden Beschwerden eintragen (Gesundheitsdaten nach Art. 9 DSGVO). Contact Form 7 versendet standardmäßig per E-Mail; ob Transportverschlüsselung bis ins Praxispostfach und Ablage den Anforderungen genügen, ist von außen nicht prüfbar. Ärztliche Schweigepflicht berücksichtigen → **prüfen** |
| Kontakt (`/kontakt/`) | Name, E-Mail, Nachricht (Du-Form) | wie oben |
| Einwilligungstext beider Formulare | „Erhebung, Verarbeitung und Nutzung … zum Zweck der Kontaktaufnahme“ | Allgemein gehalten; Gesundheitsdaten, Empfänger und Speicherdauer werden nicht benannt |
| Demo-Teamseiten | enthalten ebenfalls ein Kontaktformular | Anfragen an eine Demo-Seite – Empfänger unklar |

**Empfehlung:** Ein Buchungs- oder Anfragesystem mit AVV, Verschlüsselung und Serverstandort EU, oder ein Formular ohne Freitextfeld mit dem Hinweis „bitte keine Beschwerden eintragen – wir rufen Sie zurück“.

## 5. Heilmittelwerbegesetz (HWG) und Berufsordnung – auffällige Stellen

### 5.1 Demo-Seiten (öffentlich, unter dem Praxisnamen)

| Fundstelle | Aussage | Warum auffällig |
|---|---|---|
| `/homepage-plastic/` | „Get a free trial bottox injection – free“ | Kostenlose Probebehandlung (Werbegaben, § 7 HWG) und Publikumswerbung für ein verschreibungspflichtiges Arzneimittel (§ 10 HWG) |
| `/homepage-plastic/` | „Look at the difference before and after procedures“ (Face surgery, Breasts reconstruction) | Vorher-Nachher-Darstellung bei operativen plastisch-chirurgischen Eingriffen (§ 11 Abs. 1 S. 3 Nr. 1 HWG) |
| `/homepage-plastic/` | „leading plastic surgery center in the World“, „86 Qualified doctors“, „27 Years of experience“, „50+ Patients every day“, „chief plastic surgeon“ | Erfundene, irreführende Angaben (§ 3 HWG, § 5 UWG; anpreisende/irreführende Werbung nach § 27 Abs. 3 Berufsordnung) |
| `/testimonials/`, Demo-Startseiten | Erfundene „Patientenstimmen“ | Irreführende Äußerungen Dritter (§ 11 Abs. 1 Nr. 11 HWG, UWG) |
| `/team/…` | Fiktive Ärztinnen und Ärzte anderer Fachgebiete | Irreführung über Praxisgröße und Fachgebiete |

**Einordnung:** Unabhängig davon, ob die Seiten über das Menü verlinkt sind: Sie sind öffentlich, tragen den Praxisnamen und stehen in der Sitemap. **Sofort entfernen.** Das ist mit geringem Aufwand möglich und unabhängig von einem Angebot dringend zu empfehlen.

### 5.2 Leistungsseiten (echte Inhalte)

Das HWG gilt auch für Werbung für Verfahren und Behandlungen. Irreführend ist es u. a., wenn Verfahren eine Wirkung beigelegt wird, die nicht hinreichend gesichert ist (§ 3 HWG). Gerichte legen das bei Gesundheitswerbung streng aus. Auffällige Formulierungen:

| Seite | Formulierung (wörtlich) | Hinweis |
|---|---|---|
| Mesotherapie | „Spuren der Zeit wie Fältchen, Haarausfall, kleine Fettpölsterchen oder Cellulite lassen sich mit ihr **schnell, preiswert und nahezu schmerzfrei korrigieren**“; „absolut natürlich wirkende Ergebnisse“; „Schon minimale Mengen … reichen aus, um ihre **heilende Wirkung** zu entfalten“ | Erfolgsversprechen, Preisanpreisung, ästhetische Werbung |
| Akupunktur | „**Die Behandlungserfolge sprechen für sich.**“ | Erfolgsversprechen |
| Aufbaukuren | „**Leberentgiftung**“, „**Entgiftungskur** … Entschlackung“, „bewährt bei Infektneigung“, „Infusionskur für Haut und Haare … für ein besseres und ausgeglicheneres Äußeres“, „Die Kur bewirkt eine **Stärkung des Immunsystems**“ | „Entgiftung/Entschlackung“-Aussagen gelten als besonders angreifbar |
| Aderlass | „kommt etwa gegen Bluthochdruck zum Einsatz“; „Das **stärkt das körpereigene Immunsystem**“ | Wirkaussage |
| Schröpfen | „… werden das gestaute Blut bzw. im übertragenen Sinne **Giftstoffe aus dem Körper „gesaugt“** … dient u. a. der Reinigung der Körpersäfte“; Studienverweis (Michalsen 2006/2008/2009) ohne genaue Quelle | Wirkaussage; Studienzitate in Werbung brauchen genaue Fundstellen |
| Enzymtherapie | Krankheitsliste (u. a. Allergien, Arthrose, Migräne, Diabetes mellitus); Herstellerformulierung | Krankheitsbezogene Werbung |
| Homöopathie | „Damit soll eine Heilung nachhaltiger sein …“ | Wirkaussage (im Konjunktiv) |
| Startseite | „Wollen Sie Ihre Gesundheit **und Schönheit** mit wertvollen, naturheilkundlichen Therapien unterstützen?“ | Kosmetik-Anmutung |
| Unsere Praxis | Zitat Edward Bach: „Der Hauptgrund für das **Versagen der modernen medizinischen Wissenschaft** liegt darin …“ | Weniger ein Rechts- als ein Seriositätsproblem: wirkt herabsetzend gegenüber der Schulmedizin, die die Praxis selbst anbietet |
| Startseite | „Fachärztin für Allgemeinmedizin, **Akupunktur und Naturheilkunde, Reisemedizin**“ | Liest sich, als wären Akupunktur, Naturheilkunde und Reisemedizin Facharztbezeichnungen. Nach Weiterbildungsordnung: Fachärztin für Allgemeinmedizin, Zusatzbezeichnungen „Akupunktur“ und „Naturheilverfahren“; „Reisemedizin“ ist keine Bezeichnung der Weiterbildungsordnung → Formulierung prüfen, z. B. „Zusatzbezeichnungen Akupunktur und Naturheilverfahren · reisemedizinische Beratung“ |

**Positiv:** Keine eigenen Patientenbewertungen als Zitate auf echten Seiten, keine Vorher-Nachher-Bilder auf echten Seiten, Hinweise auf Kontraindikationen (Blutegel, Eigenblut) und auf IGeL-Kosten (Diagnostik) sind vorhanden.

**Für den Relaunch:** Naturheilkundliche Leistungen **sachlich beschreiben** (Was ist das? Ablauf, Dauer, Kosten/IGeL, Gegenanzeigen) statt Wirkversprechen zu machen. Texte vor Veröffentlichung von der Kundin fachlich und ggf. juristisch freigeben lassen.

## 6. Urheberrecht

- **Fakt:** Die Phytotherapie-Seite enthält Passagen, die wortgleich in einem Artikel der Techniker Krankenkasse stehen (Abgleich 01.10.2026). Herkunft weiterer Texte (Enzymtherapie, Schröpf-Zitat „S.S.“) unklar.
- **Unbekannt:** Lizenzen der Stockfotos (Leistungsbilder, Hintergründe aus dem Theme-Demo wie `leaves_bg_10.png`, `SLIDE_02-1.jpg`). Theme-Demo-Bilder sind häufig **nicht** für den Einsatz auf der fertigen Website lizenziert → prüfen bzw. ersetzen.

## 7. Barrierefreiheit (BFSG) – Hinweis

- Das Barrierefreiheitsstärkungsgesetz gilt seit 28.06.2025. Nach den Leitlinien des BMAS kann bereits eine **Online-Terminbuchung** als „Dienstleistung im elektronischen Geschäftsverkehr“ zählen ([forvis mazars](https://www.forvismazars.com/de/en/who-we-are/news/press-media/newsletters/newsletter-healthcare/newsletter-healthcare-4-2025/das-barrierefreiheitsstaerkungsgesetz), [ZWP](https://www.zwp-online.info/zwpnews/wirtschaft-und-recht/recht/barrierefreiheitsstarkungs-gesetz-neue-pflichten-fur-die-praxis)).
- **Kleinstunternehmen** (weniger als 10 Beschäftigte **und** höchstens 2 Mio. € Jahresumsatz oder Bilanzsumme) sind bei Dienstleistungen ausgenommen (§ 3 Abs. 3 BFSG). Bei einer Einzelpraxis ist das **wahrscheinlich** der Fall (**Annahme**, Beschäftigtenzahl erfragen).
- Bei einer externen Buchungsplattform (z. B. Doctolib) trägt der Plattformbetreiber eigene Pflichten für sein Buchungsmodul.
- **Empfehlung:** Unabhängig von der Pflicht nach WCAG 2.2 AA bauen. Ältere und sehbeeinträchtigte Patientinnen und Patienten sind bei einer Hausarztpraxis eine Kernzielgruppe.

## Quellen (abgerufen 01.10.2026)

- IHK Osnabrück: Einstellung der OS-Plattform – https://www.ihk.de/osnabrueck/recht-und-fair-play/recht/internetrecht/einstellung-os-plattform-6474562
- IHK München: Impressum (DDG) – https://www.ihk-muenchen.de/ratgeber/recht/internetrecht/impressum/
- Ärztekammer des Saarlandes: Digitale-Dienste-Gesetz (Merkblatt) – https://aerztekammer-saarland.de/files/1959404B097/Digitale-Dienste-Gesetz%20.pdf
- IT-Recht Kanzlei: Google reCAPTCHA – Einwilligungspflicht – https://www.it-recht-kanzlei.de/google-recaptcha-einwilligungspflicht.html
- forvis mazars: BFSG – Anforderungen für Arztpraxen und MVZ – https://www.forvismazars.com/de/en/who-we-are/news/press-media/newsletters/newsletter-healthcare/newsletter-healthcare-4-2025/das-barrierefreiheitsstaerkungsgesetz
- Techniker Krankenkasse: Phytotherapie – Kraft der Pflanzen – https://www.tk.de/techniker/gesundheit-und-medizin/behandlungen-und-medizin/alternativ-heilen/phytotherapie-kraft-der-pflanzen-2016252
