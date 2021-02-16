const findSmallest = (array) => {
  let smallest = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (arrayParam) => {
  const array = arrayParam.slice();
  const result = [];
  while (array.length > 0) {
    const smallestIndex = findSmallest(array);
    result.push(...array.splice(smallestIndex, 1));
  }

  return result;
};

export default selectionSort;
