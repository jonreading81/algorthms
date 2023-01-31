import {power} from './power';

test('should calculate the result of a base an exponent of 1', () => {
  expect(power(2, 1)).toEqual(2);
});

test('should calculate the result of a base an exponent of 2', () => {
  expect(power(2, 2)).toEqual(4);
});

test('should calculate the result of a base an exponent of 3', () => {
  expect(power(2, 3)).toEqual(8);
});

test('should calculate the result of a base an exponent of 4', () => {
  expect(power(2, 4)).toEqual(16);
});
