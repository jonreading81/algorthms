import {ChocolatesByNumbers} from './ChocolatesByNumbers';

test('should calculate the number of chocs you will esat until you meet a wrapper', () => {
  expect(ChocolatesByNumbers(10, 2)).toEqual(5);
  expect(ChocolatesByNumbers(15, 2)).toEqual(15);
  expect(ChocolatesByNumbers(4, 3)).toEqual(4);
  // expect(ChocolatesByNumbers(10, 4)).toEqual(5);
  expect(ChocolatesByNumbers(1, 2)).toEqual(1);

  expect(ChocolatesByNumbers(1, 1000000000)).toEqual(1);
});
