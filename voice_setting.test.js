// voice_setting.test.js

describe('Voice Settings Toggle', () => {
  function toggleVoice(enabled) {
    return enabled ? 'Voice Enabled' : 'Voice Disabled';
  }

  test('enables voice setting', () => {
    expect(toggleVoice(true)).toBe('Voice Enabled');
  });

  test('disables voice setting', () => {
    expect(toggleVoice(false)).toBe('Voice Disabled');
  });
});