const binarySearch = (list, item, low = 0, high = list.length - 1) => {
  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];

  if (guess === item) {
    return mid;
  }

  if (guess < item) {
    return binarySearch(list, item, mid + 1, high);
  }

  if (guess > item) {
    return binarySearch(list, item, low, mid - 1);
  }

  return null;
};

export default binarySearch;
