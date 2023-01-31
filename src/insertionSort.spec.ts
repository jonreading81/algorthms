import {insertionSort} from './insertionSort';
test('should sort an array of numbers', () => {
  expect(insertionSort([-6, 20, 8, -2, 4])).toEqual([-6, -2, 4, 8, 20]);
});
