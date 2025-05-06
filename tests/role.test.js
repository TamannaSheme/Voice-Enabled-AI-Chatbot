
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

let dom, container;

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, "../role.html"), "utf8");
  dom = new JSDOM(html, { runScripts: "dangerously" });
  container = dom.window.document.body;
});

test("[C301] should render role selection cards", () => {
  const roleCards = container.querySelectorAll(".role-card");
  expect(roleCards.length).toBeGreaterThanOrEqual(3);
});
