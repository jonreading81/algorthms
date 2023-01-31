import {staircaseProblem} from './staircaseProblem';

test('should caluclate the number of possible ways to climb the stairs', () => {
  expect(staircaseProblem(4)).toEqual(5);
  expect(staircaseProblem(8)).toEqual(34);
});
