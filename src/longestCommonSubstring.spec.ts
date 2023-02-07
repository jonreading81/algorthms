import {longestCommonSubstring} from './longestCommonSubstring';

test('should return 0 when there is no common substring', () => {
  expect(longestCommonSubstring('abc', 'def')).toEqual(0);
});

test('should return the length of the logest common substring', () => {
  expect(longestCommonSubstring('abcde', 'ace')).toEqual(3);
});
