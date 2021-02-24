import findShortestPath from '../../src/07_dijkstras_algorithm/01_dijkstras_algorithm.js';

const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
};

const solution = {
  path: [
    ['start', 'b', 2],
    ['b', 'a', 3],
    ['a', 'fin', 1],
  ],
  cost: 6,
};

test('dijkstras_algorithm', () => {
  expect(findShortestPath(graph, 'start', 'fin')).toEqual(solution);
});
