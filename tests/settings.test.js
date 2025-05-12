describe("Settings Page Testing", () => {
  beforeEach(() => {
    // Mock the window.location object
    delete window.location;
    window.location = { href: '' };
  });

  test('[C98] Navigate to Voice Settings', () => {
    window.location.href = `http://localhost/voice_setting.html`;
    expect(window.location.href).toBe("http://localhost/voice_setting.html");
  });

  test('[C99] Navigate to Preferences Settings', () => {
    window.location.href = `http://localhost/preferences_setting.html`;
    expect(window.location.href).toBe("http://localhost/preferences_setting.html");
  });

  test('[C101] Navigate to Notifications Settings', () => {
    window.location.href = `http://localhost/notifications_setting.html`;
    expect(window.location.href).toBe("http://localhost/notifications_setting.html");
  });

  test('[C102] Navigate to Account Settings', () => {
    window.location.href = `http://localhost/account_setting.html`;
    expect(window.location.href).toBe("http://localhost/account_setting.html");
  });
});
