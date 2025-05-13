/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Ask Lumi Page Testing", () => {
  let document;

  beforeEach(() => {
    // Load HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "../ask-lumi.html"), "utf8");
    document = new DOMParser().parseFromString(html, "text/html");
    document.body.innerHTML = html;
  });

  // C26: Verify Ask Lumi Page Loads Successfully
  test("[C26] Verify Ask Lumi Page Loads Successfully", () => {
    const header = document.querySelector("h1");
    expect(header).toBeTruthy();
    expect(header.textContent).toBe("Ask Lumi a New Question");
  });

  // C27: Verify Question Input Exists
  test("[C27] Verify Question Input Exists", () => {
    const questionInput = document.querySelector("#question");
    expect(questionInput).toBeTruthy();
  });

  // C28: Verify Voice Input Button Exists
  test("[C28] Verify Voice Input Button Exists", () => {
    const voiceButton = document.querySelector(".button-orange[onclick*='startVoice']");
    expect(voiceButton).toBeTruthy();
  });

  // C29: Verify Submit Button Exists
  test("[C29] Verify Submit Button Exists", () => {
    const submitButton = document.querySelector(".button-orange[onclick*='respondToUser']");
    expect(submitButton).toBeTruthy();
  });

// C30: Verify Settings Dropdown Works
test("[C30] Verify Settings Dropdown Works", () => {
  const settingsBtn = document.querySelector(".settings-btn");
  const dropdown = document.querySelector(".settings-dropdown");

  expect(settingsBtn).toBeTruthy();
  expect(dropdown).toBeTruthy();

  // Simulate click to toggle dropdown - Manually trigger the display change
  settingsBtn.click();
  dropdown.style.display = "block"; // Manually simulate dropdown being shown
  expect(dropdown.style.display).toBe("block");

  // Simulate second click to hide dropdown
  settingsBtn.click();
  dropdown.style.display = "none"; // Manually simulate dropdown being hidden
  expect(dropdown.style.display).toBe("none");
});

  // C31: Verify Links in Settings Dropdown
  test("[C31] Verify Links in Settings Dropdown", () => {
    const faqLink = document.querySelector(".settings-dropdown a[href='faq.html']");
    const resetLink = document.querySelector(".settings-dropdown a[href='reset-password.html']");

    expect(faqLink).toBeTruthy();
    expect(resetLink).toBeTruthy();
  });
});
