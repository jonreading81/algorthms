export const pivotHelper = (arr: number[], start = 0, end = arr.length) => {
  let pivotIndex = start;
  const pivot = arr[start];

  for (let i = start; i < end; i++) {
    const current = arr[i];
    if (pivot > current) {
      pivotIndex++;

      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = current;
    }
  }

  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = pivot;

  return pivotIndex;
};
