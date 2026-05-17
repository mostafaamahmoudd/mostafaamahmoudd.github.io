/**
 * theme.js
 * ─────────────────────────────────────────────────────────────
 * Applies the correct color theme on page load (respecting the
 * system preference) and wires the manual toggle button.
 *
 * Uses a plain variable for state — no localStorage (blocked
 * in sandboxed iframes).
 */

(function () {
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");

  function safeGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      /* ignore */
    }
  }

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  var stored = safeGet("theme");
  var theme = stored === "dark" || stored === "light" ? stored : systemTheme();

  function sunIcon() {
    return (
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="5"></circle>' +
      '<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42' +
      'M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>' +
      "</svg>"
    );
  }

  function moonIcon() {
    return (
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>' +
      "</svg>"
    );
  }

  function applyTheme(mode) {
    theme = mode;
    root.setAttribute("data-theme", mode);
    safeSet("theme", mode);
    if (!toggle) return;
    toggle.setAttribute(
      "aria-label",
      "Switch to " + (mode === "dark" ? "light" : "dark") + " mode",
    );
    toggle.innerHTML = mode === "dark" ? sunIcon() : moonIcon();
  }

  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(theme === "dark" ? "light" : "dark");
    });
  }

  // Optional: keep theme in sync if user hasn't chosen a preference yet.
  if (!stored) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) {
      mq.addEventListener("change", function () {
        applyTheme(systemTheme());
      });
    } else if (mq.addListener) {
      mq.addListener(function () {
        applyTheme(systemTheme());
      });
    }
  }
})();
