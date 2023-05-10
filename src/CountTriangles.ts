export function CountTriangles(values: number[]) {
  const sorted = values.sort((a, b) => a - b);
  let result = 0;

  values.forEach((value, x) => {
    for (let y = x + 1; y < sorted.length - 1; y++) {
      let z = y + 1;
      while (z < sorted.length && sorted[x] + sorted[y] > sorted[z]) {
        z++;
      }
      result += z - y - 1;
    }
  });

  return result;
}
