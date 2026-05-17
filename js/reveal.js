/**
 * reveal.js
 * ─────────────────────────────────────────────────────────────
 * Scroll-triggered reveal for any element with [data-reveal].
 *
 * Adds .is-visible once the element enters the viewport.
 * The CSS transition in animations.css handles the visual effect.
 *
 * Falls back gracefully: if IntersectionObserver is unsupported,
 * all elements are shown immediately without animation.
 */

(function () {
  var items = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // fire once only
        }
      });
    },
    { threshold: 0.14 },
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
})();
