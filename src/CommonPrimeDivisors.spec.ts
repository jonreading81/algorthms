import {solution} from './CommonPrimeDivisors';

test('should return the number of common prime divisors', () => {
  expect(solution([15, 10, 3], [75, 30, 5])).toEqual(1);
  expect(solution([2, 1, 2], [1, 2, 2])).toEqual(1);
});
