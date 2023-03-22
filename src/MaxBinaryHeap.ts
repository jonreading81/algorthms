export class MaxBinaryHeap {
  values: number[] = [];

  static getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  static getLeftChildIndex(index: number) {
    return index * 2 + 1;
  }

  static getRightChildIndex(index: number) {
    return index * 2 + 1;
  }

  insert(value: number) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(index: number) {
    let childIndex = index;
    let parentIndex = MaxBinaryHeap.getParentIndex(childIndex);

    while (this.values[childIndex] > this.values[parentIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = MaxBinaryHeap.getParentIndex(childIndex);
    }
  }

  extractMax() {
    if (this.values.length > 1) {
      const rootValue = this.values[0];
      this.values[0] = this.values.pop() as number;
      this.bubbleDown(0);

      return rootValue;
    }

    return false;
  }

  bubbleDown(start: number) {
    let index = start;
    let leftChildIndex = MaxBinaryHeap.getLeftChildIndex(index);
    let rightChildIndex = MaxBinaryHeap.getRightChildIndex(index);

    while (
      this.values[index] < this.values[leftChildIndex] ||
      this.values[index] < this.values[rightChildIndex]
    ) {
      const largestChildIndex =
        this.values[leftChildIndex] > this.values[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;

      this.swap(index, largestChildIndex);

      index = largestChildIndex;
      leftChildIndex = MaxBinaryHeap.getLeftChildIndex(largestChildIndex);
      rightChildIndex = MaxBinaryHeap.getRightChildIndex(largestChildIndex);
    }
  }

  swap(a: number, b: number) {
    const temp = this.values[a];
    this.values[a] = this.values[b];
    this.values[b] = temp;
  }
}
