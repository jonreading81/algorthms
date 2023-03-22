import {FrogRiverOne} from './FrogRiverOne';

test('should determine when the frog can cross the river', () => {
  expect(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
});

test('should determine when the frog cannnot cross the river', () => {
  expect(FrogRiverOne(6, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(-1);
});
