import findGCDOfTwo from './06_euclidean_algorithm.js';

const findGCDOfSet = (array) => {
  if (array.length === 0) return null;

  let result = array[0];
  const newArray = array.slice(1);

  newArray.forEach((element) => {
    result = findGCDOfTwo(result, element);
  });

  return result;
};

export default findGCDOfSet;
