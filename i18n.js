(function () {
  "use strict";

  var STORAGE_KEY = "detska-psychoterapie-lang";

  function isPrivacyPage() {
    return (
      document.body &&
      document.body.getAttribute("data-page") === "privacy"
    );
  }

  /** Pouze němčina — čeština zůstává v HTML (snapshot při načtení). */
  var STRINGS_DE = {
    doc_title:
      "Kinderpsychotherapie Prag 6 — Dr. Veronika Kieslingová",
    meta_description:
      "Kinderpsychotherapie und Beratung in Prag 6. Dr. Veronika Kieslingová — 30 Jahre Praxis, ADHS, Ängste, Schulprobleme, Familienberatung. Privatpraxis ohne Überweisung.",

    nav_about: "Über mich",
    nav_about_title: "Kurzprofil und Praxis",
    nav_help: "Meine Spezialisierungen",
    nav_edu: "Ausbildung",
    nav_faq: "Häufige Fragen",
    nav_pricing: "Preise",
    nav_contact: "Kontakt",
    nav_help_title: "Themen und Spezialisierungen",
    nav_edu_title: "Ausbildung",
    lang_toggle_btn: "Tschechische Version anzeigen",
    nav_faq_title: "Fragen und Antworten",
    nav_aria_main: "Hauptnavigation",
    nav_menu_toggle_aria: "Menü ein- oder ausblenden",
    skip_to_content: "Zum Inhalt springen",

    consent_title: "Cookies und Reichweitenmessung",
    consent_body:
      "Diese Website nutzt Google Analytics zur Besucherstatistik. Technisch notwendige Cookies sind immer aktiv; die Analysemessung wird erst nach Ihrer Einwilligung aktiviert (DSGVO / ePrivacy).",
    consent_essential: "Nur notwendige",
    consent_accept: "Alle akzeptieren",
    consent_privacy_link: "Datenschutzerklärung",

    privacy_doc_title: "Datenschutzerklärung – Dr. Veronika Kieslingová",
    privacy_meta_description:
      "Informationen zur Verarbeitung personenbezogener Daten im Zusammenhang mit dieser Website und der Kontaktaufnahme zur Praxis von Dr. Veronika Kieslingová, Prag 6.",

    privacy_title: "Datenschutzerklärung",
    privacy_lead:
      "Diese Erklärung beschreibt, wie ich personenbezogene Daten im Zusammenhang mit dieser Website und bei der Kontaktaufnahme verarbeite.",
    privacy_h_controller: "Verantwortliche Stelle",
    privacy_p_controller:
      "Dr. Veronika Kieslingová, Nad Paťankou 16, Prag 6. Kontakt: v.kiesling@seznam.cz, Tel. +420 602 643 450.",
    privacy_h_data: "Welche Daten ich verarbeite",
    privacy_p_data:
      "Diese Website speichert keine personenbezogenen Daten automatisch. Wenn Sie mich telefonisch oder per E-Mail kontaktieren, verarbeite ich nur die Angaben, die Sie mir mitteilen (Name, Kontakt, zum Therapiekontext relevante Informationen über das Kind) auf Grundlage der Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und berechtigter Interessen.",
    privacy_h_analytics: "Besuchermessung (Google Analytics)",
    privacy_p_analytics:
      "Wenn Sie über die Cookie-Leiste zustimmen, nutze ich Google Analytics 4 zur statistischen Auswertung der Nutzung. Die Messung dient ausschließlich der Verbesserung des Webangebots und ist anonymisiert. Ohne Einwilligung findet keine Analyse statt. Sie können Ihre Einwilligung jederzeit widrufen, indem Sie die Cookies in Ihrem Browser löschen.",
    privacy_h_thirdparty: "Dienste Dritter",
    privacy_p_thirdparty:
      "Die Karte auf der Kontaktseite nutzt einen eingebetteten Rahmen von Mapy.cz. Bei Interaktion mit der Karte können Cookies des Betreibers dieser Dienste gesetzt werden.",
    privacy_h_rights: "Ihre Rechte",
    privacy_p_rights:
      "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Zur Ausübung Ihrer Rechte kontaktieren Sie mich bitte unter der oben genannten E-Mail-Adresse oder Telefonnummer. Beschwerden können Sie bei der tschechischen Datenschutzbehörde einreichen (Úřad pro ochranu osobních údajů — uoou.cz).",
    privacy_updated: "Letzte Aktualisierung: April 2026",

    lang_aria: "Sprache der Seite",
    sheet_close: "Schließen",

    tag_poruchy_uceni: "Lernstörungen",
    tag_adhd: "ADHS",
    tag_napravna_cviceni: "Förderübungen",
    tag_vysetreni_reci: "Sprachuntersuchung",
    tag_spoluprace_se_skolami: "Zusammenarbeit mit Schulen",
    tag_dyskalkulie: "Dyskalkulie",
    tag_dysgrafie: "Dysgraphie",
    tag_dyslexie: "Dyslexie",
    tag_uzkosti: "Ängste",
    tag_strach: "Angst",
    tag_vztek: "Wut",
    tag_psychosomatika: "Psychosomatik",
    tag_poruchy_spanku: "Schlafstörungen",
    tag_pomocovani: "Einnässen",
    tag_vztah_k_jidlu: "Beziehung zum Essen",
    tag_male_sebevedomi: "Geringes Selbstwertgefühl",
    tag_panicke_ataky: "Panikattacken",
    tag_sebeposkozovani: "Selbstverletzung",
    tag_rozvod_rodicu: "Scheidung der Eltern",
    tag_umrti_v_rodine: "Tod in der Familie",
    tag_vazne_onemocneni: "Schwere Erkrankung",
    tag_detska_psychoterapie: "Kinderpsychotherapie",
    tag_krizova_intervence: "Krisenintervention",
    tag_vychovne_poradenstvi: "Erziehungsberatung",

    hero_kicker: "Kinderpsychotherapie Prag 6",
    hero_title:
      '<span class="hero__title-line">Wachstumsraum für Kinder,</span><span class="hero__title-line">Jugendliche und junge Erwachsene</span>',
    hero_title_aria:
      "Wachstumsraum für Kinder, Jugendliche und junge Erwachsene",
    hero_perex:
      "Psychotherapeutische\u00a0und\u00a0heilpädagogische Betreuung in\u00a0der Privatpraxis in\u00a0Prag\u00a06. Ohne ärztliche Überweisung, in\u00a0diskreter und\u00a0ruhiger Atmosphäre.",
    hero_cta: "Kontakt",
    hero_secondary: "Über mich",
    hero_img_alt:
      "Dr. Veronika Kieslingová, Kinderpsychologin Prag 6",

    about_stat_practice: "PRAXIS",
    about_stat_practice_val: "30 Jahre",
    about_stat_lang: "SPRACHE",
    about_headline:
      "Ich widme mein ganzes Berufsleben Kindern, Familien und ihrem Weg zu mehr Wohlbefinden.",
    about_text:
      "Seit über dreißig Jahren arbeite ich in Prag 6 als Psychotherapeutin und Sonderpädagogin. Meinen Beruf verstehe ich als lebenslanges Lernen – ich suche stets Wege, bewährte psychotherapeutische Methoden mit einem einfühlsamen, ganzheitlichen Zugang zu Kind und Familie zu verbinden.",

    topics_heading: "Meine Spezialisierungen",
    topic_family: "Familie und Unterstützung",

    edu_heading: "Ausbildung",
    edu_academic: "Akademische Ausbildung",
    edu_degree1: "Sonderpädagogik – Defektologie",
    edu_degree2: "Psychologie",
    edu_school2: "Außerordentliches Studium, Philosophische Fakultät UK",
    edu_degree3: "Doktorat",
    edu_school3: "an der PF UK",
    edu_psychotherapy: "Psychotherapie und Weiterbildungen",
    edu_more: "Weitere Kurse und Praxis",
    edu_extra_psych: "Psychotherapie",
    edu_extra_spec: "Sonderpädagogik und Diagnostik",
    edu_body: "Körperorientierung",
    edu_practice: "Praxis",

    pricing_heading: "Preise",
    pricing_child: "Kinderpsychotherapie",
    pricing_price_child: "1 500 Kč",
    pricing_base_hint: "/ 60 Min.",
    pricing_consult: "Beratungsgespräch",
    pricing_price_consult: "1 700 Kč",
    pricing_consult_hint: "/ 60 Min.",
    pricing_note_evening: "ab 18 Uhr — 1 800 Kč",
    pricing_note_weekend: "am Wochenende — 2 000 Kč",
    pricing_note_evening2: "ab 18 Uhr — 1 800 Kč",
    pricing_note_weekend2: "am Wochenende — 2 000 Kč",
    pricing_access_note:
      "Mir ist wichtig, dass die Betreuung zugänglich ist. Bei finanzieller Notlage kann ein individueller Preis vereinbart werden.",
    pricing_banner:
      "Eine kostenlose Terminabsage ist bis spätestens 24 Stunden im Voraus möglich. Vielen Dank für Ihr Verständnis.",

    contact_heading: "Kontakt",
    contact_phone: "Telefon",
    contact_email: "E-Mail",
    contact_address: "Adresse",
    map_hint: "Klicken Sie, um die Karte zu steuern",
    map_iframe_title: "Karte der Praxis — Nad Paťankou 16, Prag 6",

    footer_line:
      "Kinderpsychotherapie Prag 6 &middot; Nad Paťankou 16 &middot; <a href=\"mailto:v.kiesling@seznam.cz\">v.kiesling@seznam.cz</a>",

    faq_title_q: "Fragen",
    faq_title_mid: "und",
    faq_title_a: "Antworten",
    faq_q1:
      "Wie läuft der erste Besuch bei einer Kinderpsychologin?",
    faq_a1:
      "„Das erste Gespräch findet in der Regel nur mit den Eltern statt, ohne das Kind. Ich brauche eine ausführliche Familienanamnese und die Sicht der Eltern auf die Probleme in der Schule oder zu Hause. Gemeinsam planen wir, wie wir dem Kind den Besuch in unserer Praxis in Prag 6 erklären, damit es keine Angst hat und sich sicher fühlt.“",
    faq_q2:
      "Behandeln Sie auch spezifische Störungen wie ADHS, Ängste oder Selbstverletzung?",
    faq_a2:
      "„Ja, in meiner Praxis spezialisiere ich mich auf ein breites Spektrum von Schwierigkeiten. Ich helfe Kindern, mit Ängsten, Panikattacken, ADHS und Konzentrationsstörungen umzugehen. Ich widme mich auch psychosomatischen Beschwerden und begleite Familien durch belastende Zeiten — etwa eine Scheidung der Eltern, eine schwere Erkrankung oder einen Todesfall in der Familie.“",
    faq_q3: "Brauche ich eine Überweisung vom Kinderarzt?",
    faq_a3:
      "„Nein, eine ärztliche Überweisung brauchen Sie nicht. Ich bin eine private Einrichtung — das bedeutet kurze Wartezeiten und maximale Diskretion. Ihre Besuche werden nicht in der Akte beim Kinderarzt vermerkt. Die Leistungen zahlen Sie direkt (siehe Preise für Psychotherapie unten).“",
    faq_q4: "Wie läuft die Therapie mit einem kleinen Kind ab?",
    faq_a4:
      "„Bei jüngeren Kindern verläuft die Therapie nicht wie ein klassisches Gespräch — ich arbeite mit Spiel, Zeichnen, Geschichten und anderen Techniken, die dem Kind entsprechen. Über das Spiel öffnen sich Kinder oft viel leichter als nur mit Worten. Die Eltern werden regelmäßig über den Verlauf informiert und erhalten konkrete Tipps, wie sie dem Kind auch zu Hause helfen können.“",
    faq_q5: "Wie viele Sitzungen wird das Kind brauchen?",
    faq_a5:
      "„Die Dauer der Therapie hängt von Art und Tiefe der Schwierigkeiten ab. Bei manchen Kindern reichen einige Beratungsgespräche zu einer konkreten Situation, andere Fälle brauchen längerfristige Zusammenarbeit. Wir gehen immer nach einem individuellen Plan vor und bewerten den Verlauf regelmäßig gemeinsam mit den Eltern.“",
  };

  /** InnerHTML pro <li> ve vzdělání (tučné názvy + zbytek) — pořadí jako v HTML. */
  var EDU_LIS_DE = [
    "<strong>Körperorientierte biodynamische Psychotherapie</strong> 6 Jahre, Zertifikat EABP Lübeck",
    "<strong>Systemische Paar- und Familienpsychotherapie</strong> 3 Jahre, ISZ Prag",
    "<strong>Weiterbildung in analytischer Kinderpsychotherapie</strong> 1 Jahr, IPDAR",
    "<strong>Hakomi-Therapie</strong> Hakomi-Institut Leipzig",
    "<strong>Grundausbildung KVT</strong> Prag",
    "<strong>Systemische Arbeit</strong> mit Kindern und Jugendlichen, SPAS Prag",
    "<strong>Psychotherapie für Kinder und Jugendliche</strong> – Manfred Voght, ISZ Prag",
    "<strong>Emotionale und soziale Geburt des Kindes</strong>, CKP Dobřichovice",
    "<strong>Traumarbeit</strong> und Lebensgeschichte, SPP Brünn",
    "<strong>Sokratisches Gespräch</strong>, SPP Brünn",
    "<strong>Suche und Heilung des inneren Kindes</strong>, IPIPAPP Olmütz",
    "<strong>Krisenintervention</strong>, Remedium Prag",
    "<strong>Telefonische Krisenintervention</strong>, Remedium Prag und Linka bezpečí Prag",
    "<strong>Beratung in der Menopause</strong> – FSB Romanshorn, Schweiz",
    "<strong>Asperger-Syndrom</strong>, ČLK Prag",
    "<strong>Partielle insuffiziente perceptiv-funktionelle Effizienz</strong>, Prodys Prag",
    "<strong>Unruhiges Kind – besonderer Förderunterricht</strong>, Dyscentrum Prag",
    "<strong>Reeducation spezifischer Lernstörungen auf dem Trampolin</strong>, Dyscentrum Prag",
    "<strong>Wahrnehmungs- und motorische Schwächen in der Schulpraxis</strong>, Prodys Prag",
    "<strong>Kumot</strong>, Dyscentrum Prag",
    "<strong>Kinesiologie One Brain</strong>, Stufe 1 und 2, Prag",
    "<strong>Biorelease-Therapie</strong> EABP Lübeck",
    "<strong>Progressive Muskelentspannung</strong> Prag",
    "<strong>Holotropes Atmen</strong>, SPP Brünn",
    "<strong>Klangheilung mit tibetischen Klangschalen</strong> PHA Wien",
    "<strong>Bach-Blütentherapie</strong>, Stufe 1 und 2 Akvamarin Prag",
    "<strong>Bezirksinstitut für Volksgesundheit</strong> Prag 1, Prag 5",
    "<strong>Private sonderpädagogische Praxis Poerta</strong> – Therapeutin",
    "<strong>Linka bezpečí</strong> – Beraterin, Supervisorin",
    "<strong>Cesta k pohodě</strong> – Therapeutin, Fortbildungsdozentin",
    "<strong>Private sonderpädagogische und psychotherapeutische Praxis</strong> – Therapeutin",
    "<strong>Deutsche Schule und Gymnasium</strong> in Prag 5 – Psychologin",
    "<strong>Deutscher Kindergarten</strong> in Prag 5 – Psychologin",
    "<strong>Kindergruppe Romodrom</strong> – Therapeutin",
    "<strong>Renomia</strong> – psychologische Konsultationen seit dem Jahr 2019",
  ];

  var SNAPSHOT = {};
  var captured = false;
  /** Snímek českých <li> ve vzdělání jen jednou — jinak by při DE→CS přepsal snapshot němčinou. */
  var eduLisCaptured = false;

  function capture() {
    if (captured) return;
    captured = true;
    var navEl = document.querySelector(".site-nav");
    if (navEl) {
      SNAPSHOT.nav_aria_main = navEl.getAttribute("aria-label") || "";
    }
    var langGroup = document.querySelector(".lang-switch");
    if (langGroup) {
      SNAPSHOT.lang_aria_cs = langGroup.getAttribute("aria-label") || "";
    }
    var navToggle = document.querySelector(".site-nav__toggle");
    if (navToggle) {
      SNAPSHOT.nav_menu_toggle_aria = navToggle.getAttribute("aria-label") || "";
    }
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!k) return;
      SNAPSHOT[k] = el.hasAttribute("data-i18n-html")
        ? el.innerHTML
        : el.textContent;
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-title");
      if (!k) return;
      SNAPSHOT["title:" + k] = el.getAttribute("title") || "";
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (!k) return;
      SNAPSHOT["alt:" + k] = el.getAttribute("alt") || "";
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria-label");
      if (!k) return;
      SNAPSHOT["arialabel:" + k] = el.getAttribute("aria-label") || "";
    });
    SNAPSHOT.__docTitle = document.title;
    var meta = document.querySelector('meta[name="description"]');
    SNAPSHOT.__metaDesc = meta ? meta.getAttribute("content") || "" : "";
  }

  function setTextsDe() {
    var navEl = document.querySelector(".site-nav");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!k || !STRINGS_DE[k]) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = STRINGS_DE[k];
      } else {
        el.textContent = STRINGS_DE[k];
      }
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-title");
      if (k && STRINGS_DE[k]) el.setAttribute("title", STRINGS_DE[k]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (k && STRINGS_DE[k]) el.setAttribute("alt", STRINGS_DE[k]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria-label");
      if (k && STRINGS_DE[k]) el.setAttribute("aria-label", STRINGS_DE[k]);
    });

    var lis = document.querySelectorAll("#vzdelani .edu-list li[data-i18n-edu-li]");
    lis.forEach(function (li) {
      var idx = parseInt(li.getAttribute("data-i18n-edu-li"), 10);
      if (!isNaN(idx) && EDU_LIS_DE[idx]) {
        li.innerHTML = EDU_LIS_DE[idx];
      }
    });

    document.title = isPrivacyPage()
      ? STRINGS_DE.privacy_doc_title
      : STRINGS_DE.doc_title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        isPrivacyPage()
          ? STRINGS_DE.privacy_meta_description
          : STRINGS_DE.meta_description
      );
    }

    document.documentElement.lang = "de";
    if (navEl) navEl.setAttribute("aria-label", STRINGS_DE.nav_aria_main);
    var navToggle = document.querySelector(".site-nav__toggle");
    if (navToggle && STRINGS_DE.nav_menu_toggle_aria) {
      navToggle.setAttribute("aria-label", STRINGS_DE.nav_menu_toggle_aria);
    }
  }

  function setTextsCs() {
    var navEl = document.querySelector(".site-nav");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!k || SNAPSHOT[k] === undefined) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = SNAPSHOT[k];
      } else {
        el.textContent = SNAPSHOT[k];
      }
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-title");
      if (!k) return;
      var t = SNAPSHOT["title:" + k];
      if (t) el.setAttribute("title", t);
      else el.removeAttribute("title");
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (!k) return;
      var a = SNAPSHOT["alt:" + k];
      if (a) el.setAttribute("alt", a);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria-label");
      if (!k) return;
      var al = SNAPSHOT["arialabel:" + k];
      if (al) el.setAttribute("aria-label", al);
      else el.removeAttribute("aria-label");
    });

    document.querySelectorAll("#vzdelani .edu-list li[data-i18n-edu-li]").forEach(
      function (li) {
        var idx = li.getAttribute("data-i18n-edu-li");
        if (SNAPSHOT["eduLi:" + idx] !== undefined) {
          li.innerHTML = SNAPSHOT["eduLi:" + idx];
        }
      }
    );

    document.title = SNAPSHOT.__docTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", SNAPSHOT.__metaDesc);

    document.documentElement.lang = "cs";
    if (navEl && SNAPSHOT.nav_aria_main) {
      navEl.setAttribute("aria-label", SNAPSHOT.nav_aria_main);
    }
    var navToggle = document.querySelector(".site-nav__toggle");
    if (navToggle && SNAPSHOT.nav_menu_toggle_aria) {
      navToggle.setAttribute("aria-label", SNAPSHOT.nav_menu_toggle_aria);
    }
  }

  function captureEduLis() {
    if (eduLisCaptured) return;
    eduLisCaptured = true;
    document
      .querySelectorAll("#vzdelani .edu-list li[data-i18n-edu-li]")
      .forEach(function (li) {
        var idx = li.getAttribute("data-i18n-edu-li");
        SNAPSHOT["eduLi:" + idx] = li.innerHTML;
      });
  }

  function updateLangSwitch(lang) {
    var group = document.querySelector(".lang-switch");
    if (!group) return;
    group.setAttribute("lang", lang);
    var toggleBtn = group.querySelector("[data-lang-toggle]");
    if (toggleBtn) {
      var deOn = lang === "de";
      toggleBtn.classList.toggle("lang-switch__btn--active", deOn);
      toggleBtn.setAttribute("aria-pressed", deOn ? "true" : "false");
    }
    if (lang === "de" && STRINGS_DE.lang_aria) {
      group.setAttribute("aria-label", STRINGS_DE.lang_aria);
    } else if (SNAPSHOT.lang_aria_cs) {
      group.setAttribute("aria-label", SNAPSHOT.lang_aria_cs);
    }
  }

  function applyLang(lang) {
    capture();
    captureEduLis();

    if (lang === "de") {
      setTextsDe();
    } else {
      setTextsCs();
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    updateLangSwitch(lang);

    if (typeof window.rebindTopicTags === "function") {
      window.rebindTopicTags();
    }
  }

  function initLangSwitch() {
    var btn = document.querySelector("[data-lang-toggle]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var cur =
        document.documentElement.getAttribute("lang") === "de" ? "de" : "cs";
      applyLang(cur === "de" ? "cs" : "de");
    });
  }

  /** Např. `?lang=de` / `?lang=cs` — má přednost před localStorage (hreflang / sdílené odkazy). */
  function getLangFromSearch() {
    try {
      var q = new URLSearchParams(window.location.search || "");
      var v = (q.get("lang") || "").trim().toLowerCase();
      if (v === "de") return "de";
      if (v === "cs") return "cs";
    } catch (e) {}
    return null;
  }

  function init() {
    capture();
    captureEduLis();
    initLangSwitch();

    var fromUrl = getLangFromSearch();
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}

    if (fromUrl !== null) {
      applyLang(fromUrl);
    } else if (saved === "de") {
      applyLang("de");
    } else {
      updateLangSwitch("cs");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
