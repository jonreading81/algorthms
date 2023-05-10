import {FibFrog} from './FibFrog';

test('should determine the least number of steps the frong can make acrros the river', () => {
  expect(FibFrog([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])).toEqual(3);

  // expect(FibFrog([0, 0, 0, 1, 1, 0, 1, 0, 0, 0])).toEqual(-1);

  // expect(FibFrog([0, 0, 1, 0])).toEqual(1);
  // expect(FibFrog([0, 0, 0, 1, 0])).toEqual(-1);
  // expect(FibFrog([1, 1])).toEqual(1);

  // expect(FibFrog([0, 0, 0, 0, 0, 0, 0])).toEqual(1);
  // expect(FibFrog([0, 0, 0, 0, 1])).toEqual(2);
});
