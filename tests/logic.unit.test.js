// tests/logic.unit.test.js

describe('add(x, y)', () => {
  function add(x, y) {
    return x + y;
  }

  test('adds 10 + 5 = 15', () => {
    expect(add(10, 5)).toBe(15);
  });

  test('adds -2 + -3 = -5', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds 0 + 7 = 7', () => {
    expect(add(0, 7)).toBe(7);
  });

  test('adds 1.5 + 2.5 = 4.0', () => {
    expect(add(1.5, 2.5)).toBe(4.0);
  });

  test('adds 100 + (-50) = 50', () => {
    expect(add(100, -50)).toBe(50);
  });
});