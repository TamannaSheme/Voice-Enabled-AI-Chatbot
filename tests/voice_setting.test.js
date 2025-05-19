// tests/voice_setting.test.js

describe('toggleVoiceSetting(enabled)', () => {
  function toggleVoiceSetting(enabled) {
    return enabled ? 'Voice Enabled' : 'Voice Disabled';
  }

  test('enables voice', () => {
    expect(toggleVoiceSetting(true)).toBe('Voice Enabled');
  });

  test('disables voice', () => {
    expect(toggleVoiceSetting(false)).toBe('Voice Disabled');
  });

  test('default state false returns disabled', () => {
    expect(toggleVoiceSetting(0)).toBe('Voice Disabled');
  });

  test('non-boolean input still returns correct status', () => {
    expect(toggleVoiceSetting('yes')).toBe('Voice Enabled');
  });
});