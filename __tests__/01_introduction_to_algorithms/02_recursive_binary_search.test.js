import binarySearch from '../../src/01_introduction_to_algorithms/02_recursive_binary_search.js';

const list = [1, 3, 5, 7, 9];

test('recursive-binary-search', () => {
  expect(binarySearch(list, 3)).toEqual(1);
  expect(binarySearch(list, -1)).toEqual(null);
});
