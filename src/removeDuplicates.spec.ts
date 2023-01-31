import {removeDuplicates} from './removeDuplicates';

test('should remove duplicates froma an array', () => {
  expect(removeDuplicates([1, 1, 3, 1, 2, 4, 4])).toEqual([1, 3, 2, 4]);
});
