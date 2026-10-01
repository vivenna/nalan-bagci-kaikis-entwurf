// Praxis zum Schloss – Entwurf 2 (vivenna)
// Architektur: ein kleines Skript ohne Bibliotheken. Alles, was beim Scrollen passiert, läuft
// gebündelt in EINEM requestAnimationFrame-Durchlauf (keine Ruckler, keine Layout-Thrashing-Schleifen).
// Die Seite funktioniert vollständig ohne Skript; es verfeinert nur Bewegung und Live-Informationen.
(function () {
  'use strict';

  var bewegungAus = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var feinZeiger = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (s, k) { return (k || document).querySelector(s); };
  var $$ = function (s, k) { return Array.prototype.slice.call((k || document).querySelectorAll(s)); };

  /* ---------- Sprechzeiten: eine Quelle (Wochenplan im HTML) ---------- */
  // Zeiten werden aus den Blöcken im HTML gelesen, damit Pflege nur an einer Stelle passiert.
  var zeiten = {};
  $$('.wochenplan__tage li').forEach(function (li) {
    var tag = +li.getAttribute('data-tag');
    zeiten[tag] = $$('.block', li).map(function (b) {
      var s = getComputedStyle(b);
      return [parseFloat(s.getPropertyValue('--von')), parseFloat(s.getPropertyValue('--bis'))];
    });
  });
  var TAGE = ['', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  var fmt = function (h) { var m = Math.round((h % 1) * 60); return Math.floor(h) + (m ? ':' + String(m).padStart(2, '0') : '') + ' Uhr'; };

  function berlinJetzt() {
    // Zeitzone fest auf Berlin, damit Besucher im Ausland korrekte Angaben sehen.
    try {
      var teile = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
      var w = {}; teile.forEach(function (t) { w[t.type] = t.value; });
      return { tag: { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[w.weekday], h: +w.hour + (+w.minute) / 60 };
    } catch (e) { var d = new Date(); return { tag: ((d.getDay() + 6) % 7) + 1, h: d.getHours() + d.getMinutes() / 60 }; }
  }

  function status() {
    var j = berlinJetzt(), heute = zeiten[j.tag] || [];
    for (var i = 0; i < heute.length; i++) {
      if (j.h >= heute[i][0] && j.h < heute[i][1]) return { offen: true, kurz: 'Geöffnet bis ' + fmt(heute[i][1]), lang: 'Jetzt geöffnet · bis ' + fmt(heute[i][1]), j: j };
    }
    for (i = 0; i < heute.length; i++) {
      if (j.h < heute[i][0]) return { offen: false, kurz: 'Öffnet heute ' + fmt(heute[i][0]), lang: 'Geschlossen · öffnet heute um ' + fmt(heute[i][0]), j: j };
    }
    for (var n = 1; n <= 7; n++) {
      var t = ((j.tag - 1 + n) % 7) + 1;
      if (zeiten[t] && zeiten[t].length) {
        var wann = n === 1 ? 'morgen' : TAGE[t];
        return { offen: false, kurz: 'Öffnet ' + wann + ' ' + fmt(zeiten[t][0][0]), lang: 'Geschlossen · öffnet ' + wann + ' um ' + fmt(zeiten[t][0][0]), j: j };
      }
    }
    return null;
  }

  function heuteText(tag) {
    var z = zeiten[tag];
    if (!z || !z.length) return 'Heute geschlossen';
    return z.map(function (b) { return b[0] + '–' + b[1]; }).join(' & ') + ' Uhr';
  }

  function aktualisiereStatus() {
    var s = status(); if (!s) return;
    var pill = $('[data-status-pill]');
    if (pill) { pill.hidden = false; pill.classList.toggle('ist-offen', s.offen); $('[data-status-kurz]', pill).textContent = s.kurz; }
    var karte = $('[data-status-karte]');
    if (karte) {
      $('.schwebe__label', karte).textContent = 'Heute · ' + heuteText(s.j.tag);
      $('[data-status-lang]', karte).textContent = s.offen ? 'Jetzt geöffnet' : s.kurz;
      $('.status__punkt', karte).classList.toggle('ist-offen', s.offen);
    }
    var gross = $('[data-status-gross]');
    if (gross) {
      gross.innerHTML = '';
      var p = document.createElement('span'); p.className = 'status__punkt' + (s.offen ? ' ist-offen' : ''); p.setAttribute('aria-hidden', 'true');
      gross.appendChild(p); gross.appendChild(document.createTextNode(s.lang));
    }
    // Heute im Wochenplan markieren und „Jetzt“-Linie setzen (Achse 8–20 Uhr)
    $$('.wochenplan__tage li').forEach(function (li) { li.classList.toggle('ist-heute', +li.getAttribute('data-tag') === s.j.tag); });
    var alt = $('.jetzt'); if (alt) alt.remove();
    var zeile = $('.wochenplan__tage li[data-tag="' + s.j.tag + '"] .wochenplan__spur');
    if (zeile && s.j.h >= 8 && s.j.h <= 20) {
      var linie = document.createElement('span'); linie.className = 'jetzt'; linie.setAttribute('aria-hidden', 'true');
      var hh = Math.floor(s.j.h), mm = Math.round((s.j.h - hh) * 60);
      linie.setAttribute('data-zeit', hh + ':' + String(mm).padStart(2, '0'));
      linie.style.left = ((s.j.h - 8) / 12 * 100) + '%';
      zeile.appendChild(linie);
    }
  }
  aktualisiereStatus();
  setInterval(aktualisiereStatus, 60000);

  /* ---------- Menü ---------- */
  var menueKnopf = $('.menue-knopf'), nav = $('#hauptnavigation');
  function menue(offen) {
    nav.classList.toggle('ist-offen', offen);
    menueKnopf.setAttribute('aria-expanded', String(offen));
    menueKnopf.setAttribute('aria-label', offen ? 'Menü schließen' : 'Menü öffnen');
    document.body.classList.toggle('menue-offen', offen);
  }
  if (menueKnopf && nav) {
    menueKnopf.addEventListener('click', function () { menue(menueKnopf.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) menue(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('ist-offen')) { menue(false); menueKnopf.focus(); } });
  }

  /* ---------- Reiter (Leistungen) ---------- */
  var reiter = $('[data-reiter]');
  if (reiter) {
    var tabs = $$('[role="tab"]', reiter), zeiger = $('.reiter__zeiger', reiter);
    var setzeZeiger = function (tab) {
      reiter.style.setProperty('--z-links', tab.offsetLeft + 'px');
      reiter.style.setProperty('--z-breite', tab.offsetWidth + 'px');
      reiter.style.setProperty('--z-oben', tab.offsetTop + 'px');
      reiter.style.setProperty('--z-hoehe', tab.offsetHeight + 'px');
    };
    var waehle = function (tab, fokus) {
      tabs.forEach(function (t) {
        var an = t === tab;
        t.setAttribute('aria-selected', String(an)); t.tabIndex = an ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        panel.hidden = !an;
        if (an) { panel.classList.remove('ist-neu'); void panel.offsetWidth; panel.classList.add('ist-neu'); }
      });
      setzeZeiger(tab); if (fokus) tab.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { waehle(t); });
      t.addEventListener('keydown', function (e) {
        var n = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (n) { e.preventDefault(); waehle(tabs[(i + n + tabs.length) % tabs.length], true); }
        if (e.key === 'Home') { e.preventDefault(); waehle(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); waehle(tabs[tabs.length - 1], true); }
      });
    });
    var aktiv = function () { return tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0]; };
    setzeZeiger(aktiv());
    window.addEventListener('resize', function () { setzeZeiger(aktiv()); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setzeZeiger(aktiv()); });
  }

  /* ---------- Wort-für-Wort-Satz vorbereiten ---------- */
  var satz = $('[data-woerter]'), woerter = [];
  if (satz && !bewegungAus) {
    var text = satz.textContent.trim();
    // Vollständiger Satz für Screenreader, einzelne Wörter nur visuell (aria-label ist auf <p> nicht erlaubt).
    satz.innerHTML = '<span class="sr-only">' + text + '</span>' + text.split(/\s+/).map(function (w) { return '<span class="wort" aria-hidden="true">' + w + '</span>'; }).join(' ');
    woerter = $$('.wort', satz);
  }

  /* ---------- Einblenden beim Scrollen ---------- */
  if ('IntersectionObserver' in window && !bewegungAus) {
    var io = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('ist-sichtbar'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    $$('.reveal, [data-wochenplan]').forEach(function (el) { io.observe(el); });
  } else {
    $$('.reveal, [data-wochenplan]').forEach(function (el) { el.classList.add('ist-sichtbar'); });
  }

  /* ---------- Alles, was vom Scrollen abhängt: ein rAF-Durchlauf ---------- */
  var kopf = $('[data-kopf]'), leiste = $('.aktionsleiste'), zeitleiste = $('[data-zeitleiste]');
  var parallax = $$('[data-parallax]'), punkte = zeitleiste ? $$('.zeitleiste__punkt', zeitleiste) : [];
  var letztesY = window.scrollY, geplant = false, gelesen = 0, zeitMax = 0;

  function beimScrollen() {
    geplant = false;
    var y = window.scrollY, vh = window.innerHeight;
    // Kopf: Glas ab 24 px, beim Runterscrollen ausblenden, beim Hochscrollen zeigen
    if (kopf) {
      kopf.classList.toggle('ist-gescrollt', y > 24);
      var runter = y > letztesY && y > 320 && !document.body.classList.contains('menue-offen');
      kopf.classList.toggle('ist-versteckt', runter);
    }
    if (leiste) leiste.classList.toggle('ist-sichtbar', y > vh * 0.55);
    letztesY = y;
    if (bewegungAus) return;
    parallax.forEach(function (el) {
      var f = parseFloat(el.getAttribute('data-parallax')) || 0;
      if (y < vh * 1.2) el.style.transform = 'translate3d(0,' + (y * f).toFixed(1) + 'px,0)';
    });
    if (woerter.length) {
      var r = satz.getBoundingClientRect();
      var p = (vh * 0.82 - r.top) / (r.height + vh * 0.35);
      // Einmal gelesene Wörter bleiben hervorgehoben – ruhiger beim Zurückscrollen.
      gelesen = Math.max(gelesen, Math.round(Math.max(0, Math.min(1, p)) * woerter.length));
      woerter.forEach(function (w, i) { w.classList.toggle('ist-an', i < gelesen); });
    }
    if (zeitleiste) {
      var z = zeitleiste.getBoundingClientRect();
      zeitMax = Math.max(zeitMax, Math.max(0, Math.min(1, (vh * 0.62 - z.top) / z.height)));
      zeitleiste.style.setProperty('--fortschritt', zeitMax.toFixed(3));
      punkte.forEach(function (pt) { if (pt.getBoundingClientRect().top < vh * 0.62) pt.classList.add('ist-erreicht'); });
    }
  }
  window.addEventListener('scroll', function () { if (!geplant) { geplant = true; requestAnimationFrame(beimScrollen); } }, { passive: true });
  window.addEventListener('resize', beimScrollen);
  beimScrollen();

  /* ---------- Feinheiten für Maus/Trackpad ---------- */
  if (feinZeiger && !bewegungAus) {
    // Lichtkegel auf Karten
    $$('[data-licht]').forEach(function (k) {
      k.addEventListener('pointermove', function (e) {
        var r = k.getBoundingClientRect();
        k.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        k.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
    // Leicht „magnetische“ Hauptknöpfe (max. 6 px)
    $$('[data-magnet]').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) / r.width * 12).toFixed(1) + 'px');
        b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) / r.height * 8).toFixed(1) + 'px');
      });
      b.addEventListener('pointerleave', function () { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
    });
  }

  /* ---------- Platzhalter im Entwurf ---------- */
  $$('[data-platzhalter]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); a.setAttribute('title', 'Wird im Projekt mit den Texten der Praxis verknüpft.'); });
  });
})();
