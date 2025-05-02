
/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");

describe("Preferences Page", () => {
  let html;
  let container;

  beforeEach(() => {
    global.alert = jest.fn();
    html = fs.readFileSync(path.resolve(__dirname, "../preferences_setting.html"), "utf8");
    document.documentElement.innerHTML = html.toString();
    require("../js/preferences_setting.js");
    container = document.body;
  });

  afterEach(() => {
    jest.resetModules();
  });

  test("[C97] should alert on clicking Save", () => {
    const saveBtn = container.querySelector('#save-btn');
    saveBtn.click();
    expect(global.alert).toHaveBeenCalledWith("Preferences saved successfully!");
  });
});
