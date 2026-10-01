#!/bin/zsh
# Lighthouse-Messreihe gegen die bestehende Website.
# Warum mehrere Läufe: Einzelmessungen schwanken (Netz, Server-Cache); wir berichten Median und Spanne.
# Mobil = Lighthouse-Standard (simuliertes Mittelklasse-Smartphone, gedrosseltes 4G); Desktop = --preset=desktop.
set -u
OUT=../02-website/rohdaten/lighthouse
CHROME_FLAGS="--headless=new --no-first-run --disable-extensions"
export CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
lauf() { # $1=Name $2=URL $3=mobil|desktop
  local preset=""; [[ "$3" == "desktop" ]] && preset="--preset=desktop"
  npx lighthouse "$2" $preset --locale=de --quiet --chrome-flags="$CHROME_FLAGS" \
    --output=json --output=html --output-path="$OUT/$1" >/dev/null 2>&1 \
    && echo "ok $1" || echo "FEHLER $1"
  sleep 5
}
B=https://www.hausarztpraxis-zum-schloss.de
for i in 1 2 3; do
  lauf "startseite-mobil-$i" "$B/" mobil
  lauf "startseite-desktop-$i" "$B/" desktop
done
lauf "unsere-praxis-mobil-1" "$B/unsere-praxis/" mobil
lauf "termin-mobil-1" "$B/termin/" mobil
lauf "leistung-vorsorge-mobil-1" "$B/services/vorsorgeleistungen/" mobil
date -u +"%Y-%m-%dT%H:%M:%SZ fertig"
