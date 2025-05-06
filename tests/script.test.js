// Polyfill for TextEncoder and TextDecoder
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Load the correct HTML file with input, button, and chat-box
const html = fs.readFileSync(path.resolve(__dirname, "../ask_lumi.html"), "utf8");

let dom, container;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
  container = dom.window.document.body;
  global.document = dom.window.document;
  global.window = dom.window;
  global.sendMessage = require("../js/script.js").sendMessage;
});

test("[C101] should have a title", () => {
  const title = container.querySelector("h1");
  expect(title).not.toBeNull();
  expect(title.textContent).toMatch(/Voice Chatbot/i);
});

test("[C102] should have an input and button for sending", () => {
  const input = container.querySelector("#user-input");
  const button = container.querySelector("button");
  expect(input).not.toBeNull();
  expect(button).not.toBeNull();
});

test("[C103] should append user input to chat box when sendMessage is called", () => {
  const input = container.querySelector("#user-input");
  const chatBox = container.querySelector("#chat-box");
  input.value = "Hello";
  global.sendMessage();
  expect(chatBox.innerHTML).toContain("Hello");
});
