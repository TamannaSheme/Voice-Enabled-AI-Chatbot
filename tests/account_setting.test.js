/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

let html;
let container;

beforeEach(() => {
  html = fs.readFileSync(path.resolve(__dirname, "../account_setting.html"), "utf8");
  document.documentElement.innerHTML = html.toString();
  require("../js/account_setting.js");
  container = document.body;
});

afterEach(() => {
  jest.resetModules();
});

test("[C120] toggles password visibility", () => {
  const input = container.querySelector("#password");
  const toggle = container.querySelector("#togglePassword");

  expect(input.type).toBe("password");
  toggle.click();
  expect(input.type).toBe("text");
  toggle.click();
  expect(input.type).toBe("password");
});

test("[C121] alerts on save button click", () => {
  global.alert = jest.fn(); // ✅ MOCK ALERT
  const saveBtn = container.querySelector("#save-btn");
  saveBtn.click();
  expect(global.alert).toHaveBeenCalledWith("Account settings saved successfully!");
});

test("[C122] redirects to index.html on logout", () => {
  delete window.location;
  window.location = { href: "" }; // ✅ MOCK HREF
  const logoutBtn = container.querySelector("#logout-btn");
  logoutBtn.click();
  expect(window.location.href).toBe("index.html");
});

test("[C123] redirects to settings.html on back link click", () => {
  delete window.location;
  window.location = { href: "" }; // ✅ MOCK HREF
  const backLink = container.querySelector(".back-link a");
  backLink.click();
  expect(window.location.href).toBe("settings.html");
});
