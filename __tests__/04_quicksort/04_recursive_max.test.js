import getMax from '../../src/04_quicksort/04_recursive_max.js';

const array = [2, 4, 6, 7];
test('recursive-count', () => {
  expect(getMax(array)).toBe(7);
  expect(getMax([])).toBe(null);
});
