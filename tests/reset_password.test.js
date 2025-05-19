// tests/reset_password.test.js

describe('resetPassword(oldPass, newPass, confirmPass)', () => {
  function resetPassword(oldPass, newPass, confirmPass) {
    if (!oldPass || !newPass || !confirmPass) return 'All fields required';
    if (newPass !== confirmPass) return 'Passwords do not match';
    if (oldPass === newPass) return 'New password must be different';
    return 'Password successfully changed';
  }

  test('valid password change', () => {
    expect(resetPassword('old123', 'new456', 'new456')).toBe('Password successfully changed');
  });

  test('password mismatch error', () => {
    expect(resetPassword('old123', 'new456', 'wrong456')).toBe('Passwords do not match');
  });

  test('same old and new password', () => {
    expect(resetPassword('pass123', 'pass123', 'pass123')).toBe('New password must be different');
  });

  test('missing fields error', () => {
    expect(resetPassword('', 'new456', 'new456')).toBe('All fields required');
  });
});