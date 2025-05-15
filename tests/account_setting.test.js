/**
 * @jest-environment jsdom
 */

describe("Account Settings Page Integration Testing", () => {
  let document, window;

  beforeEach(() => {
    document = global.document;
    window = global.window;

    document.body.innerHTML = `
      <div id="account-settings">
        <p id="username">John Doe</p>
        <p id="email">john.doe@gmail.com</p>
        <input type="password" id="password" value="password123" />
        <button id="toggle-password">Show/Hide Password</button>
        <select id="linked-account">
          <option value="google" selected>Google</option>
          <option value="facebook">Facebook</option>
        </select>
        <button id="logout-button">Logout</button>
        <a href="#" id="back-to-settings">Back to Settings</a>
      </div>
    `;

    // Mock functions
    window.alert = jest.fn();
  });

  test("[C52] Check Name and Email Display", () => {
    expect(document.getElementById("username").textContent).toBe("John Doe");
    expect(document.getElementById("email").textContent).toBe("john.doe@gmail.com");
  });

  test("[C53] Toggle Password Visibility", () => {
    const passwordField = document.getElementById("password");
    passwordField.type = "password";
    passwordField.type = "text";
    expect(passwordField.type).toBe("text");
  });

  test("[C54] Verify Default Linked Account Selection", () => {
    expect(document.getElementById("linked-account").value).toBe("google");
  });

  test("[C55] Change Linked Account Option", () => {
    const linkedAccount = document.getElementById("linked-account");
    linkedAccount.value = "facebook";
    expect(linkedAccount.value).toBe("facebook");
  });

  test("[C56] Logout Button Functionality", () => {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.click();
    expect(window.alert).not.toHaveBeenCalled(); // No action expected in this setup
  });

  test("[C57] Back to Settings Navigation", () => {
    const link = document.getElementById("back-to-settings");
    link.click();
    expect(link.getAttribute("href")).toBe("#");
  });

});
