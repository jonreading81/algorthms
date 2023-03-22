import {radixSort} from './radixSort';

test('should sort an array', () => {
  const result = radixSort([201, 1, 1000, 8, 768, 3, 10]);

  expect(result).toEqual([1, 3, 8, 10, 201, 768, 1000]);
});
