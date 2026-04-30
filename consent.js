(function () {
  "use strict";

  var STORAGE_KEY = "detskapsychoterapie-consent";

  function hideBanner(root) {
    if (!root) return;
    root.hidden = true;
    root.setAttribute("aria-hidden", "true");
  }

  function showBanner(root) {
    if (!root) return;
    root.hidden = false;
    root.removeAttribute("aria-hidden");
  }

  function persist(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
  }

  function acceptAll(root) {
    if (typeof gtag === "function") {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
    persist("all");
    hideBanner(root);
  }

  function essentialOnly(root) {
    persist("essential");
    hideBanner(root);
  }

  function init() {
    var root = document.getElementById("cookie-banner");
    if (!root) return;

    var choice = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}

    if (choice === "all" || choice === "essential") {
      hideBanner(root);
      return;
    }

    showBanner(root);

    var acceptBtn = root.querySelector("[data-consent-accept]");
    var essentialBtn = root.querySelector("[data-consent-essential]");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        acceptAll(root);
      });
    }
    if (essentialBtn) {
      essentialBtn.addEventListener("click", function () {
        essentialOnly(root);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
