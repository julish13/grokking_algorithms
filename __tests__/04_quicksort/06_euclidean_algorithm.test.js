import findGCDOfTwo from '../../src/04_quicksort/06_euclidean_algorithm.js';

test('euclidean-algorithm', () => {
  expect(findGCDOfTwo(1680, 640)).toBe(80);
  expect(findGCDOfTwo(13, 29)).toBe(1);
  expect(findGCDOfTwo(0, 29)).toBe(29);
  expect(findGCDOfTwo(29, 0)).toBe(29);
});
