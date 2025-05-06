// Polyfill for TextEncoder and TextDecoder
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.TextEncoder = require("util").TextEncoder;

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom, document, window;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
  window = dom.window;
  document = window.document;
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
