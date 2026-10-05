// Quiet reveal-on-scroll. Content stays visible if JS is off or the
// observer never fires; reduced-motion is respected via CSS.
(function () {
  document.documentElement.classList.add("js");
  var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  var revealAll = function () {
    els.forEach(function (el) { el.classList.add("in"); });
  };

  if (!("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  els.forEach(function (el) { io.observe(el); });

  // Safety net: never leave content hidden.
  setTimeout(revealAll, 3000);
})();
