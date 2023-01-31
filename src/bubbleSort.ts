const swap = (arr: number[], from: number, to: number) => {
  const temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;
  return arr;
};

export const bubbleSort = (_values: number[]) => {
  let values = _values.slice();
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i; j++) {
      if (values[j] > values[j + 1]) {
        values = swap(values, j, j + 1);
      }
    }
  }
  return values;
};
