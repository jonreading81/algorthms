import {NailingPlanks} from './NailingPlanks';

test('should determine the minimum number of nail required to anil all planks', () => {
  expect(NailingPlanks([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])).toEqual(
    4
  );
  //expect(NailingPlanks([2], [2], [1])).toEqual(-1);
});
