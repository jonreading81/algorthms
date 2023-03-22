import {FrogJmp} from './FrogJmp';

test('should claculate the jumps required to get to the distance with exactly 1 jump', () => {
  expect(FrogJmp(10, 40, 30)).toEqual(1);
});

test('should claculate the jumps required to get to the distance with 3 jumps', () => {
  expect(FrogJmp(10, 85, 30)).toEqual(3);
});
