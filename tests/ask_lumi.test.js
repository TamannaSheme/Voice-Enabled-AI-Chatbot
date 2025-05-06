// Polyfill for TextEncoder and TextDecoder
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

let dom, document, container;

beforeAll(() => {
  const html = fs.readFileSync(path.resolve(__dirname, "../ask-lumi.html"), "utf8");
  dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
  document = dom.window.document;
  container = document.body;
});

describe("Ask Lumi Page UI", () => {
  test("[L101] should have a title and logo", () => {
    const title = container.querySelector("h1");
    const logo = container.querySelector("img.lumi-logo");
    expect(title).not.toBeNull();
    expect(title.textContent).toMatch(/Ask Lumi a New Question/i);
    expect(logo).not.toBeNull();
  });

  test("[L102] should have a textarea input and two buttons", () => {
    const textarea = container.querySelector("textarea#question");
    const buttons = container.querySelectorAll("button.button-orange");
    expect(textarea).not.toBeNull();
    expect(buttons.length).toBe(2); // 🎤 and ➤
  });

  test("[L103] settings button should be present with dropdown", () => {
    const settingsBtn = container.querySelector(".settings-btn");
    const dropdown = container.querySelector("#settingsDropdown");
    expect(settingsBtn).not.toBeNull();
    expect(dropdown).not.toBeNull();
    expect(dropdown.querySelectorAll("a").length).toBeGreaterThanOrEqual(2);
  });

  test("[L104] chat message container should exist", () => {
    const chatBox = container.querySelector("#chat-messages");
    expect(chatBox).not.toBeNull();
  });
});
