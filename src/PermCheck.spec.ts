import {PermCheck} from './PermCheck';

test('should return 1 when a permuatation is found', () => {
  expect(PermCheck([2, 1, 3, 4])).toEqual(1);
});

test('should return 0 when a permuatation is not found', () => {
  expect(PermCheck([2, 1, 3, 5])).toEqual(0);
});

test('should return 0 when a permuatation is not found beacuse of a duplicate', () => {
  expect(PermCheck([2, 1, 3, 3])).toEqual(0);
});
