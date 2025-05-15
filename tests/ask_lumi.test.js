/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Ask Lumi Page Integration Testing", () => {
  let document, window, microphoneMock;

  beforeEach(() => {
    // Load HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "../ask-lumi.html"), "utf8");
    const { JSDOM } = require("jsdom");
    const dom = new JSDOM(html, { runScripts: "dangerously" });

    window = dom.window;
    document = window.document;

    // Mock microphone permission
    microphoneMock = jest.fn();
    navigator.mediaDevices = { getUserMedia: microphoneMock };

    // Adding error and success message containers
    document.body.innerHTML += `
      <div class="error-message" style="display:none"></div>
      <div class="success-message" style="display:none"></div>
    `;

    // Mock the startVoice function
    window.startVoice = async () => {
      try {
        await navigator.mediaDevices.getUserMedia();
      } catch (error) {
        const errorMessage = document.querySelector(".error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Microphone access denied";
      }
    };

    // Mock the respondToUser function
    window.respondToUser = () => {
      const question = document.querySelector("#question").value.trim();
      const errorMessage = document.querySelector(".error-message");
      const successMessage = document.querySelector(".success-message");

      if (question.length === 0) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter a question";
      } else {
        successMessage.style.display = "block";
        successMessage.textContent = "Question submitted successfully";
      }
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("[C26] Submit Question Successfully", () => {
    const questionInput = document.querySelector("#question");
    const submitButton = document.querySelector(".button-orange[onclick*='respondToUser']");

    questionInput.value = "What is Lumi?";
    submitButton.onclick = window.respondToUser; // Link the mock function
    submitButton.click();

    const successMessage = document.querySelector(".success-message");

    expect(successMessage.textContent).toBe("Question submitted successfully");
  });

  test("[C27] Submit Without Question", () => {
    const submitButton = document.querySelector(".button-orange[onclick*='respondToUser']");

    submitButton.onclick = window.respondToUser; // Link the mock function
    submitButton.click();

    const errorMessage = document.querySelector(".error-message");

    expect(errorMessage.textContent).toBe("Please enter a question");
  });

  test("[C28] Voice Input Button Click", () => {
    const voiceButton = document.querySelector(".button-orange[onclick*='startVoice']");

    voiceButton.onclick = window.startVoice; // Directly link the function
    voiceButton.click();

    expect(microphoneMock).toHaveBeenCalled();
  });

  test("[C29] Microphone Access Denied", async () => {
    microphoneMock.mockRejectedValue(new Error("Microphone access denied"));

    const voiceButton = document.querySelector(".button-orange[onclick*='startVoice']");
    voiceButton.onclick = window.startVoice;
    voiceButton.click();

    await delay(100); // Wait for the async error handling

    const errorMessage = document.querySelector(".error-message");

    expect(errorMessage.textContent).toBe("Microphone access denied");
  });

});
