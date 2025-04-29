const { navigate } = require('../js/settings');

test('navigate to voice page', () => {
  expect(navigate('voice_setting')).toBe('voice_setting.html');
});