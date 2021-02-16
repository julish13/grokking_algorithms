import selectionSort from '../../src/02_selection_sort/01_selection_sort.js';

const list = [5, 3, 6, 2, 10];

test('selection-sort', () => {
  expect(selectionSort(list)).toEqual([2, 3, 5, 6, 10]);
});
