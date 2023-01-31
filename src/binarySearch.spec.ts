import {binarySearch} from './binarySearch';

test('should return -1 when the items is not found', () => {
  expect(binarySearch([1, 4, 5, 8, 9], 10)).toEqual(-1);
});

test('should return -1 when the items is not found', () => {
  expect(binarySearch([1, 4, 5, 8, 10, 12], 10)).toEqual(4);
});
