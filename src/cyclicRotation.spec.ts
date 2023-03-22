import {cyclicRotation} from './cyclicRotation';

test('should rotate the array n items', () => {
  expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
});

test('should rotate  [1, 2, 3, 4] 4 times', () => {
  expect(cyclicRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});

test('should rotate  [1, 2, 3, 4] 6 times', () => {
  expect(cyclicRotation([1, 2, 3, 4], 8)).toEqual([1, 2, 3, 4]);
});
