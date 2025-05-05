/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

describe("Voice Enabled Chatbot UI", () => {
  let html;
  let container;

  beforeEach(() => {
    html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
    document.documentElement.innerHTML = html.toString();
    require("../script.js");
    container = document.body;
  });

  test("[C101] should have a title", () => {
    const title = container.querySelector('h1');
    expect(title).not.toBeNull();
    expect(title.textContent).toMatch(/Voice Chatbot/i);
  });

  test("[C102] should have an input and button for sending", () => {
    const input = container.querySelector('#user-input');
    const button = container.querySelector('button');
    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
  });

  test("[C103] should append user input to chat box when sendMessage is called", () => {
    const input = container.querySelector('#user-input');
    input.value = "Hello";
    const chatBox = container.querySelector('#chat-box');
    global.sendMessage();
    expect(chatBox.innerHTML).toContain("Hello");
  });
});
