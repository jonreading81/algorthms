import {CountNonDivisible} from './CountNonDivisible';

test('should return the number of no divisor from a set of values', () => {
  //const noDivisors = CountNonDivisible([3, 1, 2, 3, 6]);

  expect(CountNonDivisible([3, 1, 2, 3, 6])).toEqual([2, 4, 3, 2, 0]);

  expect(CountNonDivisible([2, 4])).toEqual([1, 0]);
});
