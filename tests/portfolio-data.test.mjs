import assert from "node:assert/strict";
import test from "node:test";

import {
  articles,
  legacyRoutes,
  profile,
  projects,
  skillGroups,
} from "../js/content.mjs";

test("portfolio profile preserves existing identity and contact data", () => {
  assert.equal(profile.name, "Mostafa Mahmoud");
  assert.equal(profile.role, "Backend Developer");
  assert.equal(profile.email, "mostafaa.mahmoudd550@gmail.com");
  assert.equal(profile.social.github, "https://github.com/mostafaamahmoudd");
  assert.equal(profile.social.linkedin, "https://linkedin.com/in/mostafaamahmoudd");
  assert.equal(profile.social.medium, "https://medium.com/@mostafaamahmoudd");
});

test("project data includes the existing four projects and their live links", () => {
  assert.deepEqual(
    projects.map((project) => project.title),
    ["ElMohandes", "SATIC", "Salahly", "BAS10 Platform"],
  );

  assert.ok(projects.every((project) => project.summary && project.scope.length));
  assert.ok(projects.every((project) => project.stack.includes("Laravel")));
  assert.equal(
    projects.find((project) => project.slug === "elmohandes")?.liveUrl,
    "https://play.google.com/store/apps/details?id=com.true.elmohandesclients&pcampaignid=web_share",
  );
});

test("skills and article data stay factual to the existing portfolio", () => {
  const flattenedSkills = skillGroups.flatMap((group) => group.items);
  assert.ok(flattenedSkills.includes("PHP"));
  assert.ok(flattenedSkills.includes("Laravel"));
  assert.ok(flattenedSkills.includes("REST APIs"));
  assert.ok(flattenedSkills.includes("PHPUnit"));

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
