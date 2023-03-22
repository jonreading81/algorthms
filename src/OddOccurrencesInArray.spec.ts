import {OddOccurrencesInArray} from './OddOccurrencesInArray';

test('should determine the un paired item in an array', () => {
  expect(OddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).toEqual(7);
});
