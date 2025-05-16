function sanitizeInput(text) {
  return text.trim().toLowerCase();
}

test('Trim and lowercase input string', () => {
  expect(sanitizeInput('  Hello World  ')).toBe('hello world');
});

test('Handle empty string', () => {
  expect(sanitizeInput('   ')).toBe('');
});
