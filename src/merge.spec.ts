import {merge} from './merge';

test('should merge to soreted arrays', () => {
  expect(merge([1, 3, 5, 6, 20], [2, 4, 7, 8, 9])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 20,
  ]);
});
