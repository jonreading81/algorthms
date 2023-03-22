import {TapeEquilibrium} from './TapeEquilibrium';

test('should return the minimal difference', () => {
  expect(TapeEquilibrium([3, 1, 2, 4, 3])).toEqual(1);
});
