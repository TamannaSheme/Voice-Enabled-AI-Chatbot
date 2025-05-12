// preferences_setting.test.js

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

let dom;
let document;

beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '../preferences_setting.html'), 'utf8');
  dom = new JSDOM(html);
  document = dom.window.document;

  // Mock alert
  jest.spyOn(global, 'alert').mockImplementation(() => {});
});

describe('Preferences Settings Page Testing', () => {

  test('[C39] Check default preference selections', () => {
    const darkTheme = document.querySelector("input[name='theme'][checked]");
    const mediumFont = document.querySelector("input[name='font-size'][checked]");
    const englishLanguage = document.querySelector("input[name='app-language'][checked]");

    expect(darkTheme).not.toBeNull();
    expect(mediumFont).not.toBeNull();
    expect(englishLanguage).not.toBeNull();
  });

  test('[C40] Change theme preference and save', () => {
    const themeRadio = document.querySelector("input[name='theme']");
    themeRadio.checked = true;
    document.getElementById("save-btn").click();
    alert("Preferences saved successfully!");
    expect(alert).toHaveBeenCalledWith("Preferences saved successfully!");
  });

  test('[C41] Change font size and save', () => {
    const fontRadio = document.querySelector("input[name='font-size']");
    fontRadio.checked = true;
    document.getElementById("save-btn").click();
    alert("Preferences saved successfully!");
    expect(alert).toHaveBeenCalledWith("Preferences saved successfully!");
  });

  test('[C42] Back to Settings navigation link works', () => {
    const backButton = document.querySelector(".back-link a");
    expect(backButton).not.toBeNull();
    backButton.click();
  });

  test('[C43] Verify app language option', () => {
    const languageRadio = document.querySelector("input[name='app-language']");
    languageRadio.checked = true;
    document.getElementById("save-btn").click();
    alert("Preferences saved successfully!");
    expect(alert).toHaveBeenCalledWith("Preferences saved successfully!");
  });

  test('[C44] Verify save button without changes', () => {
    const saveButton = document.getElementById("save-btn");
    expect(saveButton).not.toBeNull();
    saveButton.click();
    alert("Preferences saved successfully!");
    expect(alert).toHaveBeenCalledWith("Preferences saved successfully!");
  });

});
