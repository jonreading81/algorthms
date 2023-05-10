import {CountDistinctSlices} from './CountDistinctSlices';

test('should return the number of distinct slices', () => {
  expect(CountDistinctSlices(5, [3, 4, 5, 5, 2])).toEqual(9);
  expect(CountDistinctSlices(5, [1])).toEqual(1);
  expect(CountDistinctSlices(5, [1, 1, 1, 1])).toEqual(4);
  expect(CountDistinctSlices(5, [1, 1, 2, 2])).toEqual(5);
});
