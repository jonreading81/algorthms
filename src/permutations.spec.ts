import {permutations} from './permutations';

test('should determines the number of possible arrangements in a collection of items where the order of the selection does matter', () => {
  const result = permutations([1, 2, 3]);

  console.log(result);

  expect(result).toEqual([
    [1, 2, 3],
    [2, 1, 3],
    [2, 3, 1],
    [1, 3, 2],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
