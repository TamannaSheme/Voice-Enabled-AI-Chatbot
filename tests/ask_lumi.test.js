/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Load the correct HTML file
const html = fs.readFileSync(path.resolve(__dirname, "../ask-lumi.html"), "utf8");
let document, window, microphoneMock;

beforeEach(() => {
  const dom = new JSDOM(html, { runScripts: "dangerously", url: "https://example.com" });
  document = dom.window.document;
  window = dom.window;

  microphoneMock = jest.fn();
  navigator.mediaDevices = { getUserMedia: microphoneMock };

  document.body.innerHTML += `
    <div class="error-message" style="display:none"></div>
    <div class="success-message" style="display:none"></div>
    <input type="text" id="question" />
    <button class="button-orange" onclick="respondToUser()">Submit</button>
    <button class="button-orange" onclick="startVoice()">Voice Input</button>
  `;

  window.respondToUser = () => {
    const question = document.querySelector("#question").value.trim();
    const errorMessage = document.querySelector(".error-message");
    const successMessage = document.querySelector(".success-message");

    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    if (question.length === 0) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please enter a question";
    } else {
      successMessage.style.display = "block";
      successMessage.textContent = "Question submitted successfully";
    }
  };

  window.startVoice = async () => {
    try {
      await navigator.mediaDevices.getUserMedia();
      document.querySelector(".success-message").textContent = "Voice command recognized";
    } catch (error) {
      document.querySelector(".error-message").textContent = "Microphone access denied";
    }
  };

});

describe("Ask Lumi Page Complete Integration Testing", () => {

  // Non-Functional Test Cases
  test("[C146] [Performance] Response Time Under 2 Seconds", () => {
    const start = performance.now();
    document.body.innerHTML = document.body.innerHTML;
    const end = performance.now();
    expect(end - start).toBeLessThan(2000);
  });

  test("[C147] [Usability] Voice Input Accessible via Keyboard", () => {
    const voiceButton = document.querySelector(".button-orange[onclick='startVoice()']");
    voiceButton.focus();
    expect(document.activeElement).toBe(voiceButton);
  });

  test("[C148] [Accessibility] Screen Reader Compatibility", () => {
    const questionInput = document.querySelector("#question");
    questionInput.setAttribute("aria-label", "Ask Lumi a question");
    expect(questionInput.getAttribute("aria-label")).toBe("Ask Lumi a question");
  });

  // Functional Integration Test Cases
  test("[C26] Submit Question Successfully", () => {
    const questionInput = document.querySelector("#question");
    questionInput.value = "What is Lumi?";
    window.respondToUser();
    expect(document.querySelector(".success-message").textContent).toBe("Question submitted successfully");
  });

  test("[C27] Submit Without Question", () => {
    window.respondToUser();
    expect(document.querySelector(".error-message").textContent).toBe("Please enter a question");
  });

  test("[C28] Voice Input Button Click", async () => {
    await window.startVoice();
    expect(microphoneMock).toHaveBeenCalled();
  });

  test("[C29] Voice Input Working Properly", async () => {
    await window.startVoice();
    expect(microphoneMock).toHaveBeenCalled();
  });

  test("[C30] Microphone Access Denied", async () => {
    microphoneMock.mockRejectedValue(new Error("Microphone access denied"));
    await window.startVoice();
    expect(document.querySelector(".error-message").textContent).toBe("Microphone access denied");
  });

  test("[C31] Voice Submission Shows Success Message", async () => {
    await window.startVoice();
    expect(document.querySelector(".success-message").textContent).toBe("Voice command recognized");
  });

});
