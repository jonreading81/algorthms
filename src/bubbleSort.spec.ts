import {bubbleSort} from './bubbleSort';

test('should sort numbers in ascending order', () => {
  expect(bubbleSort([2, 8, 4, 2, 3, 6])).toEqual([2, 2, 3, 4, 6, 8]);
});
