/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const { navigate } = require('../js/settings');

let html;

beforeAll(() => {
  html = fs.readFileSync(path.resolve(__dirname, '../settings.html'), 'utf8');
  document.documentElement.innerHTML = html.toString();
});

describe('Settings Page', () => {
  test('should have a section title', () => {
    const title = document.querySelector('.section-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toMatch(/Settings/i);
  });

  test('should have setting items', () => {
    const items = document.querySelectorAll('.setting-item');
    expect(items.length).toBeGreaterThan(0);
  });

  test('navigate() function should return correct path', () => {
    expect(navigate('notification')).toBe('notification.html');
    expect(navigate('privacy')).toBe('privacy.html');
  });

  test('logo should be present', () => {
    const logo = document.querySelector('.logo');
    expect(logo).not.toBeNull();
  });
});
