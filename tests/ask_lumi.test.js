/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, 'ask-lumi.html'), 'utf8');
let dom;
let container;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
  container = dom.window.document.body;
  dom.window.SpeechRecognition = jest.fn().mockImplementation(() => ({
    start: jest.fn(),
    onresult: jest.fn(),
    onerror: jest.fn(),
  }));
  dom.window.speechSynthesis = {
    speak: jest.fn(),
  };

  // Load the JS file and make sure it attaches functions to window
  const script = fs.readFileSync(path.resolve(__dirname, '../js/ask-lumi.js'), 'utf8');
  const scriptElement = dom.window.document.createElement("script");
  scriptElement.textContent = script;
  dom.window.document.body.appendChild(scriptElement);
});

describe("Ask Lumi Page Testing", () => {
  test("C26 - Submit Question Successfully", () => {
    const questionBox = container.querySelector("#question");
    const chatMessages = container.querySelector("#chat-messages");
    questionBox.value = "What is AI?";
    
    // Call the function directly
    dom.window.respondToUser();
    
    expect(chatMessages.innerHTML).toContain("ME");
    expect(chatMessages.innerHTML).toContain("What is AI?");
  });

  test("C27 - Submit Without Question", () => {
    const questionBox = container.querySelector("#question");
    questionBox.value = "";
    const alertMock = jest.spyOn(dom.window, 'alert').mockImplementation(() => {});
    
    dom.window.respondToUser();
    
    expect(alertMock).toHaveBeenCalledWith("Please enter a question before submitting.");
    alertMock.mockRestore();
  });

  test("C28 - Voice Input Button Click", () => {
    const voiceButton = container.querySelector(".button-orange");
    fireEvent.click(voiceButton);
    
    expect(dom.window.SpeechRecognition).toHaveBeenCalled();
  });

  test("C29 - Voice Input Working Properly", () => {
    const questionBox = container.querySelector("#question");
    const recognitionMock = {
      start: jest.fn(),
      onresult: jest.fn(),
      onerror: jest.fn(),
    };
    dom.window.SpeechRecognition = jest.fn().mockReturnValue(recognitionMock);
    
    dom.window.startVoice("question");
    recognitionMock.onresult({ results: [[{ transcript: "Hello Lumi" }]] });
    
    expect(questionBox.value).toBe("Hello Lumi");
  });

  test("C30 - Microphone Access Denied", () => {
    const recognitionMock = {
      start: jest.fn(),
      onerror: jest.fn(),
    };
    dom.window.SpeechRecognition = jest.fn().mockReturnValue(recognitionMock);

    dom.window.startVoice("question");
    recognitionMock.onerror({ error: "not-allowed" });

    const alertMock = jest.spyOn(dom.window, 'alert').mockImplementation(() => {});
    expect(alertMock).toHaveBeenCalledWith("Voice input error: not-allowed");
    alertMock.mockRestore();
  });

  test("C31 - Voice Submission Shows Success Message", async () => {
    const questionBox = container.querySelector("#question");
    const chatMessages = container.querySelector("#chat-messages");
    questionBox.value = "Hello Lumi";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ reply: "Hello User" }),
      })
    );

    await dom.window.respondToUser();
    expect(chatMessages.innerHTML).toContain("Hello User");
  });

  test("C32 - UI Load Check", () => {
    const settingsBtn = container.querySelector(".settings-btn");
    const dropdown = container.querySelector("#settingsDropdown");
    
    fireEvent.click(settingsBtn);
    expect(dropdown.style.display).toBe("block");

    fireEvent.click(settingsBtn);
    expect(dropdown.style.display).toBe("none");
  });
});
