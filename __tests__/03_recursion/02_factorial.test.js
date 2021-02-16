import factorial from '../../src/03_recursion/02_factorial.js';

test('factorial', () => {
  expect(factorial(5)).toEqual(120);
  expect(factorial(0)).toEqual(1);
});
