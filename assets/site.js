/* Anchor Locator site script. Small: mobile nav toggle and footer year. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
  var y = document.querySelectorAll("[data-year]");
  for (var j = 0; j < y.length; j++) y[j].textContent = new Date().getFullYear();
})();
