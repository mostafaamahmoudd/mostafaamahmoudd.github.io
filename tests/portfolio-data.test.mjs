import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  articles,
  education,
  legacyRoutes,
  profile,
  projects,
  resume,
  journey,
  skillGroups,
} from "../js/content.mjs";

test("portfolio profile preserves existing identity and contact data", () => {
  assert.equal(profile.name, "Mustafa Mahmoud");
  assert.equal(profile.role, "Backend Engineer");
  assert.equal(profile.email, "mostafaa.mahmoudd550@gmail.com");
  assert.equal(profile.social.github, "https://github.com/mostafaamahmoudd");
  assert.equal(profile.social.linkedin, "https://linkedin.com/in/mostafaamahmoudd");
  assert.equal(profile.social.medium, "https://medium.com/@mostafaamahmoudd");
  assert.equal(profile.social.x, undefined);
  assert.equal(profile.phone, undefined);
});

test("CV-backed profile data includes current role, education, and local CV", () => {
  assert.equal(resume.path, "Mustafa_Mahmoud_BackEnd.pdf");
  assert.match(readFileSync(new URL("../Mustafa_Mahmoud_BackEnd.pdf", import.meta.url)).subarray(0, 4).toString(), /%PDF/);

  assert.equal(education.school, "Mansoura University");
  assert.equal(education.degree, "Bachelor in Computer Science");
  assert.equal(education.period, "2021 – 2025");
  assert.equal(education.graduationProject, "A+, 199/200");

  const currentRole = journey[0];
  assert.equal(currentRole.company, "DrCorp");
  assert.equal(currentRole.title, "Back-End Engineer");
  assert.equal(currentRole.period, "Jan 2026 – Present");
});

test("project data includes EasyLink first and preserves existing production work", () => {
  assert.deepEqual(
    projects.map((project) => project.title),
    [
      "EasyLink CRM",
      "ElMohandes",
      "SATIC",
      "Salahly",
      "BAS10 Platform",
      "Flash-Sale Checkout API",
      "Blogging Platform REST API",
      "ThinkInk Backend Server",
    ],
  );

  assert.ok(projects.every((project) => project.summary && project.scope.length));
  assert.ok(projects.filter((project) => project.slug !== "thinkink-backend").every((project) => project.stack.includes("Laravel")));
  assert.equal(projects[0].slug, "easylink-crm");
  assert.equal(projects[0].role, "Sole Backend Engineer");
  assert.equal(projects[0].liveUrl, undefined);
  assert.equal(projects[0].metrics.tests, "1,674+");
  assert.ok(projects[0].responsibilities.some((point) => point.includes("50+ RESTful API endpoints")));
  assert.equal(
    projects.find((project) => project.slug === "elmohandes")?.liveUrl,
    "https://play.google.com/store/apps/details?id=com.true.elmohandesclients&pcampaignid=web_share",
  );
});

test("skills and article data stay factual to the existing portfolio", () => {
  const flattenedSkills = skillGroups.flatMap((group) => group.items);
  assert.ok(flattenedSkills.includes("PHP"));
  assert.ok(flattenedSkills.includes("Go"));
  assert.ok(flattenedSkills.includes("Laravel"));
  assert.ok(flattenedSkills.includes("REST APIs"));
  assert.ok(flattenedSkills.includes("PHPUnit"));
  assert.ok(flattenedSkills.includes("PostgreSQL"));
  assert.ok(flattenedSkills.includes("Maatwebsite Excel"));

  assert.equal(articles.length, 1);
  assert.equal(
    articles[0].title,
    "Laravel DB Transactions: when to use them and when not",
  );
  assert.equal(articles[0].source, "Medium");
});

test("legacy routes point into the SPA detail states", () => {
  assert.equal(legacyRoutes["projects.html"], "index.html#projects");
  assert.equal(legacyRoutes["blogs.html"], "index.html#writing");
  assert.equal(
    legacyRoutes["project-elmohandes.html"],
    "index.html#project/elmohandes",
  );
  assert.equal(
    legacyRoutes["blog-laravel-db-transactions.html"],
    "index.html#article/laravel-db-transactions",
  );
});

test("SPA renders the cinematic art-direction hooks without the portrait", () => {
  const appSource = readFileSync(new URL("../js/app.mjs", import.meta.url), "utf8");

  assert.match(appSource, /class="hero-cinematic"/);
  assert.match(appSource, /class="eclipse-moon"/);
  assert.match(appSource, /class="shinobi-silhouette"/);
  assert.match(appSource, /class="crow-swarm"/);
  assert.match(appSource, /class="mangekyo-eye /);
  assert.match(appSource, /resume\.path/);
  assert.match(appSource, /View CV/);
  assert.match(appSource, /id="writing"/);
  assert.doesNotMatch(appSource, /portrait-card|profile\.portrait/);
});
