(function () {
  "use strict";

  var DEFINITIONS_CS = {
    "poruchy-uceni":
      "Obtíže při učení (čtení, psaní, počítání, souvislé učení), které nejsou způsobené jen nedostatečnou výukou nebo prostředím.",
    adhd:
      "Porucha pozornosti s hyperaktivitou a/nebo impulzivitou (ADHD). Často jde o slabší udržení soustředění, podrážděnost, nadměrný pohyb nebo impulzivní rozhodování — i bez formální diagnózy lze hledat praktické strategie pro školu i domov.",
    "napravna-cviceni":
      "Cílené činnosti na posílení slabších dovedností (čtení, psaní, počty, pozornost) podle individuálních potřeb.",
    "vysetreni-reci":
      "Hodnocení vývoje řeči a komunikace: výslovnost, slovní zásoba, porozumění — v kontextu školy i domova.",
    "spoluprace-se-skolami":
      "Spolupráce s učiteli a školou: sdílení doporučení, úpravy podpory ve výuce a srozumitelná komunikace o potřebách dítěte.",
    dyskalkulie:
      "Specifická porucha matematických představ a počítání; dítěti se obtížně pracuje s čísly a úlohami.",
    dysgrafie:
      "Specifická porucha písma: obtížné, pomalé nebo nečitelné psaní při zachovaném rozumovém potenciálu.",
    dyslexie:
      "Specifická porucha čtení: pomalé rozpoznávání slov, přeházení písmen, slabší plynulost a porozumění textu.",
    uzkosti:
      "Nadměrný strach, napětí nebo obavy v běžných situacích, které omezují hru, školu nebo vztahy.",
    strach:
      "Silná úzkost, odpor nebo tělesné potíže v náročných situacích — včetně strachu ze školy, nových prostředí nebo nároků na výkon.",
    vztek:
      "Intenzivní hněv nebo výbuchy vzteku — často souvisí s frustrací, přetížením nebo neschopností pojmenovat potřeby.",
    psychosomatika:
      "Tělesné potíže (bolesti břicha, hlavy, nevolnost), u kterých hraje roli stres a psychické vypětí.",
    "poruchy-spanku":
      "Problémy s usínáním, častým budením, nočními můrami nebo neosvěžujícím spánkem.",
    pomocovani:
      "Mimovolní močení ve spánku nebo přes den u věku, kdy už většina vrstevníků zvládá kontinent.",
    "vztah-k-jidlu":
      "Selektivní stravování, strach z jídla, tlak na váhu nebo výrazné změny chování u jídla — s ohledem na věk a vývoj dítěte.",
    "male-sebevedomi":
      "Sklon k přehnané sebekritice, vyhýbání se novým výzvám nebo silné obavy z neúspěchu.",
    "panicke-ataky":
      "Náhlé intenzivní epizody strachu s tělesnými příznaky (bušení srdce, dušnost, závrať); důležitá je psychoedukace a bezpečný postup.",
    "rozvod-rodicu":
      "Ukončení partnerského vztahu rodičů; dítě potřebuje srozumitelné informace a emoční oporu při změnách.",
    "umrti-v-rodine":
      "Smrt blízkého člověka v rodině; děti i dospívající potřebují čas, pravdivé informace věku přiměřeně a prostor pro smutek bez tlaku na „být silný“.",
    "vazne-onemocneni":
      "Závažná nemoc člena rodiny nebo dítěte samého — změny režimu, strach z budoucnosti a potřeba srozumitelné komunikace podle věku dítěte.",
    "detska-psychoterapie":
      "Pravidelná psychologická práce s dítětem zaměřená na obtíže, emoce, chování a vztahy.",
    "krizova-intervence":
      "Krátkodobá intenzivní podpora hned po náročné události (úraz, ztráta, náhlý šok, vážný konflikt).",
    "vychovne-poradenstvi":
      "Konzultace s rodiči: hranice, komunikace s dítětem, řešení konfliktů a výchovných dilemat.",
  };

  var DEFINITIONS_DE = {
    "poruchy-uceni":
      "Schwierigkeiten beim Lernen (Lesen, Schreiben, Rechnen, zusammenhängendes Lernen), die nicht allein durch Unterricht oder Umfeld bedingt sind.",
    adhd:
      "Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung mit und/oder ohne Impulsivität (ADHS). Oft schwächere Konzentration, Unruhe, vermehrte Bewegung oder impulsives Handeln — auch ohne formale Diagnose können wir praktische Strategien für Schule und Zuhause finden.",
    "napravna-cviceni":
      "Gezielte Übungen zur Stärkung schwächerer Fähigkeiten (Lesen, Schreiben, Rechnen, Aufmerksamkeit) nach individuellem Bedarf.",
    "vysetreni-reci":
      "Einschätzung von Sprachentwicklung und Kommunikation: Aussprache, Wortschatz, Verständnis – im Schul- und familiären Kontext.",
    "spoluprace-se-skolami":
      "Zusammenarbeit mit Lehrkräften und Schule: Austausch über Empfehlungen, Unterstützung im Unterricht und klare Kommunikation über die Bedürfnisse des Kindes.",
    dyskalkulie:
      "Spezifische Störung mathematischer Vorstellungen und des Rechnens; das Kind hat Mühe mit Zahlen und Aufgaben.",
    dysgrafie:
      "Spezifische Schreibstörung: mühsames, langsames oder unleserliches Schreiben bei erhaltenem intellektuellen Potenzial.",
    dyslexie:
      "Spezifische Lesestörung: langsames Worterkennen, Buchstabenvertauschungen, geringere Flüssigkeit und Textverständnis.",
    uzkosti:
      "Übermäßige Angst, Anspannung oder Sorgen in Alltagssituationen, die Spiel, Schule oder Beziehungen einschränken.",
    strach:
      "Starke Angst, Widerstand oder körperliche Beschwerden in belastenden Situationen – etwa in der Schule, in neuen Umgebungen oder bei Leistungsanforderungen.",
    vztek:
      "Heftiger Ärger oder Wutausbrüche – oft im Zusammenhang mit Frustration, Überforderung oder dem Gefühl, Bedürfnisse nicht ausdrücken zu können.",
    psychosomatika:
      "Körperliche Beschwerden (Bauch- oder Kopfschmerzen, Übelkeit), bei denen Stress und psychische Belastung eine Rolle spielen.",
    "poruchy-spanku":
      "Schwierigkeiten beim Einschlafen, häufiges Erwachen, Alpträume oder unerholsamer Schlaf.",
    pomocovani:
      "Unwillkürliches Urinieren im Schlaf oder am Tag in einem Alter, in dem die meisten Gleichaltrigen die Kontinenz beherrschen.",
    "vztah-k-jidlu":
      "Selektives Essen, Angst vor Essen, Druck bezüglich Gewicht oder deutliche Veränderungen des Essverhaltens – alters- und entwicklungsbezogen betrachtet.",
    "male-sebevedomi":
      "Tendenz zu starker Selbstkritik, Vermeidung neuer Herausforderungen oder starke Sorge vor Misserfolg.",
    "panicke-ataky":
      "Plötzliche intensive Angstepisoden mit körperlichen Symptomen (Herzklopfen, Atemnot, Schwindel); Psychoedukation und ein sicheres Vorgehen sind wichtig.",
    "rozvod-rodicu":
      "Beendigung der Partnerschaft der Eltern; das Kind braucht verständliche Informationen und emotionale Unterstützung bei Veränderungen.",
    "umrti-v-rodine":
      "Tod einer nahestehenden Person in der Familie; Kinder und Jugendliche brauchen Zeit, altersgerechte, ehrliche Informationen und Raum für Trauer ohne Druck, „stark sein zu müssen“.",
    "vazne-onemocneni":
      "Schwere Erkrankung eines Familienmitglieds oder des Kindes selbst — Veränderungen im Alltag, Angst vor der Zukunft und bedarfsgerechte, altersgerechte Kommunikation.",
    "detska-psychoterapie":
      "Regelmäßige psychologische Arbeit mit dem Kind zu Schwierigkeiten, Emotionen, Verhalten und Beziehungen.",
    "krizova-intervence":
      "Kurzfristige intensive Unterstützung unmittelbar nach belastenden Ereignissen (Unfall, Verlust, Schock, schwerer Konflikt).",
    "vychovne-poradenstvi":
      "Beratung der Eltern: Grenzen, Kommunikation mit dem Kind, Konfliktlösung und Erziehungsfragen.",
  };

  function getLang() {
    return document.documentElement.lang === "de" ? "de" : "cs";
  }

  function getDef(slug) {
    var L = getLang() === "de" ? DEFINITIONS_DE : DEFINITIONS_CS;
    return L[slug] || DEFINITIONS_CS[slug] || "";
  }

  function ariaHint() {
    return getLang() === "de" ? " — Kurzinfo" : " — stručná informace";
  }

  function sheetCloseLabel() {
    return getLang() === "de" ? "Schließen" : "Zavřít";
  }

  function preferSheet() {
    return (
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    );
  }

  function createUi() {
    var tooltip = document.createElement("div");
    tooltip.id = "tag-tooltip";
    tooltip.className = "tag-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.hidden = true;
    tooltip.innerHTML =
      '<p class="tag-tooltip__title"></p><p class="tag-tooltip__body"></p>';

    var sheet = document.createElement("div");
    sheet.id = "tag-sheet";
    sheet.className = "tag-sheet";
    sheet.hidden = true;
    sheet.innerHTML =
      '<div class="tag-sheet__backdrop" tabindex="-1" aria-hidden="true"></div>' +
      '<div class="tag-sheet__panel" role="dialog" aria-modal="true" aria-labelledby="tag-sheet-heading">' +
      '<div class="tag-sheet__handle" aria-hidden="true"></div>' +
      '<h3 id="tag-sheet-heading" class="tag-sheet__title"></h3>' +
      '<p class="tag-sheet__body"></p>' +
      '<button type="button" class="tag-sheet__close">Zavřít</button>' +
      "</div>";

    document.body.appendChild(tooltip);
    document.body.appendChild(sheet);

    return {
      tooltip: tooltip,
      tooltipTitle: tooltip.querySelector(".tag-tooltip__title"),
      tooltipBody: tooltip.querySelector(".tag-tooltip__body"),
      sheet: sheet,
      sheetTitle: sheet.querySelector(".tag-sheet__title"),
      sheetBody: sheet.querySelector(".tag-sheet__body"),
      sheetClose: sheet.querySelector(".tag-sheet__close"),
      sheetBackdrop: sheet.querySelector(".tag-sheet__backdrop"),
      sheetPanel: sheet.querySelector(".tag-sheet__panel"),
    };
  }

  var ui = createUi();
  var hideTooltipTimer = null;
  var activeTag = null;

  function showTooltip(btn, title, body) {
    if (!body || preferSheet()) return;
    clearTimeout(hideTooltipTimer);
    activeTag = btn;
    ui.tooltipTitle.textContent = title;
    ui.tooltipBody.textContent = body;
    ui.tooltip.hidden = false;
    ui.tooltip.setAttribute("aria-hidden", "false");

    requestAnimationFrame(function () {
      positionTooltip(btn);
      ui.tooltip.classList.add("tag-tooltip--visible");
    });
  }

  function positionTooltip(btn) {
    var r = btn.getBoundingClientRect();
    var margin = 10;
    var tw = ui.tooltip.offsetWidth;
    var th = ui.tooltip.offsetHeight;
    var left = r.left + r.width / 2 - tw / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));
    var top = r.bottom + margin;
    if (top + th > window.innerHeight - margin) {
      top = r.top - th - margin;
    }
    if (top < margin) {
      top = margin;
    }
    ui.tooltip.style.left = left + "px";
    ui.tooltip.style.top = top + "px";
  }

  function hideTooltip() {
    ui.tooltip.classList.remove("tag-tooltip--visible");
    hideTooltipTimer = setTimeout(function () {
      ui.tooltip.hidden = true;
      ui.tooltip.setAttribute("aria-hidden", "true");
      activeTag = null;
    }, 160);
  }

  function openSheet(title, body) {
    ui.sheetTitle.textContent = title;
    ui.sheetBody.textContent = body;
    ui.sheet.hidden = false;
    document.body.classList.add("tag-sheet-open");
    requestAnimationFrame(function () {
      ui.sheet.classList.add("tag-sheet--open");
    });
    ui.sheetClose.focus();
  }

  function closeSheet() {
    ui.sheet.classList.remove("tag-sheet--open");
    document.body.classList.remove("tag-sheet-open");
    setTimeout(function () {
      if (!ui.sheet.classList.contains("tag-sheet--open")) {
        ui.sheet.hidden = true;
      }
    }, 280);
  }

  function onTagClick(ev) {
    var btn = ev.currentTarget;
    var slug = btn.getAttribute("data-def");
    var title = btn.textContent.trim();
    var body = getDef(slug);
    if (!body) return;

    if (preferSheet()) {
      ev.preventDefault();
      openSheet(title, body);
    }
  }

  function bindTag(btn) {
    var slug = btn.getAttribute("data-def");
    var title = btn.textContent.trim();
    var body = getDef(slug);
    if (!body) return;

    btn.setAttribute("aria-label", title + ariaHint());

    btn.addEventListener("mouseenter", function () {
      if (!preferSheet()) showTooltip(btn, title, body);
    });
    btn.addEventListener("mouseleave", function () {
      hideTooltip();
    });
    btn.addEventListener("focus", function () {
      if (!preferSheet()) showTooltip(btn, title, body);
    });
    btn.addEventListener("blur", function () {
      hideTooltip();
    });
    btn.addEventListener("click", onTagClick);
  }

  function rebindTopicTags() {
    hideTooltip();
    if (!ui.sheet.hidden) closeSheet();
    ui.sheetClose.textContent = sheetCloseLabel();
    document.querySelectorAll(".topics .tag[data-def]").forEach(function (btn) {
      var clone = btn.cloneNode(true);
      btn.parentNode.replaceChild(clone, btn);
      bindTag(clone);
    });
  }

  ui.sheetClose.addEventListener("click", closeSheet);
  ui.sheetBackdrop.addEventListener("click", closeSheet);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !ui.sheet.hidden) {
      closeSheet();
    }
  });

  window.addEventListener(
    "resize",
    function () {
      if (activeTag && !preferSheet() && !ui.tooltip.hidden) {
        positionTooltip(activeTag);
      }
    },
    { passive: true }
  );

  window.rebindTopicTags = rebindTopicTags;

  document.querySelectorAll(".topics .tag[data-def]").forEach(bindTag);
})();
