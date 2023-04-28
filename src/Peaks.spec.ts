import {Peaks} from './Peaks';

test('should return the number of blocks an array of values can be turned into to', () => {
  expect(Peaks([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
  expect(Peaks([1, 1, 1])).toEqual(0);
  expect(Peaks([0, 1, 0])).toEqual(1);
  expect(Peaks([0, 1, 0, 0, 1, 0])).toEqual(2);
});
