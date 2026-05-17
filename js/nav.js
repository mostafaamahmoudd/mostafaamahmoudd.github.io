/**
 * nav.js
 * ─────────────────────────────────────────────────────────────
 * Handles:
 *   1. Sticky header "scrolled" class → border + shadow appear.
 *   2. Mobile hamburger menu open/close.
 *   3. Active nav link highlight via IntersectionObserver.
 */

(function () {
  var header = document.querySelector(".site-header");
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var navMenu = document.querySelector("[data-nav-menu]");
  var navLinks = document.querySelectorAll(".nav-links a");
  var sections = document.querySelectorAll("main section[id]");
  var navRoot = menuBtn ? menuBtn.closest("nav") : null;

  /* 1 — Header shadow on scroll */
  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        header.classList.toggle("scrolled", window.scrollY > 16);
      },
      { passive: true },
    );
  }

  /* 2 — Mobile menu */
  function closeMenu() {
    if (!navMenu || !menuBtn) return;
    navMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!navRoot) return;
      if (!navMenu.classList.contains("open")) return;
      if (navRoot.contains(event.target)) return;
      closeMenu();
    });
  }

  /* 3 — Active nav link */
  if (!("IntersectionObserver" in window)) return;
  if (!sections.length || !navLinks.length) return;

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute("id");
        navLinks.forEach(function (link) {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + id,
          );
        });
      });
    },
    { rootMargin: "-35% 0px -50% 0px", threshold: 0.05 },
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });
})();
