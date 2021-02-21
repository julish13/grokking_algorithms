const search = (graph, seed, check) => {
  let queue = [seed];
  const searched = [];

  while (queue.length > 0) {
    const person = queue[0];
    if (!searched.includes(person)) {
      if (check(person)) return person;
      searched.push(person);
      queue.push(...graph[person]);
    }
    queue = queue.slice(1);
  }

  return null;
};

export default search;
