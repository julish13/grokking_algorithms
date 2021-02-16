import jest from 'jest-mock';
import countdown from '../../src/03_recursion/01_countdown.js';

test('countdown', () => {
  console.log = jest.fn();
  countdown(5);
  expect(console.log.mock.calls.flat()).toEqual([5, 4, 3, 2, 1, 0]);
});
