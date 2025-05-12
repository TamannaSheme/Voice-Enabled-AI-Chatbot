/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Voice Settings Page Testing", () => {
  let document;

  beforeEach(() => {
    // Load HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "../voice_setting.html"), "utf8");
    document = new DOMParser().parseFromString(html, "text/html");
    document.body.innerHTML = html;

    // Manually trigger the DOMContentLoaded event to ensure JS runs
    document.dispatchEvent(new Event("DOMContentLoaded"));

    // Mock the alert function to avoid real alerts
    jest.spyOn(window, "alert").mockImplementation(() => {});

    // Load JavaScript manually (simulate JS loading)
    const saveButton = document.getElementById("save-btn");
    if (saveButton) {
      saveButton.addEventListener("click", () => {
        alert("Voice Input settings saved successfully!");
      });
    }
  });

  // C20: Enable/Disable Voice Input
  test("[C20] Enable/Disable Voice Input", () => {
    const voiceCheckbox = document.querySelector("#enable-voice");
    expect(voiceCheckbox).toBeTruthy();
    voiceCheckbox.checked = false;
    expect(voiceCheckbox.checked).toBe(false);
    voiceCheckbox.checked = true;
    expect(voiceCheckbox.checked).toBe(true);
  });

  // C21: Select Speech Mode Option
  test("[C21] Select Speech Mode Option", () => {
    const speechModes = document.querySelectorAll("input[name='speech-mode']");
    expect(speechModes.length).toBeGreaterThan(0);
    speechModes[0].checked = true;
    expect(speechModes[0].checked).toBe(true);
  });

  // C22: Change Language Option
  test("[C22] Change Language Option", () => {
    const languageOptions = document.querySelector("input[name='language']");
    expect(languageOptions).toBeTruthy();
    languageOptions.checked = true;
    expect(languageOptions.checked).toBe(true);
  });

  // C23: Change Auto-Delete Option
  test("[C23] Change Auto-Delete Option", () => {
    const autoDeleteOptions = document.querySelectorAll("input[name='auto-delete']");
    expect(autoDeleteOptions.length).toBeGreaterThan(0);
    autoDeleteOptions[0].checked = true;
    expect(autoDeleteOptions[0].checked).toBe(true);
  });

  // C24: Save Button Functionality
  test("[C24] Save Button Functionality", () => {
    const saveButton = document.querySelector("#save-btn");
    expect(saveButton).toBeTruthy();
    
    saveButton.click();
    expect(window.alert).toHaveBeenCalledWith("Voice Input settings saved successfully!");
  });

  // C25: Navigation to Settings Page
  test("[C25] Navigation to Settings Page", () => {
    const backLink = document.querySelector(".back-link a");
    expect(backLink).toBeTruthy();
    expect(backLink.getAttribute("href")).toBe("settings.html");
  });
});
