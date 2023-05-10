export function AbsDistinct(values: number[]) {
  let front = values.length - 1;
  let back = 0;
  let count = 1;

  while (front > back) {
    if (
      Math.abs(values[front]) !== Math.abs(values[back]) &&
      values[front] != values[front + 1] &&
      values[back] != values[back - 1]
    ) {
      count++;
    }

    if (Math.abs(values[front]) > Math.abs(values[back])) {
      front--;
    } else {
      back++;
    }
  }

  return count;
}
