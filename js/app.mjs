import {
  articles,
  journey,
  profile,
  projects,
  skillGroups,
  workingStyle,
} from "./content.mjs";

const app = document.querySelector("#app");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const icons = {
  arrow:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  menu:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function chipList(items, hotItems = []) {
  return items
    .map((item) => {
      const hotClass = hotItems.includes(item) ? " is-hot" : "";
      return `<span class="chip${hotClass}">${escapeHtml(item)}</span>`;
    })
    .join("");
}

function socialLinks() {
  return [
    ["GitHub", profile.social.github],
    ["LinkedIn", profile.social.linkedin],
    ["Medium", profile.social.medium],
    ["Email", `mailto:${profile.email}`],
  ]
    .map(
      ([label, href]) =>
        `<a href="${escapeHtml(href)}" ${
          href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""
        }>${escapeHtml(label)}</a>`,
    )
    .join("");
}

function renderHeader() {
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Stack", "#stack"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return `
    <header class="site-header" data-site-header>
      <div class="container nav-shell">
        <a class="brand" href="#home" aria-label="Go to home">
          <span class="brand-sigil" aria-hidden="true"></span>
          <span class="brand-text">
            <strong>${escapeHtml(profile.name)}</strong>
            <span>${escapeHtml(profile.role)}</span>
          </span>
        </a>
        <nav class="nav-menu" id="site-menu" aria-label="Primary" data-nav-menu>
          <ul class="nav-links" role="list">
            ${links
              .map(
                ([label, href]) =>
                  `<li><a href="${href}" data-nav-link>${escapeHtml(label)}</a></li>`,
              )
              .join("")}
          </ul>
        </nav>
        <div class="nav-actions">
          <a class="btn btn-secondary nav-cta" href="mailto:${escapeHtml(profile.email)}">Contact</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" data-menu-toggle>
            <span class="sr-only">Toggle navigation</span>${icons.menu}
          </button>
        </div>
      </div>
    </header>`;
}

function renderHero() {
  return `
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="wide-container hero-grid">
        <div class="hero-copy" data-reveal>
          <p class="kicker">&gt; whoami</p>
          <h1 class="hero-title" id="hero-title">Mostafa <span>Mahmoud</span></h1>
          <p class="hero-subtitle">Backend systems engineered with clean architecture and production discipline.</p>
          <p class="hero-lead">${escapeHtml(profile.intro)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#projects">View projects ${icons.arrow}</a>
            <a class="btn btn-secondary" href="mailto:${escapeHtml(profile.email)}">Start a conversation</a>
          </div>
          <div class="social-row" aria-label="Social links">${socialLinks()}</div>
        </div>
        <div class="hero-panel" aria-label="Profile atmosphere" data-reveal>
          <div class="radial-eye" aria-hidden="true"></div>
          <div class="terminal-card">
            <div class="terminal-dots" aria-hidden="true"><span></span><span></span><span></span></div>
            <p class="code-line">&gt; developer.name</p>
            <p class="code-line"><strong>"${escapeHtml(profile.name)}"</strong></p>
            <p class="code-line">&gt; stack.focus</p>
            <p class="code-line"><strong>"${escapeHtml(profile.focus)}"</strong></p>
            <p class="code-line">&gt; current.mode</p>
            <p class="code-line"><strong>"building reliable backend flows"</strong></p>
          </div>
          <figure class="portrait-card">
            <img src="${escapeHtml(profile.portrait)}" alt="${escapeHtml(profile.name)}" width="960" height="1280" fetchpriority="high" decoding="async" />
          </figure>
        </div>
      </div>
    </section>`;
}

function renderAbout() {
  return `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container about-grid">
        <div class="about-copy" data-reveal>
          <p class="eyebrow">About</p>
          <h2 class="section-title" id="about-title">Backend development with product awareness and engineering discipline.</h2>
          ${profile.about.map((paragraph) => `<p class="section-copy">${escapeHtml(paragraph)}</p>`).join("")}
        </div>
        <aside class="glass-card" data-reveal>
          <p class="eyebrow">Operating pattern</p>
          <ul class="style-list">
            ${workingStyle
              .map(
                (item, index) => `
                  <li>
                    <span class="index">${String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong>${escapeHtml(item.label)}</strong><br />
                      <span class="muted">${escapeHtml(item.description)}</span>
                    </span>
                  </li>`,
              )
              .join("")}
          </ul>
        </aside>
      </div>
    </section>`;
}

function renderSkills() {
  return `
    <section class="section" id="stack" aria-labelledby="stack-title">
      <div class="container">
        <div class="section-header" data-reveal>
          <p class="eyebrow">Stack</p>
          <h2 class="section-title" id="stack-title">Backend capabilities built around systems, APIs, and maintainability.</h2>
          <p class="section-copy">The focus is not just on tools, but on using them to build reliable, structured, and scalable backend applications.</p>
        </div>
        <div class="skills-grid" data-stagger>
          ${skillGroups
            .map(
              (group) => `
                <article class="skill-card" data-reveal data-tilt>
                  <div>
                    <p class="eyebrow">${escapeHtml(group.label)}</p>
                    <h3>${escapeHtml(group.title)}</h3>
                    <p class="muted">${escapeHtml(group.description)}</p>
                  </div>
                  <div class="chip-row">${chipList(group.items, ["PHP", "Laravel", "REST APIs", "MySQL"])}</div>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderJourney() {
  return `
    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="container">
        <div class="section-header" data-reveal>
          <p class="eyebrow">Experience</p>
          <h2 class="section-title" id="experience-title">A practical path through Laravel APIs, production workflows, and system design.</h2>
          <p class="section-copy">The repository does not include dated employment entries, so this section preserves the existing journey narrative without inventing companies or years.</p>
        </div>
        <div class="timeline" data-stagger>
          ${journey
            .map(
              (item) => `
                <article class="timeline-card" data-reveal>
                  <div class="timeline-meta">
                    <span>${escapeHtml(item.label)}</span>
                    <span>${escapeHtml(item.meta)}</span>
                  </div>
                  <h3>${escapeHtml(item.title)}</h3>
                  <ul>
                    ${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
                  </ul>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderProjects() {
  const feature = projects[0];
  return `
    <section class="section" id="projects" aria-labelledby="projects-title">
      <div class="wide-container projects-layout">
        <div class="project-feature" data-reveal>
          <div class="glass-card">
            <span class="cloud-line" aria-hidden="true"></span>
            <p class="eyebrow">Featured systems</p>
            <h2 class="section-title" id="projects-title">Production backend work, organized for fast scanning.</h2>
            <p class="section-copy">${escapeHtml(feature.summary)}</p>
            <p class="project-stack">${escapeHtml(projects.length)} projects · Laravel APIs · Admin workflows · Mobile integrations</p>
          </div>
        </div>
        <div class="project-grid" data-stagger>
          ${projects
            .map(
              (project, index) => `
                <article class="project-card" id="project-card-${escapeHtml(project.slug)}" data-reveal data-tilt>
                  <div class="project-meta">
                    <span>Project ${String(index + 1).padStart(2, "0")}</span>
                    <span>${escapeHtml(project.type)}</span>
                  </div>
                  <h3>${escapeHtml(project.title)}</h3>
                  <p class="muted">${escapeHtml(project.summary)}</p>
                  <div class="chip-row">${chipList(project.stack, ["Laravel", "PHP", "REST APIs"])}</div>
                  <footer>
                    <button class="btn btn-primary" type="button" data-open-project="${escapeHtml(project.slug)}">Details ${icons.arrow}</button>
                    <a class="btn btn-secondary" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.liveLabel)}</a>
                  </footer>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderWriting() {
  return `
    <section class="section" id="writing" aria-labelledby="writing-title">
      <div class="container writing-grid">
        <div class="section-header" data-reveal>
          <p class="eyebrow">Writing</p>
          <h2 class="section-title" id="writing-title">Practical notes from backend work.</h2>
          <p class="section-copy">A small writing section is included because the existing repository links to one real Laravel article.</p>
        </div>
        <div class="article-grid">
          ${articles
            .map(
              (article) => `
                <article class="article-card" data-reveal>
                  <div class="project-meta">
                    <span>${escapeHtml(article.category)}</span>
                    <span>${escapeHtml(article.source)}</span>
                  </div>
                  <h3>${escapeHtml(article.title)}</h3>
                  <p class="muted">${escapeHtml(article.summary)}</p>
                  <footer>
                    <button class="btn btn-primary" type="button" data-open-article="${escapeHtml(article.slug)}">Article focus ${icons.arrow}</button>
                    <a class="btn btn-secondary" href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer">Read on Medium</a>
                  </footer>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderContact() {
  const contacts = [
    ["Email", `mailto:${profile.email}`, profile.email],
    ["GitHub", profile.social.github, "github.com/mostafaamahmoudd"],
    ["LinkedIn", profile.social.linkedin, "linkedin.com/in/mostafaamahmoudd"],
    ["Medium", profile.social.medium, "medium.com/@mostafaamahmoudd"],
  ];

  return `
    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div class="contact-panel" data-reveal>
          <p class="eyebrow">Contact</p>
          <h2 class="section-title" id="contact-title">Break the loop. Build the system.</h2>
          <p class="section-copy">${escapeHtml(profile.availability)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="mailto:${escapeHtml(profile.email)}">Email Mostafa ${icons.arrow}</a>
            <a class="btn btn-secondary" href="#projects">Review projects</a>
          </div>
        </div>
        <aside class="glass-card" data-reveal>
          <div class="contact-links" aria-label="Contact links">
            ${contacts
              .map(
                ([label, href, text]) => `
                  <a class="contact-link" href="${escapeHtml(href)}" ${
                    href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""
                  }>
                    <strong>${escapeHtml(label)}</strong>
                    <span>${escapeHtml(text)}</span>
                  </a>`,
              )
              .join("")}
          </div>
        </aside>
      </div>
    </section>`;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <span>${escapeHtml(profile.name)} · ${escapeHtml(profile.role)}</span>
        <span>PHP · Laravel · REST APIs</span>
      </div>
    </footer>`;
}

function renderDialog() {
  return `
    <dialog class="detail-dialog" data-detail-dialog aria-labelledby="detail-title">
      <div class="detail-surface">
        <button class="detail-close" type="button" data-close-dialog aria-label="Close details">${icons.close}</button>
        <div data-detail-content></div>
      </div>
    </dialog>`;
}

function renderApp() {
  app.innerHTML = `
    <div class="site-shell">
      ${renderHeader()}
      <main class="main-stage" id="main-content">
        ${renderHero()}
        ${renderAbout()}
        ${renderSkills()}
        ${renderJourney()}
        ${renderProjects()}
        ${renderWriting()}
        ${renderContact()}
      </main>
      ${renderFooter()}
      ${renderDialog()}
    </div>`;
}

function detailTemplate(item, kind) {
  const isProject = kind === "project";
  const title = item.title;
  const eyebrow = isProject ? item.type : `${item.category} · ${item.source}`;
  const bodyText = isProject ? item.scope : item.focus;
  const points = isProject ? item.responsibilities : item.points;
  const stack = isProject ? item.stack : [item.category, item.source];
  const href = isProject ? item.liveUrl : item.url;
  const label = isProject ? item.liveLabel : "Read on Medium";

  return `
    <div class="detail-header">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h2 id="detail-title">${escapeHtml(title)}</h2>
      <p class="section-copy">${escapeHtml(item.summary)}</p>
    </div>
    <div class="detail-body">
      <div class="detail-grid">
        <div>
          <h3>${isProject ? "Project scope" : "Article focus"}</h3>
          <p class="muted">${escapeHtml(bodyText)}</p>
          <ul>${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
        </div>
        <aside class="detail-stack">
          <h3>${isProject ? "Stack" : "Source"}</h3>
          <div class="chip-row">${chipList(stack, ["Laravel", "PHP", "REST APIs"])}</div>
          <a class="btn btn-primary" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ${icons.arrow}</a>
        </aside>
      </div>
    </div>`;
}

function setupReveal() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupNav() {
  const header = document.querySelector("[data-site-header]");
  const menu = document.querySelector("[data-nav-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];
  const sections = [...document.querySelectorAll("main section[id]")];

  function closeMenu() {
    menu?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }

  window.addEventListener(
    "scroll",
    () => header?.classList.toggle("is-scrolled", window.scrollY > 18),
    { passive: true },
  );

  toggle?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-38% 0px -48% 0px", threshold: [0.08, 0.18, 0.3] },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupDetailRoutes() {
  const dialog = document.querySelector("[data-detail-dialog]");
  const content = document.querySelector("[data-detail-content]");
  const closeButton = document.querySelector("[data-close-dialog]");
  let lastTrigger = null;

  function closeDialog(updateHash = true) {
    if (!dialog.open) return;
    dialog.close();
    document.body.classList.remove("is-locked");
    if (updateHash && location.hash.startsWith("#project/")) history.pushState(null, "", "#projects");
    if (updateHash && location.hash.startsWith("#article/")) history.pushState(null, "", "#writing");
    lastTrigger?.focus?.();
  }

  function openDetail(kind, slug, trigger = null) {
    const collection = kind === "project" ? projects : articles;
    const item = collection.find((entry) => entry.slug === slug);
    if (!item) {
      renderNotFound();
      return;
    }

    lastTrigger = trigger;
    content.innerHTML = detailTemplate(item, kind);
    document.body.classList.add("is-locked");
    if (!dialog.open) dialog.showModal();
    closeButton.focus();
  }

  document.addEventListener("click", (event) => {
    const projectTrigger = event.target.closest("[data-open-project]");
    const articleTrigger = event.target.closest("[data-open-article]");

    if (projectTrigger) {
      const slug = projectTrigger.getAttribute("data-open-project");
      history.pushState(null, "", `#project/${slug}`);
      openDetail("project", slug, projectTrigger);
    }

    if (articleTrigger) {
      const slug = articleTrigger.getAttribute("data-open-article");
      history.pushState(null, "", `#article/${slug}`);
      openDetail("article", slug, articleTrigger);
    }
  });

  closeButton?.addEventListener("click", () => closeDialog());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });

  function handleHash() {
    const hash = decodeURIComponent(location.hash);
    if (hash.startsWith("#project/")) openDetail("project", hash.replace("#project/", ""));
    if (hash.startsWith("#article/")) openDetail("article", hash.replace("#article/", ""));
  }

  window.addEventListener("hashchange", handleHash);
  handleHash();
}

function setupSectionHashScrolling() {
  function scrollToSectionHash() {
    const hash = decodeURIComponent(location.hash || "");
    if (!hash || hash.startsWith("#project/") || hash.startsWith("#article/")) return;

    const target = document.querySelector(hash);
    if (!target) return;

    window.requestAnimationFrame(() => {
      target.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      });
    });
  }

  window.addEventListener("hashchange", scrollToSectionHash);
  scrollToSectionHash();
}

function renderNotFound() {
  app.innerHTML = `
    <main class="not-found">
      <section class="container not-found-card glass-card">
        <p class="eyebrow">404 · Genjutsu break</p>
        <h1 class="section-title">This route dissolved into shadow.</h1>
        <p class="section-copy">The portfolio content is still here. Return to the main path and keep moving.</p>
        <p><a class="btn btn-primary" href="index.html#home">Return home ${icons.arrow}</a></p>
      </section>
    </main>`;
}

function setupPointerEffects() {
  const aura = document.querySelector(".cursor-aura");
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!aura || prefersReducedMotion.matches || !supportsFinePointer) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      aura.classList.add("is-active");
      aura.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      document.querySelectorAll(".glass-card, .project-card, .skill-card, .timeline-card, .article-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
          card.style.setProperty("--mx", `${x}%`);
          card.style.setProperty("--my", `${y}%`);
        }
      });
    },
    { passive: true },
  );

  document.addEventListener("pointerover", (event) => {
    aura.classList.toggle("is-armed", Boolean(event.target.closest("a, button")));
  });
}

function setupTilt() {
  if (prefersReducedMotion.matches) return;
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!supportsFinePointer) return;

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-3px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  window.setTimeout(() => loader?.classList.add("is-hidden"), prefersReducedMotion.matches ? 0 : 520);
}

renderApp();
setupReveal();
setupNav();
setupDetailRoutes();
setupSectionHashScrolling();
setupPointerEffects();
setupTilt();
hideLoader();
