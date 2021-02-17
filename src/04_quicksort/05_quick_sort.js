const sort = (array) => {
  if (array.length < 2) return array;

  const left = [];
  const right = [];

  const base = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < base) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...sort(left), base, ...sort(right)];
};

export default sort;
