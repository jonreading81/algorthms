import {binarySort} from './binarySort';

test('should sort 1s and 0s', () => {
  expect(binarySort([0, 1, 1, 0, 0, 1])).toEqual([1, 1, 1, 0, 0, 0]);
});
