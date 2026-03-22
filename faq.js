(function () {
  "use strict";

  document.querySelectorAll(".faq-item__trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var id = btn.getAttribute("aria-controls");
      var panel = id ? document.getElementById(id) : null;
      if (!panel) return;
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      panel.hidden = expanded;
    });
  });

  if (location.hash === "#dospivajici") {
    var article = document.getElementById("dospivajici");
    if (article) {
      var t = article.querySelector(".faq-item__trigger");
      var p = article.querySelector(".faq-item__panel");
      if (t && p) {
        t.setAttribute("aria-expanded", "true");
        p.hidden = false;
      }
    }
  }
})();
