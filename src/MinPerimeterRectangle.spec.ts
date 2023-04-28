import {MinPerimeterRectangle} from './MinPerimeterRectangle';

test('should calculate the minimum perimeter for a rectange of specified area', () => {
  expect(MinPerimeterRectangle(30)).toEqual(22);
  expect(MinPerimeterRectangle(36)).toEqual(24);
});
