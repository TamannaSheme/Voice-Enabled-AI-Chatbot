/**
 * Created by Afreen Mohammed
 * Core Logic Test
 */
function add(x, y) {
  return x + y;
}

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
