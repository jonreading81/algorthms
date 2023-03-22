import {flattenObject} from './flattenObject';

test('should flatten an object', () => {
  expect(flattenObject({a: {b: {c: 'val'}}, d: 'val 2'})).toEqual({
    'a.b.c': 'val',
    d: 'val 2',
  });
});
