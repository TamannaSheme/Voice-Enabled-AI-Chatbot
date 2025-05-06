const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
  global.document = dom.window.document;
  global.window = dom.window;
});

test("[C001] should have Lumi heading", () => {
  const heading = document.querySelector("h1");
  expect(heading).not.toBeNull();
  expect(heading.textContent).toMatch(/Lumi/i);
});

test("[C002] should have 3 role buttons", () => {
  const buttons = document.querySelectorAll(".role-btn");
  expect(buttons.length).toBe(3);
});
