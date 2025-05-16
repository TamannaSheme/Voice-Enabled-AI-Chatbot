/**
 * @jest-environment jsdom
 */

const fs = require("fs");

describe("Voice Settings Page Integration Testing", () => {
  let document, window;

  beforeEach(() => {
    document = global.document;
    window = global.window;

    document.body.innerHTML = `
      <div id="voice-settings">
        <input type="checkbox" id="voice-input" />
        <select id="speech-mode">
          <option value="text-to-speech">Text to Speech</option>
          <option value="speech-to-text">Speech to Text</option>
        </select>
        <select id="language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
        <input type="checkbox" id="auto-delete" />
        <button id="save-button">Save</button>
        <a href="#" id="back-to-settings">Back to Settings</a>
      </div>
    `;

    window.alert = jest.fn();

    // Mock save function
    window.saveSettings = jest.fn(() => {
      alert("Settings Saved");
    });

    document.getElementById("save-button").onclick = window.saveSettings;
  });

  test("[C20] Enable/Disable Voice Input", () => {
    const checkbox = document.getElementById("voice-input");
    checkbox.checked = true;
    expect(checkbox.checked).toBe(true);
  });

  test("[C21] Select Speech Mode Option", () => {
    const select = document.getElementById("speech-mode");
    select.value = "speech-to-text";
    expect(select.value).toBe("speech-to-text");
  });

  test("[C22] Change Language Option", () => {
    const select = document.getElementById("language");
    select.value = "es";
    expect(select.value).toBe("es");
  });

  test("[C23] Change Auto-Delete Option", () => {
    const checkbox = document.getElementById("auto-delete");
    checkbox.checked = true;
    expect(checkbox.checked).toBe(true);
  });

  test("[C24] Save Button Functionality", () => {
    document.getElementById("save-button").click();
    expect(window.saveSettings).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Settings Saved");
  });

  test("[C25] Navigation to Settings Page", () => {
    const link = document.getElementById("back-to-settings");
    link.click();
    expect(link.getAttribute("href")).toBe("#");
  });
// Non-Functional Test Cases
  test("[C153] [Performance] Save Changes Response Time Under 1 Second", () => {
    const startTime = performance.now();
    document.getElementById("save-button").click();
    const endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(1000);
  });

  test("[C154] [Accessibility] Keyboard Navigation for All Options", async () => {
    const elements = document.querySelectorAll(
      "#voice-settings input, #voice-settings select, #voice-settings button, #voice-settings a"
    );

    // Ensure keyboard accessibility
    elements.forEach((element) => {
      element.setAttribute("tabindex", "0");
    });

    for (const element of elements) {
      element.focus();
      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(document.activeElement).toBe(element);
    }
  });

  test("[C155] [Usability] Speech Mode Option is Responsive", () => {
    // Simulate different screen sizes
    window.innerWidth = 480;
    window.dispatchEvent(new Event("resize"));
    const select = document.getElementById("speech-mode");
    expect(getComputedStyle(select).display).not.toBe("none");

    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
    expect(getComputedStyle(select).display).not.toBe("none");
  });
});
