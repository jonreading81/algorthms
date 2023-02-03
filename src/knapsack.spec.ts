import {knapsackRecursive} from './knapsack';

test('should determine the maximum value of items for a specified weight', () => {
  const items = [
    {
      weight: 5,
      value: 60,
    },
    {
      weight: 3,
      value: 50,
    },
    {
      weight: 4,
      value: 70,
    },
    {
      weight: 2,
      value: 40,
    },
    {
      weight: 1,
      value: 40,
    },
  ];

  expect(knapsackRecursive(items, 5)).toEqual(110);
});
