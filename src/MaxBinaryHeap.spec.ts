import {MaxBinaryHeap} from './MaxBinaryHeap';

test('should insert the value at the correct index', () => {
  const heap = new MaxBinaryHeap();

  heap.insert(55);
  heap.insert(30);
  heap.insert(35);
  heap.insert(60);
  heap.insert(40);

  expect(heap.values).toEqual([60, 55, 35, 30, 40]);
});

test('should extrect the root element', () => {
  const heap = new MaxBinaryHeap();

  heap.insert(55);
  heap.insert(30);
  heap.insert(35);
  heap.insert(60);
  heap.insert(40);

  heap.extractMax();

  expect(heap.values).toEqual([55, 40, 35, 30]);
});
