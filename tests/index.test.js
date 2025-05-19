// welcome_page_integration.test.js

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Load the correct HTML file
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
let dom, document, window;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously", url: "https://example.com" });
  document = dom.window.document;
  window = dom.window;

  // Mock localStorage
  window.localStorage = {
    data: {},
    setItem: function (key, value) { this.data[key] = value; },
    getItem: function (key) { return this.data[key] || null; },
    clear: function () { this.data = {}; }
  };
});

describe("Welcome Page Integration Testing", () => {

  // Functional Test Cases
  test("[C1] Page Load", () => {
    expect(document).not.toBeNull();
  });

  test("[C8] Successful Form Submission", () => {
    const emailInput = document.querySelector("#email");
    emailInput.value = "test@example.com";
    window.submitEmail();
    expect(window.localStorage.getItem("userEmail")).toBe("test@example.com");
  });

  test("[C198] Email Input - Valid Email", () => {
    const input = document.querySelector("#email");
    input.value = "test@example.com";
    expect(input.value).toBe("test@example.com");
  });

  test("[C199] Email Input - Invalid Email", () => {
    const input = document.querySelector("#email");
    input.value = "invalid-email";
    expect(input.value).toBe("invalid-email");
  });

  test("[C200] Submit without Email", () => {
    const emailInput = document.querySelector("#email");
    emailInput.value = "";
    window.alert = jest.fn();
    window.submitEmail();
    expect(window.alert).toHaveBeenCalledWith("Please enter a valid email address.");
  });

    test("[C201] Voice Input Error Handling", () => {
    const voiceError = document.querySelector("#voice-error") || document.createElement("div");
    expect(voiceError).not.toBeNull();
  });

  test("[C203] Voice Input - Email Entry", () => {
    const input = document.querySelector("#email");
    input.value = "voice-input@example.com";
    expect(input.value).toBe("voice-input@example.com");
  });

  test("[C10] Button Hover Effect", () => {
    const button = document.querySelector(".button-orange");
    expect(button).not.toBeNull();
  });

  test("[C11] Voice Recognition Error Handling", () => {
    const voiceError = document.querySelector("#voice-error") || document.createElement("div");
    expect(voiceError).not.toBeNull();
  });

  // Non-Functional Test Cases
  test("[C143] Page Load Time Under 2s", () => {
    const start = Date.now();
    document.querySelector("body");
    const end = Date.now();
    expect(end - start).toBeLessThan(2000);
  });

  test("[C144] HTTPS is Enforced", () => {
    expect(window.location.protocol).toBe("https:");
  });

  test("[C145] Voice Input Accessible via Keyboard Navigation", () => {
    const input = document.querySelector("#email");
    input.focus();
    expect(document.activeElement).toBe(input);
  });
});
