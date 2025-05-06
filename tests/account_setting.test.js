
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

let dom, container;

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, "../account_setting.html"), "utf8");
  dom = new JSDOM(html, { runScripts: "dangerously" });
  container = dom.window.document.body;
});

test("Account page displays user email", () => {
  const emailElement = container.querySelector("p:nth-of-type(2)");
  expect(emailElement.textContent).toContain("@gmail.com");
});
