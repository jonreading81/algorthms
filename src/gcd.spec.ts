import {gcd} from './gcd';

test('should return 4 for the GCD of 12 and 8', () => {
  expect(gcd(12, 8)).toEqual(4);
});

test('should return 6 for the GCD of 270 and 192', () => {
  expect(gcd(270, 192)).toEqual(6);
});

test('should return number when the numbers are equal', () => {
  expect(gcd(10, 10)).toEqual(10);
});
