# Checkliste – Anfrage Dr. Nalan Bagci

Stand wird nach jedem Schritt aktualisiert. `[x]` = erledigt, `[ ]` = offen.

## Einrichtung
- [x] Lokales Git-Repo (`main`, kein Remote)
- [x] `.gitignore`, Ordnerstruktur
- [x] `input/anfrage.md` gespeichert

## Phase A – Plausibilität ✅ plausibel, Konfidenz hoch
- [x] Ärztin in KV-/Kammer-/Arztverzeichnissen gefunden
- [x] Namensabweichung „Bagci Kaikis“ eingeordnet
- [x] Praxis-Website identifiziert
- [x] Warnsignale geprüft
- [x] Urteil mit Konfidenz dokumentiert (`00-plausibilitaet/plausibilitaet.md`)

## Phase B – Praxis-Recherche
- [x] Fachrichtung, Schwerpunkte, Praxisform, Zielgruppe
- [x] Google-Profil, Jameda, Doctolib, Verzeichnisse (Google-Profil: manuelle Prüfung offen, siehe NEEDS-HUMAN)
- [x] NAP-Konsistenz
- [x] Wettbewerb (3–5 Praxen)
- [x] Bestehendes Terminsystem

## Phase C – Website-Analyse
- [x] Technik (CMS, Hosting, SSL, Header, Drittdienste)
- [x] Ladezeit / Lighthouse mobil + Desktop (mehrfach)
- [x] Screenshots mehrerer Viewports
- [x] Barrierefreiheits-Grobcheck
- [x] Inhalt und Struktur
- [x] Lokales SEO
- [x] Recht und Datenschutz (Impressum, DSGVO, Consent, HWG, BFSG)

## Phase D – Empfehlung ✅ Relaunch auf neuer Basis mit Inhaltsübernahme (+ Sofortmaßnahmen)
- [x] Bewertung pro Bereich (behalten / überarbeiten / ersetzen)
- [x] Gesamtempfehlung
- [x] Aufwandsindikation in Stunden-Spannen
- [x] Risiken für Festpreis, Annahmen

## Phase E – Redesign-Prototyp
- [x] Seite gewählt und begründet
- [x] Prototyp gebaut (statisch, GitHub-Pages-tauglich, noindex, „Entwurf“)
- [x] Viewport-Screenshots
- [x] Lighthouse geprüft, Probleme behoben (mobil 99, Desktop 100; axe 0 Verstöße)
- [ ] Feedback von Mohamed eingeholt (Fragen gestellt, siehe NEEDS-HUMAN Punkt 5)

## Abschluss
- [ ] `SUMMARY.md`
- [ ] `FRAGEN.md`
- [ ] `entwurf-antwort-mail.md`
- [ ] `redesign/README.md`
- [ ] `NEEDS-HUMAN.md` aktuell
- [ ] Ergebnisse gegen Belege geprüft
- [ ] Letzter Commit, `git log --oneline`
