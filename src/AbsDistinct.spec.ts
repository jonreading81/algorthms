import {AbsDistinct} from './AbsDistinct';

test('should return the number of absolute distinct values in an array', () => {
  expect(AbsDistinct([-5, -3, -1, 0, 3, 6])).toEqual(5);
  expect(AbsDistinct([-5, -3, -1, 0, 3, 6, 6])).toEqual(5);
  expect(AbsDistinct([-5, -3, -1, 0, 3, 5])).toEqual(4);

  expect(AbsDistinct([0, 1, 3, 5])).toEqual(4);
  expect(AbsDistinct([-5, -3, -1, 0])).toEqual(4);
  expect(AbsDistinct([-10])).toEqual(1);
});
