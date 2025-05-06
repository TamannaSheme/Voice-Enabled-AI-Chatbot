const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Polyfill for Node <18
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom, document;

beforeEach(() => {
  dom = new JSDOM(html);
  document = dom.window.document;
});

describe("Index Page UI", () => {
  test("[C001] should have Lumi heading", () => {
    const heading = document.querySelector("h2");
    expect(heading).not.toBeNull();
    expect(heading.textContent).toMatch(/Lumi/i);
  });

  test("[C002] should have studentId, phoneNumber, and email fields", () => {
    expect(document.querySelector("#studentId")).not.toBeNull();
    expect(document.querySelector("#phoneNumber")).not.toBeNull();
    expect(document.querySelector("#email")).not.toBeNull();
  });

  test("[C003] should have a submit button", () => {
    const submitBtn = document.querySelector(".button-orange");
    expect(submitBtn).not.toBeNull();
    expect(submitBtn.textContent).toMatch(/Submit/i);
  });
});
