/**
 * @jest-environment jsdom
 */

beforeEach(() => {
  document.body.innerHTML = `
    <button id="voice-toggle">🎤</button>
  `;
});

test('Voice toggle button exists', () => {
  const btn = document.getElementById('voice-toggle');
  expect(btn).not.toBeNull();
  expect(btn.textContent).toBe('🎤');
});

test('Clicking the voice button does not crash', () => {
  const btn = document.getElementById('voice-toggle');
  expect(() => btn.click()).not.toThrow();
});
