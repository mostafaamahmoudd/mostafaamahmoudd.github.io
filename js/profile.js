/**
 * profile.js
 * ─────────────────────────────────────────────────────────────
 * Single place to update personal contact details.
 * Keeps page contact links consistent if details change later.
 */

(function () {
  var profile = {
    role: "Backend Developer",
    email: "mostafaa.mahmoudd550@gmail.com",
    githubUrl: "https://github.com/mostafaamahmoudd",
    linkedinUrl: "https://linkedin.com/in/mostafaamahmoudd",
    mediumUrl: "https://medium.com/@mostafaamahmoudd",
  };

  function setLink(selector, href, label) {
    var el = document.querySelector(selector);
    if (!el) return;
    if (!href) return;
    el.classList.remove("is-disabled");
    el.removeAttribute("aria-disabled");
    el.setAttribute("href", href);
    if (!label) return;
    var labelEl = el.querySelector("span");
    if (labelEl) {
      labelEl.textContent = label;
    } else {
      el.textContent = label;
    }
  }

  function main() {
    if (profile.role) {
      var roleEl = document.querySelector("[data-profile-role]");
      if (roleEl) roleEl.textContent = profile.role;
    }

    if (profile.email) setLink("[data-contact-email]", "mailto:" + profile.email);
    if (profile.githubUrl) setLink("[data-contact-github]", profile.githubUrl);
    if (profile.linkedinUrl)
      setLink("[data-contact-linkedin]", profile.linkedinUrl);
    if (profile.mediumUrl) setLink("[data-contact-medium]", profile.mediumUrl);

    if (profile.email)
      setLink(
        "[data-contact-email-text]",
        "mailto:" + profile.email,
        profile.email
      );
    if (profile.githubUrl)
      setLink(
        "[data-contact-github-text]",
        profile.githubUrl,
        profile.githubUrl.replace(/^https?:\/\//, "")
      );
    if (profile.linkedinUrl)
      setLink(
        "[data-contact-linkedin-text]",
        profile.linkedinUrl,
        profile.linkedinUrl.replace(/^https?:\/\//, "")
      );
    if (profile.mediumUrl)
      setLink(
        "[data-contact-medium-text]",
        profile.mediumUrl,
        profile.mediumUrl.replace(/^https?:\/\//, "")
      );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
