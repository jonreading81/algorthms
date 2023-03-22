import {MissingInteger} from './MissingInteger';

test('should return the samllest postive integer not present in the array', () => {
  expect(MissingInteger([1, 2, 3, 5])).toEqual(4);
});
