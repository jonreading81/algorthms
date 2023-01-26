import {hello} from './index';

test('should return hello', () => {
  expect(hello()).toEqual('hello');
});
