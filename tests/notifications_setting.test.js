/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");

describe("Notification Settings Page", () => {
  let html;
  let container;

  beforeEach(() => {
    // Mock alert
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
    const title = document.querySelector("title");
    expect(title).not.toBeNull();
    expect(title.textContent).toMatch(/Notifications/i);
  });

  test("[C112] should render Push Notification options", () => {
    const pushOptions = container.querySelectorAll('input[name="push"]');
    expect(pushOptions.length).toBe(2);
  });

  test("[C113] should render Email Alert options", () => {
    const emailOptions = container.querySelectorAll('input[name="email"]');
    expect(emailOptions.length).toBe(2);
  });

  test("[C114] should render Sound options", () => {
    const soundOptions = container.querySelectorAll('input[name="sound"]');
    expect(soundOptions.length).toBe(4);
  });

  test("[C115] should have Save button", () => {
    const saveBtn = container.querySelector('#save-btn');
    expect(saveBtn).not.toBeNull();
  });

  test("[C116] should alert when Save button is clicked", () => {
    const saveBtn = container.querySelector('#save-btn');
    saveBtn.click();
    expect(global.alert).toHaveBeenCalledWith("Notifications settings saved successfully!");
  });

  test("[C117] should have back to settings link", () => {
    const backLink = container.querySelector('.back-link a');
    expect(backLink).not.toBeNull();
    expect(backLink.getAttribute("href")).toBe("settings.html");
  });
});
