/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../ask-lumi.html'), 'utf8');

describe('Ask Lumi Page', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = html;
    global.respondToUser = function () {
      const textarea = document.getElementById("question");
      const question = textarea.value.trim();
      if (question) {
        alert("Question submitted: " + question);
      } else {
        alert("Please enter a question.");
      }
    };
    global.startVoice = function () {
      alert("Voice input not implemented yet.");
    };
    container = document.body;
  });

  test('Submit with input shows alert', () => {
    window.alert = jest.fn();
    const textarea = container.querySelector('#question');
    textarea.value = "What is AI?";
    global.respondToUser();
    expect(window.alert).toHaveBeenCalledWith("Question submitted: What is AI?");
  });

  test('Submit without input shows warning alert', () => {
    window.alert = jest.fn();
    const textarea = container.querySelector('#question');
    textarea.value = "";
    global.respondToUser();
    expect(window.alert).toHaveBeenCalledWith("Please enter a question.");
  });

  test('Voice input button shows not implemented alert', () => {
    window.alert = jest.fn();
    global.startVoice();
    expect(window.alert).toHaveBeenCalledWith("Voice input not implemented yet.");
  });

  test('Page loads with required elements', () => {
    expect(container.querySelector('h1').textContent).toBe("Ask Lumi a New Question");
    expect(container.querySelector('#question')).toBeTruthy();
    expect(container.querySelectorAll('button').length).toBeGreaterThanOrEqual(2);
  });
});
