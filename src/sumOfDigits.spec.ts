import {sumOfDigits} from './sumOfDigits';

test('should calculate the sum of the digits when 1 iteration is required', () => {
  expect(sumOfDigits(123)).toEqual(6);
});

test('should calculate the sum of the digits when 2 iterations are  required', () => {
  expect(sumOfDigits(173)).toEqual(2);
});

test('should calculate the sum of the digits when 3 iterations are  required', () => {
  expect(sumOfDigits(726)).toEqual(6);
});
