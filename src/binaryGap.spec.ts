import {binaryGap} from './binaryGap';

test('should solve 9 to 2', () => {
  expect(binaryGap(9)).toEqual(2);
});

test('should solve 32 to 0', () => {
  expect(binaryGap(32)).toEqual(0);
});

test('should solve 1041 to 5', () => {
  expect(binaryGap(1041)).toEqual(5);
});
