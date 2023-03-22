import {MaxCounters} from './MaxCounters';

test('should return the update counters', () => {
  expect(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
});
