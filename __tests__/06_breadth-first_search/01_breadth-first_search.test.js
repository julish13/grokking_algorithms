import search from '../../src/06_breadth-first_search/01_breadth-first_search.js';

const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const check1 = (name) => name[name.length - 1] === 'm';
const check2 = (name) => name.length === 2;

test('breadth-first_search', () => {
  expect(search(graph, 'you', check1)).toBe('thom');
});

test('breadth-first_search', () => {
  expect(search(graph, 'you', check2)).toBe(null);
});
