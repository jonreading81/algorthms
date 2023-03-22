import {pivotHelper} from './pivotHelper';

test('should return the index for the pivot', () => {
  expect(pivotHelper([5, 1, 2, 3, 8, 9, 10])).toEqual(3);
});
