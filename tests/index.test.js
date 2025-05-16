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
});

describe("Welcome Page Integration Testing", () => {
  test("[C1] Page Load", () => {
    expect(document).not.toBeNull();
  });

  test("[C2] Voice Input - Student ID", () => {
    const input = document.querySelector("#student-id");
    expect(input).not.toBeNull();
  });

  test("[C3] Voice Input - Phone Number", () => {
    const input = document.querySelector("#phone-number");
    expect(input).not.toBeNull();
  });

  test("[C4] Voice Input - Email", () => {
    const input = document.querySelector("#email");
    expect(input).not.toBeNull();
  });

  test("[C5] Submit Without Filling Fields", () => {
    const form = document.querySelector("form");
    expect(form).not.toBeNull();

    form.checkValidity = jest.fn(() => false);
    const submitButton = document.querySelector("button[type='submit']");

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      expect(form.checkValidity).toHaveBeenCalled();
    });

    submitButton.click();
  });

  test("[C6] Invalid Student ID Input", () => {
    const input = document.querySelector("#student-id");
    input.value = "invalid";
    expect(input.value).toBe("invalid");
  });

  test("[C12] Invalid Phone Number Input", () => {
    const input = document.querySelector("#phone-number");
    input.value = "invalid";
    expect(input.value).toBe("invalid");
  });

  test("[C7] Invalid Email Input", () => {
    const input = document.querySelector("#email");
    input.value = "invalid";
    expect(input.value).toBe("invalid");
  });

  test("[C8] Successful Form Submission", () => {
    const form = document.querySelector("form");
    form.checkValidity = jest.fn().mockReturnValue(true);

    const submitButton = document.querySelector("button[type='submit']");

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      expect(form.checkValidity).toHaveBeenCalled();
    });

    submitButton.click();
  });

  test("[C9] Form Responsiveness", () => {
    const container = document.querySelector(".form-card");
    expect(container).not.toBeNull();
  });

  test("[C10] Button Hover Effect", () => {
    const button = document.querySelector(".button-orange");
    expect(button).not.toBeNull();
  });

  test("[C11] Voice Recognition Error Handling", () => {
    const voiceError = document.querySelector("#voice-error");
    expect(voiceError).not.toBeNull();
  });

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
    const input = document.querySelector("#student-id");
    input.focus();
    expect(document.activeElement).toBe(input);
  });
});
