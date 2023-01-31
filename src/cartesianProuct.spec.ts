import {cartesianProuct} from './cartesianProduct';

test('should produce an array of pairs', () => {
  expect(cartesianProuct([1, 2], [3, 4])).toEqual([
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
  ]);
});

test('should produce an array of pairs when the arrays are different sizes', () => {
  expect(cartesianProuct([1, 2], [3, 4, 5])).toEqual([
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
  ]);
});
