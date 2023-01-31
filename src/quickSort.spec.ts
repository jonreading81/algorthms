import {quickSort} from './quickSort';

test('should sort an array of numbers', () => {
  expect(quickSort([-6, 20, 8, -2, 4])).toEqual([-6, -2, 4, 8, 20]);
});
