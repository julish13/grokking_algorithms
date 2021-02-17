const getMax = (array, max = array.length === 0 ? null : array[0]) => {
  if (array.length === 0) return max;

  const newMax = max > array[0] ? max : array[0];

  if (array.length === 1) {
    return newMax;
  }

  return getMax(array.slice(1), newMax);
};

export default getMax;
