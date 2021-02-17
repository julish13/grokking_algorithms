import getSumLoop from '../../src/04_quicksort/01_loop_sum.js';
import getSumRecursive from '../../src/04_quicksort/02_recursive_sum.js';

const array = [2, 4, 6];
test('loop-sum', () => {
  expect(getSumLoop(array)).toBe(12);
  expect(getSumLoop([])).toBe(0);
});

test('sum-recursive', () => {
  expect(getSumRecursive(array)).toBe(12);
  expect(getSumRecursive([])).toBe(0);
});
