import {combinations} from './combinations';

test('should determines the number of possible arrangements in a collection of items where the order of the selection does not matter', () => {
  const result = combinations([1, 2, 3]);

  expect(result).toEqual([
    [],
    [3],
    [2],
    [3, 2],
    [1],
    [3, 1],
    [2, 1],
    [3, 2, 1],
  ]);
});
