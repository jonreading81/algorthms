import {anagram} from './anagram';

test('should return true if the letters in a can be rearraged to form b', () => {
  expect(anagram('cinema', 'iceman')).toEqual(true);
});

test('should return false if the letters in a cannot be rearraged to form b', () => {
  expect(anagram('car', 'art')).toEqual(false);
});
