import {Flags} from './Flags';

test('should determine the number of flags that can be placed on peaks', () => {
  expect(Flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
  expect(Flags([0, 0, 0, 0, 0, 1, 0, 1, 0, 1])).toEqual(2);
  expect(Flags([1, 1])).toEqual(0);
  expect(Flags([0, 1, 0])).toEqual(1);
});
