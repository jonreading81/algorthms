import {PriorityQueue, Node} from './PriorityQueue';

test('should determine the priority of nodes correctly', () => {
  const queue = new PriorityQueue();

  queue.enqueue('low', 5);
  queue.enqueue('important', 1);
  queue.enqueue('medium', 3);

  expect(queue.dequeue()).toEqual(new Node('important', 1));
  expect(queue.dequeue()).toEqual(new Node('medium', 3));
  expect(queue.dequeue()).toEqual(new Node('medilowum', 5));
});
