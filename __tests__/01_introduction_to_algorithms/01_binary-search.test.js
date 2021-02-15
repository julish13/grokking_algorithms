import binarySearch from '../../src/01_introduction_to_algorithms/01_binary-search.js';

const list = [1, 3, 5, 7, 9];

test('binary-searchs', () => {
  expect(binarySearch(list, 3)).toEqual(1);
  expect(binarySearch(list, -1)).toEqual(null);
});
