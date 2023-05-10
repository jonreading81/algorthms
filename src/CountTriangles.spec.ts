import {CountTriangles} from './CountTriangles';

test('should return the number of triasngular set of number', () => {
  expect(CountTriangles([10, 2, 5, 1, 8, 12])).toEqual(4);
  expect(CountTriangles([10, 2, 5, 1, 8, 11, 12])).toEqual(12);
});
