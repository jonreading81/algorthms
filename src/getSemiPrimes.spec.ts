import {getSemiPrimes} from './getSemiPrimes';

test('should return an array of semi primes', () => {
  const result = getSemiPrimes(26);

  expect(result).toEqual([4, 6, 9, 10, 14, 15, 21, 22, 25, 26]);
});
