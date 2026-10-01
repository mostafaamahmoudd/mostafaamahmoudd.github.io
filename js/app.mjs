import {
  articles,
  education,
  journey,
  profile,
  projects,
  resume,
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

const crowVariants = ["wing-wide", "wing-cut", "wing-glide", "wing-split"];

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
    ["X", profile.social.x],
    ["Medium", profile.social.medium],
    ["Email", `mailto:${profile.email}`],
  ]
    .filter(([, href]) => Boolean(href))
    .map(
      ([label, href]) =>
        `<a href="${escapeHtml(href)}" ${
          href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""
        }>${escapeHtml(label)}</a>`,
    )
    .join("");
}

function crowMarkup(count, prefix = "crow") {
  return Array.from({ length: count }, (_, index) => {
    const variant = crowVariants[index % crowVariants.length];
    const n = index + 1;
    const style = [
      `--i:${index}`,
      `--crow-w:${30 + n * 2.25}px`,
      `--crow-h:${15 + n * 0.9}px`,
      `--crow-blur:${Math.min(1.6, n * 0.035)}px`,
      `--hero-x:${(n - 12) * 2}px`,
      `--hero-y:${30 + n * 1.05}%`,
      `--hero-rot-start:${-28 + n * 8}deg`,
      `--hero-rot-mid:${-44 + n * 11}deg`,
      `--hero-rot-end:${-58 + n * 14}deg`,
      `--hero-scale-start:${(0.54 + n * 0.038).toFixed(3)}`,
      `--hero-scale-mid:${(0.78 + n * 0.058).toFixed(3)}`,
      `--hero-scale-end:${(0.96 + n * 0.074).toFixed(3)}`,
      `--hero-mid-x:${(-24 - n * 0.7).toFixed(2)}vw`,
      `--hero-mid-y:${(-9 + n * 0.9).toFixed(2)}vh`,
      `--hero-end-x:${(-72 + n * 2.4).toFixed(2)}vw`,
      `--hero-end-y:${(-24 + n * 1.75).toFixed(2)}vh`,
      `--hero-opacity-a:${Math.min(0.92, 0.58 + n * 0.018).toFixed(3)}`,
      `--hero-opacity-b:${Math.min(0.9, 0.66 + n * 0.012).toFixed(3)}`,
      `--hero-delay:${1960 + n * 23}ms`,
      `--section-right:${(-8 + n * 4).toFixed(2)}vw`,
      `--section-top:${8 + n * 7}%`,
      `--section-rot:${-18 + n * 4}deg`,
      `--section-delay:${n * 80}ms`,
      `--contact-left:${12 + n * 9}%`,
      `--contact-rot:${-11 + n * 7}deg`,
      `--contact-scale:${(0.58 + n * 0.08).toFixed(3)}`,
      `--contact-delay:${n * 360}ms`,
      `--dialog-top:${34 + n * 9}%`,
      `--dialog-left:${26 + n * 17}%`,
      `--dialog-delay:${n * 70}ms`,
    ].join(";");
    return `<span class="${prefix} ${variant}" style="${style}" aria-hidden="true"></span>`;
  }).join("");
}

function renderMangekyoEye(extraClass = "") {
  return `
    <svg class="mangekyo-eye ${extraClass}" viewBox="0 0 240 240" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="mangekyoIris" cx="48%" cy="44%" r="58%">
          <stop offset="0%" stop-color="#d21a2b" stop-opacity=".92"/>
          <stop offset="46%" stop-color="#95111c" stop-opacity=".78"/>
          <stop offset="72%" stop-color="#240407" stop-opacity=".92"/>
          <stop offset="100%" stop-color="#050506" stop-opacity="1"/>
        </radialGradient>
        <filter id="mangekyoGrain">
          <feTurbulence type="fractalNoise" baseFrequency=".92" numOctaves="2" seed="7"/>
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 .18"/>
          </feComponentTransfer>
        </filter>
      </defs>
      <circle class="eye-iris" cx="120" cy="120" r="104"/>
      <circle class="eye-ring eye-ring-outer" cx="120" cy="120" r="94"/>
      <circle class="eye-ring eye-ring-inner" cx="120" cy="120" r="34"/>
      <circle class="eye-noise" cx="120" cy="120" r="93"/>
      <g class="mangekyo-hooks">
        <path class="mangekyo-hook mangekyo-hook-one" d="M120 30 C149 53 161 80 152 109 C145 132 128 145 105 150 C126 130 125 108 109 91 C96 78 92 58 120 30Z"/>
        <path class="mangekyo-hook mangekyo-hook-two" d="M120 30 C149 53 161 80 152 109 C145 132 128 145 105 150 C126 130 125 108 109 91 C96 78 92 58 120 30Z"/>
        <path class="mangekyo-hook mangekyo-hook-three" d="M120 30 C149 53 161 80 152 109 C145 132 128 145 105 150 C126 130 125 108 109 91 C96 78 92 58 120 30Z"/>
      </g>
      <circle class="eye-pupil" cx="120" cy="120" r="24"/>
      <circle class="eye-pupil-cut" cx="120" cy="120" r="10"/>
    </svg>`;
}

function renderItachiSilhouette() {
  return `
    <svg class="shinobi-silhouette itachi-silhouette" data-shinobi viewBox="0 0 150 260" aria-hidden="true" focusable="false">
      <path class="itachi-shadow" d="M35 238 C53 224 96 224 118 238 L126 252 L28 252Z"/>
      <path class="itachi-ponytail" d="M82 30 C105 43 111 76 101 105 C96 87 88 75 76 66 C67 58 68 40 82 30Z"/>
      <path class="itachi-hair-back" d="M60 20 C39 36 36 75 46 103 C54 89 62 80 74 72 C87 62 82 33 60 20Z"/>
      <path class="itachi-head" d="M55 29 C61 18 78 18 86 29 C94 42 89 60 76 66 C62 64 52 45 55 29Z"/>
      <path class="itachi-headband" d="M52 38 C61 34 78 33 89 38 L88 44 C75 41 63 41 53 45Z"/>
      <path class="akatsuki-collar" d="M35 92 C39 61 55 53 73 77 C91 52 108 62 114 92 C101 84 90 88 78 103 C66 88 50 83 35 92Z"/>
      <path class="itachi-cloak" d="M39 84 C45 72 57 68 73 76 C89 69 103 73 110 85 C124 130 127 188 119 236 C99 225 88 204 75 174 C61 205 48 226 28 237 C20 188 24 128 39 84Z"/>
      <path class="itachi-left-sleeve" d="M38 96 C22 125 17 154 21 188 C34 181 42 165 45 139 C48 119 48 105 38 96Z"/>
      <path class="itachi-right-sleeve" d="M109 96 C126 124 133 153 129 185 C114 181 105 164 102 139 C99 118 99 105 109 96Z"/>
      <path class="itachi-cloak-slit" d="M75 102 C82 137 83 180 75 232 C67 181 68 137 75 102Z"/>
      <path class="itachi-left-leg" d="M62 220 C56 232 50 240 39 246 C36 242 37 236 45 230 C51 225 55 219 59 210Z"/>
      <path class="itachi-right-leg" d="M88 220 C95 232 102 240 113 246 C116 242 114 236 106 230 C99 225 96 219 91 210Z"/>
      <path class="itachi-left-foot" d="M32 246 C42 240 52 240 61 248 C52 253 41 254 31 251Z"/>
      <path class="itachi-right-foot" d="M90 248 C100 240 112 241 122 247 C112 253 100 254 90 248Z"/>
      <circle class="crimson-eye crimson-eye-left" cx="66" cy="46" r="1.8"/>
      <circle class="crimson-eye crimson-eye-right" cx="80" cy="46" r="1.8"/>
    </svg>`;
}

function renderHeader() {
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Stack", "#stack"],
    ["Writing", "#writing"],
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
      <div class="hero-cinematic" data-hero-cinematic aria-hidden="true">
        <div class="hero-night"></div>
        <div class="eclipse-moon" data-moon></div>
        <div class="moon-haze"></div>
        <div class="roofline"></div>
        <div class="pole-silhouette"></div>
        ${renderItachiSilhouette()}
        <div class="crow-swarm" data-crow-swarm>${crowMarkup(24, "hero-crow")}</div>
        ${renderMangekyoEye("hero-eye")}
      </div>
      <div class="wide-container hero-grid">
        <div class="hero-copy" data-hero-copy data-reveal>
          <p class="kicker">&gt; whoami / backend</p>
          <h1 class="hero-title" id="hero-title">${escapeHtml(profile.name.split(" ")[0])} <span>${escapeHtml(profile.name.split(" ").slice(1).join(" "))}</span></h1>
          <p class="hero-role">${escapeHtml(profile.role)}</p>
          <p class="hero-subtitle">Building reliable Laravel APIs, business systems, and backend architecture.</p>
          <p class="hero-lead">Currently building EasyLink CRM at DrCorp as the sole backend engineer behind API architecture, workflows, and automated testing.</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#projects" data-hero-activate>View Work ${icons.arrow}</a>
            <a class="btn btn-secondary" href="${escapeHtml(resume.path)}" target="_blank" rel="noopener noreferrer" aria-label="View Mustafa Mahmoud CV PDF">View CV</a>
            <a class="btn btn-ghost" href="mailto:${escapeHtml(profile.email)}">Contact</a>
          </div>
          <div class="social-rail" aria-label="Social links">${socialLinks()}</div>
        </div>
        <div class="hero-system" data-reveal>
          <div class="terminal-card">
            <div class="terminal-dots" aria-hidden="true"><span></span><span></span><span></span></div>
            <p class="code-line">&gt; identity</p>
            <p class="code-line"><strong>"${escapeHtml(profile.name)}"</strong></p>
            <p class="code-line">&gt; current.role</p>
            <p class="code-line"><strong>"DrCorp / Back-End Engineer"</strong></p>
            <p class="code-line">&gt; focus</p>
            <p class="code-line"><strong>"${escapeHtml(profile.focus)}"</strong></p>
          </div>
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
          <p class="eyebrow">Current signal</p>
          <ul class="style-list">
            <li>
              <span class="index">CV</span>
              <span>
                <strong>DrCorp · Back-End Engineer</strong><br />
                <span class="muted">Jan 2026 – Present · Mansoura, Egypt</span>
              </span>
            </li>
            <li>
              <span class="index">ED</span>
              <span>
                <strong>${escapeHtml(education.school)}</strong><br />
                <span class="muted">${escapeHtml(education.degree)} · ${escapeHtml(education.period)} · Graduation project ${escapeHtml(education.graduationProject)}</span>
              </span>
            </li>
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
        <div class="skill-constellation" aria-hidden="true"></div>
        <div class="skills-grid" data-stagger>
          ${skillGroups
            .map(
              (group) => `
                <article class="skill-card" data-reveal data-tilt>
                  <span class="skill-node" aria-hidden="true"></span>
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
      <div class="tsukuyomi-field" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header" data-reveal>
          <p class="eyebrow">Experience</p>
          <h2 class="section-title" id="experience-title">Professional backend roles across CRM, mobile APIs, scheduling, and service platforms.</h2>
          <p class="section-copy">Dates and titles are synced from the local CV. Overlapping roles are preserved as factual experience.</p>
        </div>
        <div class="timeline" data-stagger>
          ${journey
            .map(
              (item) => `
                <article class="timeline-card" data-reveal>
                  <span class="timeline-node" aria-hidden="true"></span>
                  <div class="timeline-meta">
                    <span>${escapeHtml(item.period)}</span>
                    <span>${escapeHtml(item.location)}</span>
                  </div>
                  <p class="eyebrow">${escapeHtml(item.label)} · ${escapeHtml(item.meta)}</p>
                  <h3>${escapeHtml(item.company)} · ${escapeHtml(item.title)}</h3>
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
      <div class="section-crows" aria-hidden="true">${crowMarkup(5, "section-crow")}</div>
      <div class="wide-container projects-layout">
        <div class="project-feature" data-reveal>
          <div class="glass-card">
            <span class="cloud-line" aria-hidden="true"></span>
            <p class="eyebrow">Featured backend work</p>
            <h2 class="section-title" id="projects-title">${escapeHtml(feature.title)}</h2>
            <p class="section-copy">${escapeHtml(feature.summary)}</p>
            <div class="project-metrics">
              <span><strong>${escapeHtml(feature.metrics.endpoints)}</strong> APIs</span>
              <span><strong>${escapeHtml(feature.metrics.tests)}</strong> tests</span>
              <span><strong>${escapeHtml(feature.metrics.pipelineStages)}</strong> stages</span>
            </div>
            <p class="project-stack">${escapeHtml(feature.role)} · Internal CRM · No public demo</p>
          </div>
        </div>
        <div class="project-grid" data-stagger>
          ${projects
            .map(
              (project, index) => `
                <article class="project-card" id="project-card-${escapeHtml(project.slug)}" data-reveal data-tilt>
                  <span class="card-crow wing-glide" aria-hidden="true"></span>
                  <div class="project-meta">
                    <span>Project ${String(index + 1).padStart(2, "0")}</span>
                    <span>${escapeHtml(project.type)}</span>
                  </div>
                  <h3>${escapeHtml(project.title)}</h3>
                  <p class="muted">${escapeHtml(project.summary)}</p>
                  <div class="chip-row">${chipList(project.stack, ["Laravel", "PHP", "REST APIs"])}</div>
                  <footer>
                    <button class="btn btn-primary" type="button" data-open-project="${escapeHtml(project.slug)}">Details ${icons.arrow}</button>
                    ${
                      project.liveUrl
                        ? `<a class="btn btn-secondary" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.liveLabel)}</a>`
                        : ""
                    }
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
          <h2 class="section-title" id="writing-title">Technical Writing</h2>
          <p class="section-copy">One real Laravel article is preserved because writing shows how backend decisions are explained, not just implemented.</p>
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
    ["X", profile.social.x, profile.social.x?.replace(/^https?:\/\//, "")],
    ["Medium", profile.social.medium, "medium.com/@mostafaamahmoudd"],
  ].filter(([, href]) => Boolean(href));

  return `
    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="contact-crows" aria-hidden="true">${crowMarkup(7, "contact-crow")}</div>
      <div class="container contact-grid">
        <div class="contact-panel" data-reveal>
          <p class="eyebrow">Contact</p>
          <h2 class="section-title" id="contact-title">Let's build something reliable.</h2>
          <p class="section-copy">${escapeHtml(profile.availability)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="mailto:${escapeHtml(profile.email)}">Email Mustafa ${icons.arrow}</a>
            <a class="btn btn-secondary" href="${escapeHtml(resume.path)}" target="_blank" rel="noopener noreferrer">View CV</a>
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
        <span>GitHub · LinkedIn · Email · Medium</span>
      </div>
    </footer>`;
}

function renderDialog() {
  return `
    <dialog class="detail-dialog" data-detail-dialog aria-labelledby="detail-title">
      <div class="dialog-illusion" aria-hidden="true">${crowMarkup(3, "dialog-crow")}</div>
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
        ${renderJourney()}
        ${renderProjects()}
        ${renderSkills()}
        ${renderWriting()}
        ${renderContact()}
      </main>
      ${renderFooter()}
      ${renderDialog()}
      <div class="shuriken-cursor" data-shuriken-cursor aria-hidden="true">
        <svg viewBox="0 0 32 32" focusable="false">
          <path class="shuriken-blade" d="M16 2 L20 12 L30 8 L22 16 L30 24 L20 20 L16 30 L12 20 L2 24 L10 16 L2 8 L12 12Z"/>
          <circle class="shuriken-core" cx="16" cy="16" r="4"/>
          <circle class="shuriken-hole" cx="16" cy="16" r="1.7"/>
        </svg>
      </div>
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
          ${
            href
              ? `<a class="btn btn-primary" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ${icons.arrow}</a>`
              : `<p class="muted">Internal project. Public source code and demo are not exposed.</p>`
          }
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
    dialog.classList.remove("is-appearing");
    requestAnimationFrame(() => dialog.classList.add("is-appearing"));
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
  function scrollToSectionHash(behavior = "smooth") {
    const hash = decodeURIComponent(location.hash || "");
    if (!hash || hash.startsWith("#project/") || hash.startsWith("#article/")) return;

    const target = document.querySelector(hash);
    if (!target) return;

    window.requestAnimationFrame(() => {
      target.querySelectorAll("[data-reveal]").forEach((item) => item.classList.add("is-visible"));
      const header = document.querySelector(".site-header");
      const headerOffset = header ? header.getBoundingClientRect().height + 20 : 92;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: prefersReducedMotion.matches ? "auto" : behavior,
      });
    });
  }

  window.addEventListener("hashchange", () => scrollToSectionHash("smooth"));
  window.setTimeout(() => scrollToSectionHash("auto"), 0);
  window.setTimeout(() => scrollToSectionHash("auto"), 260);
  document.fonts?.ready.then(() => scrollToSectionHash("auto")).catch(() => {});
}

function renderNotFound() {
  app.innerHTML = `
    <main class="not-found">
      <div class="not-found-scene" aria-hidden="true">
        <div class="eclipse-moon"></div>
        <span class="not-found-crow wing-wide"></span>
      </div>
      <section class="container not-found-card glass-card">
        <p class="eyebrow">404 · Illusion break</p>
        <h1 class="section-title">The illusion broke.</h1>
        <p class="section-copy">The portfolio content is still here. Return to the main path and keep moving.</p>
        <p><a class="btn btn-primary" href="index.html#home">Return home ${icons.arrow}</a></p>
      </section>
    </main>`;
}

function setupHeroCinematic() {
  const hero = document.querySelector("[data-hero-cinematic]");
  const moon = document.querySelector("[data-moon]");
  const activate = document.querySelector("[data-hero-activate]");
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!hero) return;

  if (prefersReducedMotion.matches) {
    hero.classList.add("is-complete");
    document.body.classList.add("hero-intro-complete");
    return;
  }

  window.setTimeout(() => document.body.classList.add("hero-intro-complete"), 3100);

  activate?.addEventListener("pointerenter", () => hero.classList.add("is-activated"));
  activate?.addEventListener("focus", () => hero.classList.add("is-activated"));
  activate?.addEventListener("pointerleave", () => hero.classList.remove("is-activated"));
  activate?.addEventListener("blur", () => hero.classList.remove("is-activated"));

  if (!supportsFinePointer || !moon) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      moon.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    { passive: true },
  );
}

function setupIllusionMoments() {
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll("#experience, #projects");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.classList.contains("is-illusion-revealed")) return;
        entry.target.classList.add("is-illusion-revealed");
      });
    },
    { threshold: 0.28 },
  );

  targets.forEach((target) => observer.observe(target));
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

function setupShurikenCursor() {
  const cursor = document.querySelector("[data-shuriken-cursor]");
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!cursor || prefersReducedMotion.matches || !supportsFinePointer) return;

  let currentX = -80;
  let currentY = -80;
  let targetX = -80;
  let targetY = -80;
  let rotation = 0;
  let moving = false;
  let frame = 0;
  const interactiveSelector = "a, button, summary, input, textarea, select, [role='button'], [data-tilt]";

  document.documentElement.classList.add("has-shuriken-cursor");
  cursor.classList.add("is-ready");

  function animate() {
    currentX += (targetX - currentX) * 0.45;
    currentY += (targetY - currentY) * 0.45;
    if (moving) rotation += 2.2;
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotation}deg)`;
    frame = window.requestAnimationFrame(animate);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      moving = true;
      cursor.classList.add("is-moving");
      window.clearTimeout(cursor._moveTimer);
      cursor._moveTimer = window.setTimeout(() => {
        moving = false;
        cursor.classList.remove("is-moving");
      }, 90);
    },
    { passive: true },
  );

  document.addEventListener("pointerover", (event) => {
    if (event.target.closest(interactiveSelector)) cursor.classList.add("is-hovering");
    if (event.target.closest(".hero-cinematic, .hero-system")) cursor.classList.add("is-mangekyo");
  });

  document.addEventListener("pointerout", (event) => {
    if (event.target.closest(interactiveSelector)) cursor.classList.remove("is-hovering");
    if (event.target.closest(".hero-cinematic, .hero-system")) cursor.classList.remove("is-mangekyo");
  });

  document.addEventListener("pointerdown", () => {
    cursor.classList.remove("is-clicking");
    void cursor.offsetWidth;
    rotation += 120;
    cursor.classList.add("is-clicking");
  });

  document.addEventListener("pointerup", () => {
    window.setTimeout(() => cursor.classList.remove("is-clicking"), 180);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(frame);
      frame = 0;
      return;
    }
    if (!frame) animate();
  });

  animate();
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
setupHeroCinematic();
setupReveal();
setupNav();
setupDetailRoutes();
setupSectionHashScrolling();
setupIllusionMoments();
setupPointerEffects();
setupShurikenCursor();
setupTilt();
hideLoader();
