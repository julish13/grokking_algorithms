import _ from 'lodash';

const setCosts = (graph, start) => {
  const costs = new Map();
  const rest = Object.keys(graph).filter((key) => key !== start);
  costs.set(start, 0);
  return rest.reduce((acc, node) => {
    acc.set(node, Infinity);
    return acc;
  }, costs);
};

const findLowestCostNode = (costs, processed) => {
  const entries = Array.from(costs.entries());
  const notVisited = entries.filter(([key]) => !processed.includes(key));

  if (notVisited.length === 0) {
    return null;
  }
  const [key] = _.minBy(notVisited, ([, value]) => value);
  return key;
};

const createPath = (graph, start, end, parents, path = []) => {
  const [step] = Object.entries(parents).find(([, parent]) => parent === start);

  path.push([start, step, graph[start][step]]);
  if (step === end) {
    return path;
  }
  return createPath(graph, step, end, parents, path);
};

const findShortestPath = (graph, start, end) => {
  const costs = setCosts(graph, start);
  const parents = {};
  const processed = [];

  let node = findLowestCostNode(costs, processed);
  while (node !== null) {
    const neighbors = Object.keys(graph[node]);
    for (let i = 0; i < neighbors.length; i += 1) {
      const neighbor = neighbors[i];
      const cost = costs.get(neighbor);
      const newCost = costs.get(node) + graph[node][neighbor];

      if (newCost < cost) {
        costs.set(neighbor, newCost);
        parents[neighbor] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }

  const path = createPath(graph, start, end, parents);

  return {
    path,
    cost: costs.get(end),
  };
};

export default findShortestPath;
