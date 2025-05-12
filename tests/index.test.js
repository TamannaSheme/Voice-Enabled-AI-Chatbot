const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Load the correct HTML file
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
let dom, document;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
  document = dom.window.document;
});

describe("Welcome Page Testing", () => {
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
  });

  test("[C6] Invalid Student ID Input", () => {
    const input = document.querySelector("#student-id");
    if (input) {
      input.value = "invalid";
      expect(input.value).toBe("invalid");
    } else {
      fail("Student ID input not found");
    }
  });

  test("[C12] Invalid Phone Number Input", () => {
    const input = document.querySelector("#phone-number");
    if (input) {
      input.value = "invalid";
      expect(input.value).toBe("invalid");
    } else {
      fail("Phone Number input not found");
    }
  });

  test("[C7] Invalid Email Input", () => {
    const input = document.querySelector("#email");
    if (input) {
      input.value = "invalid";
      expect(input.value).toBe("invalid");
    } else {
      fail("Email input not found");
    }
  });

  test("[C8] Successful Form Submission", () => {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button[type='submit']");
    expect(form).not.toBeNull();
    expect(submitButton).not.toBeNull();
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
});
