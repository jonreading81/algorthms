import {findSum} from './findSum';

test('should determine if any 2 numbers in an array do not equal the sum specified', () => {
  expect(findSum([6, 4, 3, 2], 11)).toEqual(false);
});

test('should determine if any 2 numbers in an array equal the sum specified', () => {
  expect(findSum([6, 4, 3, 5], 11)).toEqual(true);
});
