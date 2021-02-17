import getCount from '../../src/04_quicksort/03_recursive_count.js';

const array = [2, 4, 6, 7];
test('recursive-count', () => {
  expect(getCount(array)).toBe(4);
  expect(getCount([])).toBe(0);
});
