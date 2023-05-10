import {MinMaxDivision} from './MinMaxDivision';

test('should return the min max sum of a segment', () => {
  expect(MinMaxDivision(3, 5, [2, 1, 5, 1, 2, 2, 2])).toEqual(6);
  expect(MinMaxDivision(1, 10000, [10000, 0, 10000])).toEqual(20000);
  expect(MinMaxDivision(3, 5, [1, 1, 1, 1, 5, 5])).toEqual(5);
  expect(MinMaxDivision(3, 3, [1, 3, 1, 3, 2, 1, 3])).toEqual(5);
});
