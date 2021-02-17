const findGCDOfTwo = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  const residual = number1 % number2;

  return findGCDOfTwo(number2, residual);
};

export default findGCDOfTwo;
