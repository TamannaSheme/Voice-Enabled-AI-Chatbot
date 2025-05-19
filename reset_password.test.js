// reset_password.test.js

describe('Reset Password Logic', () => {
  function resetPassword(oldPass, newPass, confirmPass) {
    if (newPass !== confirmPass) return 'Passwords do not match';
    if (!oldPass || !newPass) return 'Missing fields';
    return 'Password changed';
  }

  test('should change password when valid', () => {
    expect(resetPassword('abc123', 'xyz456', 'xyz456')).toBe('Password changed');
  });

  test('should fail when passwords mismatch', () => {
    expect(resetPassword('abc123', 'xyz456', 'xyz123')).toBe('Passwords do not match');
  });

  test('should fail when field missing', () => {
    expect(resetPassword('', 'xyz456', 'xyz456')).toBe('Missing fields');
  });
});