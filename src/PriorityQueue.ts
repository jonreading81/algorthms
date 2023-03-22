export class Node {
  val: string;
  priority: number;

  constructor(val = '', priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

export class PriorityQueue {
  values: Node[] = [];

  static getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  static getLeftChildIndex(index: number) {
    return index * 2 + 1;
  }

  static getRightChildIndex(index: number) {
    return index * 2 + 1;
  }

  enqueue(val = '', priority: number) {
    this.values.push(new Node(val, priority));
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(index: number) {
    let childIndex = index;
    let parentIndex = PriorityQueue.getParentIndex(childIndex);

    while (
      this.values[childIndex].priority < this.values[parentIndex].priority
    ) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = PriorityQueue.getParentIndex(childIndex);
    }
  }

  dequeue() {
    if (this.values.length > 1) {
      const min = this.values[0];
      this.values[0] = this.values.pop() as Node;
      this.bubbleDown(0);

      return min;
    }

    return false;
  }

  bubbleDown(start: number) {
    let index = start;
    let leftChildIndex = PriorityQueue.getLeftChildIndex(index);
    let rightChildIndex = PriorityQueue.getRightChildIndex(index);

    while (
      this.values[index].priority > this.values[leftChildIndex].priority ||
      this.values[index].priority > this.values[rightChildIndex].priority
    ) {
      const minChildIndex =
        this.values[leftChildIndex].priority <
        this.values[rightChildIndex].priority
          ? leftChildIndex
          : rightChildIndex;

      this.swap(index, minChildIndex);

      index = minChildIndex;
      leftChildIndex = PriorityQueue.getLeftChildIndex(minChildIndex);
      rightChildIndex = PriorityQueue.getRightChildIndex(minChildIndex);
    }
  }

  swap(a: number, b: number) {
    const temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
}
