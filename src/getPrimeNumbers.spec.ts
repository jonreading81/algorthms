import {getPrimeNumbers} from './getPrimeNumbers';

test('should return all the prime numbers in a range', () => {
  expect(getPrimeNumbers(18)).toEqual([1, 2, 3, 5, 7, 11, 13, 17]);
});
