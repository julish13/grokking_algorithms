const getSum = (array) => {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + getSum(array.slice(1));
};

export default getSum;
