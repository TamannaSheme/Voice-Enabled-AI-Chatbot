/**
 * @jest-environment jsdom
 */

describe("Preferences Settings Page Integration Testing", () => {
  let document, window;

  beforeEach(() => {
    document = global.document;
    window = global.window;

    document.body.innerHTML = `
      <div id="preferences-settings">
        <select id="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <select id="font-size">
          <option value="small">Small</option>
          <option value="medium" selected>Medium</option>
          <option value="large">Large</option>
        </select>
        <select id="language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
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

  test("[C39] Check Default Preference Selections", () => {
    expect(document.getElementById("theme").value).toBe("light");
    expect(document.getElementById("font-size").value).toBe("medium");
    expect(document.getElementById("language").value).toBe("en");
  });

  test("[C40] Change Theme Preference and Save", () => {
    const theme = document.getElementById("theme");
    theme.value = "dark";
    document.getElementById("save-button").click();
    expect(window.saveSettings).toHaveBeenCalled();
  });

  test("[C41] Change Font Size and Save", () => {
    const fontSize = document.getElementById("font-size");
    fontSize.value = "large";
    document.getElementById("save-button").click();
    expect(window.saveSettings).toHaveBeenCalled();
  });

  test("[C42] Back to Settings Navigation", () => {
    const link = document.getElementById("back-to-settings");
    link.click();
    expect(link.getAttribute("href")).toBe("#");
  });

  test("[C43] Verify App Language Option", () => {
    const language = document.getElementById("language");
    language.value = "es";
    document.getElementById("save-button").click();
    expect(window.saveSettings).toHaveBeenCalled();
  });

  test("[C44] Verify Save Button Without Changes", () => {
    document.getElementById("save-button").click();
    expect(window.saveSettings).toHaveBeenCalled();
  });

});
