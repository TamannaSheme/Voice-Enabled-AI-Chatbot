
/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");

describe("Settings Page", () => {
  let html;
  let container;

  beforeEach(() => {
    html = fs.readFileSync(path.resolve(__dirname, "../settings.html"), "utf8");
    document.documentElement.innerHTML = html.toString();
    require("../js/settings.js");
    container = document.body;
  });

  test("[C94] should load the settings page", () => {
    const heading = container.querySelector("h1");
    expect(heading).not.toBeNull();
    expect(heading.textContent).toMatch(/Settings/i);
  });

  test("[C95] should have an email input and save button", () => {
    const input = container.querySelector("#email");
    const button = container.querySelector("#save-btn");
    expect(input).not.toBeNull();
    expect(button).not.toBeNull();
  });

  test("[C96] should show alert on clicking Save", () => {
    global.alert = jest.fn();
    const button = container.querySelector("#save-btn");
    button.click();
    expect(global.alert).toHaveBeenCalledWith("Settings saved!");
  });
});
