export const merge = (a: number[], b: number[]) => {
  let aIndex = 0;
  let bIndex = 0;
  const result = [];

  while (aIndex < a.length && bIndex < b.length) {
    if (a[aIndex] < b[bIndex]) {
      result.push(a[aIndex]);
      aIndex++;
    } else {
      result.push(b[bIndex]);
      bIndex++;
    }
  }

  return [...result, ...a.splice(aIndex), ...b.splice(bIndex)];
};
