
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

let dom, container;

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, "../student.html"), "utf8");
  dom = new JSDOM(html, { runScripts: "dangerously" });
  container = dom.window.document.body;
});

test("Student page renders correctly", () => {
  const header = container.querySelector("h1");
  expect(header).not.toBeNull();
});
