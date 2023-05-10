export function MinMaxDivision(numBlocks: number, _: number, values: number[]) {
  let upper = values.reduce((sum, value) => sum + value, 0);
  let lower = values.reduce((max, val) => Math.max(max, val));
  let result = -1;

  while (upper >= lower) {
    const mid = Math.floor((upper + lower) / 2);
    let blocks = 1;
    let tmpSum = 0;

    values.forEach(value => {
      if (tmpSum + value > mid) {
        tmpSum = value;
        blocks++;
      } else {
        tmpSum += value;
      }
    });

    if (blocks > numBlocks) {
      lower = mid + 1;
    } else {
      result = result === -1 ? mid : Math.min(result, mid);
      upper = mid - 1;
    }
  }

  return result;
}
