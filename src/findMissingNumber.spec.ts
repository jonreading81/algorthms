import {findMissingNumber} from './findMissingNumber';

test('should find the mssing number from an array', () => {
  expect(findMissingNumber([5, 2, 6, 1, 3, 7], 7)).toEqual(4);
});

test('should return -1 when there is not a number missing', () => {
  expect(findMissingNumber([5, 2, 6, 1, 3, 7, 4], 7)).toEqual(-1);
});
