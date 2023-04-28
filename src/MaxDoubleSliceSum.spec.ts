import {MaxDoubleSliceSum} from './MaxDoubleSliceSum';
import {maxSliceSum} from './MaxSliceSum';

test('should return the max double slice for an array of numbers', () => {
  const values = [3, 2, 6, -1, 4, 5, -1, 2];

  expect(MaxDoubleSliceSum(values)).toEqual(17);
});
