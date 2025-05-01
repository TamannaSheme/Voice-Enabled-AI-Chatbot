/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './voice_setting.html'), 'utf8');

describe('Voice Settings Page', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = html;
    require('./voice_setting.js'); // load JS functionality
    container = document.body;
  });

  test('should show alert on Save button click', () => {
    window.alert = jest.fn();  // mock alert
    const saveBtn = container.querySelector('#save-btn');
    saveBtn.click();
    expect(window.alert).toHaveBeenCalledWith('Voice Input settings saved successfully!');
  });

  test('Enable Voice checkbox should be checked by default', () => {
    const voiceCheckbox = container.querySelector('#enable-voice');
    expect(voiceCheckbox.checked).toBe(true);
  });

  test('should allow selecting different speech modes', () => {
    const speechRadios = container.querySelectorAll('input[name="speech-mode"]');
    speechRadios[0].click();
    expect(speechRadios[0].checked).toBe(true);
    expect([...speechRadios].filter(r => r.checked).length).toBe(1);
  });

  test('back link should go to settings.html', () => {
    const backLink = container.querySelector('.back-link a');
    expect(backLink.getAttribute('href')).toBe('settings.html');
  });
});
