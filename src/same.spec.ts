import {same} from './same';

test('should return true when values in array 1 are found squared in array 2', () => {
  expect(same([1, 2, 4], [16, 4, 1])).toEqual(true);
});

test('should return false when values in array 1 are not found squared in array 2', () => {
  expect(same([1, 2, 3], [1, 9])).toEqual(false);
});

test('should return false when values in array 1 are not found squared in array 2 with the correct frequency', () => {
  expect(same([1, 2, 1], [4, 4, 1])).toEqual(false);
});
