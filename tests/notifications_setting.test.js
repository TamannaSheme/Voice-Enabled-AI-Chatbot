/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");

describe("Notification Settings Page", () => {
  let html;
  let container;

  beforeEach(() => {
    global.alert = jest.fn();
    html = fs.readFileSync(path.resolve(__dirname, "../notifications_setting.html"), "utf8");
    document.documentElement.innerHTML = html.toString();
    require("../js/notifications_setting.js");
    container = document.body;
  });

  afterEach(() => {
    jest.resetModules();
  });

  test("[C111] should have page title Notifications", () => {
    const heading = container.querySelector("h1");
    expect(heading).not.toBeNull();
    expect(heading.textContent).toMatch(/Notifications/i);
  });

  test("[C112] should render Push Notification options", () => {
    const pushToggle = container.querySelector("#push-toggle");
    expect(pushToggle).not.toBeNull();
  });

  test("[C113] should render Email Alert options", () => {
    const emailToggle = container.querySelector("#email-toggle");
    expect(emailToggle).not.toBeNull();
  });

  test("[C114] should render Sound options", () => {
    const soundToggle = container.querySelector("#sound-toggle");
    expect(soundToggle).not.toBeNull();
  });

  test("[C115] should have Save button", () => {
    const saveBtn = container.querySelector("#save-btn");
    expect(saveBtn).not.toBeNull();
  });

  test("[C116] should alert when Save button is clicked", () => {
    const saveBtn = container.querySelector("#save-btn");
    saveBtn.click();
    expect(global.alert).toHaveBeenCalledWith("Notifications settings saved successfully!");
  });

  test("[C117] should have back to settings link", () => {
    const backLink = container.querySelector("#back-to-settings");
    expect(backLink).not.toBeNull();
    expect(backLink.getAttribute("href")).toBe("settings.html");
  });
});