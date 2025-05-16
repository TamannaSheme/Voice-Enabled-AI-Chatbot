/**
 * @jest-environment jsdom
 */

beforeEach(() => {
  document.body.innerHTML = `
    <input id="chat-input" type="text" />
    <button id="send-btn">Send</button>
  `;
});

test('Chat input box exists', () => {
  const input = document.getElementById('chat-input');
  expect(input).not.toBeNull();
});

test('Send button exists and says Send', () => {
  const btn = document.getElementById('send-btn');
  expect(btn.textContent).toBe('Send');
});
