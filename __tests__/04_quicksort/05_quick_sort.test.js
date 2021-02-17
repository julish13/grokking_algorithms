import sort from '../../src/04_quicksort/05_quick_sort.js';

test('recursive-count', () => {
  expect(sort([11, 2, 7, 6, 2, 4])).toEqual([2, 2, 4, 6, 7, 11]);
  expect(sort([])).toEqual([]);
  expect(sort([1])).toEqual([1]);
});
