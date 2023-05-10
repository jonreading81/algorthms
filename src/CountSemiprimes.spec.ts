import {CountSemiprimes} from './CountSemiprimes';

test('should return the number of semi primes in a range', () => {
  expect(CountSemiprimes(26, [1, 4, 16], [26, 10, 20])).toEqual([10, 4, 0]);

  expect(CountSemiprimes(1, [1], [1])).toEqual([0]);
});
