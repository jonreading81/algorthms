import {mergeSort} from './mergeSort';

test('should sort an array', () => {
  expect(mergeSort([1, 8, 3, 10])).toEqual([1, 3, 8, 10]);
});
