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
})();
