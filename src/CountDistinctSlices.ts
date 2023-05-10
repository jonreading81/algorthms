export function CountDistinctSlices(max: number, values: number[]) {
  let left = 0;
  let right = 0;
  let result = 0;
  const valuesSeen = Array.from({length: max + 1}, () => false);

  while (left < values.length && right < values.length) {
    if (!valuesSeen[values[right]]) {
      result += right - left + 1;
      valuesSeen[values[right]] = true;
      right++;
    } else {
      valuesSeen[values[left]] = false;
      left++;
    }
  }

  return Math.min(result, 1000000000);
}
