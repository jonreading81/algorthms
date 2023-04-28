import {maxSliceSum} from './MaxSliceSum';

test('should find the maximum slice for an array of number', () => {
  expect(maxSliceSum([3, 2, -6, 4, 0])).toEqual(5);
});

test('should find the maximum slice for an array of negatice numbers', () => {
  expect(maxSliceSum([-10, -5])).toEqual(-5);
});
