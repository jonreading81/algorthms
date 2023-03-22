import {countUniqueValues} from './countUniqueValues';

test('should return the number of unique numbers in a sorted array', () => {
  expect(countUniqueValues([1, 1, 2, 3, 4, 4, 5, 6, 8, 8, 8, 9])).toEqual(8);
});

test('should return 0 for an empty array', () => {
  expect(countUniqueValues([])).toEqual(0);
});

test('example using negative numbers', () => {
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4);
});

test('example using 2 numbers', () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
});
