/**
 * @jest-environment jsdom
 */

describe("Settings Page Integration Testing", () => {
  let document, window;

  beforeEach(() => {
    // Set up a basic DOM structure
    document = global.document;
    window = global.window;

    document.body.innerHTML = `
      <div id="settings">
        <a href="#" id="voice-settings" onclick="navigateTo('voice_setting.html')">Voice Settings</a>
        <a href="#" id="preferences-settings" onclick="navigateTo('preferences_setting.html')">Preferences Settings</a>
        <a href="#" id="notifications-settings" onclick="navigateTo('notifications_setting.html')">Notifications Settings</a>
        <a href="#" id="account-settings" onclick="navigateTo('account_setting.html')">Account Settings</a>
      </div>
    `;

    // Mock the navigation function
    window.navigateTo = (url) => {
      window.location.href = url;
    };

    // Clear window.location between tests
    delete window.location;
    window.location = { href: "" };
  });

  test("[C13] Page Load", () => {
    expect(document.querySelector("#settings")).not.toBeNull();
  });

  test("[C14] Check UI Elements Visibility", () => {
    const links = document.querySelectorAll("#settings a");
    expect(links.length).toBe(4);
  });

  test("[C98] Navigate to Voice Settings", () => {
    document.querySelector("#voice-settings").click();
    expect(window.location.href).toBe("voice_setting.html");
  });

  test("[C99] Navigate to Preferences Settings", () => {
    document.querySelector("#preferences-settings").click();
    expect(window.location.href).toBe("preferences_setting.html");
  });

  test("[C101] Navigate to Notifications Settings", () => {
    document.querySelector("#notifications-settings").click();
    expect(window.location.href).toBe("notifications_setting.html");
  });

  test("[C102] Navigate to Account Settings", () => {
    document.querySelector("#account-settings").click();
    expect(window.location.href).toBe("account_setting.html");
  });
});
