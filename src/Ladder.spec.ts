import {Ladder} from './Ladder';

test('should return the number of ways up the ladder', () => {
  expect(Ladder([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])).toEqual([5, 1, 8, 0, 1]);
});
