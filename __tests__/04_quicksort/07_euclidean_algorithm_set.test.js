import findGCDOfSet from '../../src/04_quicksort/07_euclidean_algorithm_set.js';

test('euclidean-algorithm', () => {
  expect(findGCDOfSet([240, 1680, 640, 160])).toBe(80);
  expect(findGCDOfSet([6, 3, 2])).toBe(1);
  expect(findGCDOfSet([7, 14, 0, 21])).toBe(7);
  expect(findGCDOfSet([7])).toBe(7);
  expect(findGCDOfSet([])).toBe(null);
});
