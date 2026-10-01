// Praxis zum Schloss – Entwurf (vivenna)
// Bewusst kleines Vanilla-JS ohne Bibliotheken: Die Seite funktioniert vollständig ohne Skript;
// das Skript verbessert nur Menü und „Sprechzeiten heute“ (progressive Verbesserung).
(function () {
  'use strict';

  // --- Mobiles Menü ---------------------------------------------------------
  var knopf = document.querySelector('.menue-knopf');
  var nav = document.getElementById('hauptnavigation');
  if (knopf && nav) {
    var setze = function (offen) {
      nav.classList.toggle('ist-offen', offen);
      knopf.setAttribute('aria-expanded', String(offen));
    };
    knopf.addEventListener('click', function () {
      setze(knopf.getAttribute('aria-expanded') !== 'true');
    });
    // Nach Auswahl eines Ankers schließen, damit der Inhalt sichtbar wird.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setze(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && knopf.getAttribute('aria-expanded') === 'true') {
        setze(false);
        knopf.focus();
      }
    });
  }

  // --- Sprechzeiten heute -----------------------------------------------------
  // Die Daten stehen nur einmal im HTML (Tabelle); das Skript liest sie dort aus,
  // damit Pflege an genau einer Stelle passiert. Zeitzone fest auf Berlin, damit
  // Besucher im Ausland nicht falsche Tage sehen.
  var tagNr;
  try {
    var kurz = new Intl.DateTimeFormat('en-GB', { weekday: 'short', timeZone: 'Europe/Berlin' }).format(new Date());
    tagNr = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[kurz];
  } catch (e) {
    tagNr = ((new Date().getDay() + 6) % 7) + 1;
  }
  var ziel = document.querySelector('[data-heute]');
  var zeile = document.querySelector('.zeiten tr[data-tag="' + tagNr + '"]');
  if (zeile) zeile.classList.add('ist-heute');
  if (ziel) {
    if (zeile) {
      var zellen = zeile.querySelectorAll('td');
      var zeiten = [];
      zellen.forEach(function (z) {
        if (!z.querySelector('.zu')) zeiten.push(z.textContent.trim());
      });
      ziel.textContent = 'Heute, ' + zeile.querySelector('th').textContent + ': ' + zeiten.join(' und ') + '.';
    } else {
      ziel.textContent = 'Heute ist die Praxis geschlossen. In dringenden Fällen: 116 117.';
    }
  }

  // --- Platzhalter-Links -------------------------------------------------------
  // Im Entwurf sollen Platzhalter nicht ins Leere springen, sondern erklären, was hier hinkommt.
  document.querySelectorAll('[data-platzhalter]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      a.setAttribute('title', 'Platzhalter im Entwurf – wird im Projekt angebunden.');
    });
  });
})();
