import test from "node:test";

test("visual verification is performed with Playwright CLI screenshots", {
  skip:
    "This static repository does not install @playwright/test; use `npx playwright screenshot` for dependency-free visual checks.",
});
