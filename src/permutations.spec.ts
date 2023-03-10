import {permutations} from './permutations';

test('should determines the number of possible arrangements in a collection of items where the order of the selection does matter', () => {
  expect(permutations([1, 2, 3])).toEqual(
    expect.arrayContaining([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  );
});
