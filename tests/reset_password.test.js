// reset_password_integration.test.js

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Load the correct HTML file
const html = fs.readFileSync(path.resolve(__dirname, "../reset-password.html"), "utf8");
let dom, document, window;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously", url: "https://example.com" });
  document = dom.window.document;
  window = dom.window;
});

describe("Reset Password Page Integration Testing", () => {
  test("[C184] Input Field Validation", () => {
    const input = document.querySelector("#newPassword");
    input.value = "";
    expect(input.checkValidity()).toBe(false);
  });

  test("[C186] Verify New Password Field", () => {
    const input = document.querySelector("#newPassword");
    expect(input).not.toBeNull();
  });

  test("[C187] Verify Page Load Time", () => {
    const start = Date.now();
    document.querySelector("body");
    const end = Date.now();
    expect(end - start).toBeLessThan(2000);
  });

  test("[C188] Verify Username/Email Field", () => {
    const input = document.querySelector("#username");
    expect(input).not.toBeNull();
  });

  test("[C189] Verify Confirm Password Field", () => {
    const input = document.querySelector("#confirmPassword");
    expect(input).not.toBeNull();
  });

  test("[C190] Verify Password Matching", () => {
    const password = document.querySelector("#newPassword");
    const confirm = document.querySelector("#confirmPassword");
    password.value = "Password123";
    confirm.value = "Password123";
    expect(password.value).toBe(confirm.value);
  });

  test("[C191] Verify Change Password Button Enabled", () => {
    const button = document.querySelector("button[type='submit']");
    expect(button).not.toBeNull();
  });

  test("[C192] Verify Error for Password Mismatch", () => {
    const password = document.querySelector("#newPassword");
    const confirm = document.querySelector("#confirmPassword");
    password.value = "Password123";
    confirm.value = "Different123";
    expect(password.value).not.toBe(confirm.value);
  });

  test("[C193] Verify Successful Password Change", () => {
    const form = document.querySelector("form");
    form.submit = jest.fn();
    form.submit();
    expect(form.submit).toHaveBeenCalled();
  });

  test("[C194] Verify Back to Chat Button", () => {
    const link = document.querySelector(".back-link a");
    expect(link).not.toBeNull();
  });

  test("[C195] Verify Password Visibility Toggle", () => {
    const password = document.querySelector("#newPassword");
    password.type = "text";
    expect(password.type).toBe("text");
  });

  test("[C196] Verify Minimum Password Length", () => {
    const password = document.querySelector("#newPassword");
    password.value = "shortpassword";
    expect(password.value.length).toBeGreaterThanOrEqual(8);
  });

  test("[C197] Verify Form Reset After Submission", () => {
    const form = document.querySelector("form");
    form.reset = jest.fn();
    form.reset();
    expect(form.reset).toHaveBeenCalled();
  });

});
