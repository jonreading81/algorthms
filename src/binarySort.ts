export const binarySort = (values: (1 | 0)[]) => {
  const count = values.reduce((result, current) => {
    if (current === 1) {
      result++;
    }

    return result;
  }, 0);

  return Array(values.length)
    .fill(0)
    .map((_, i) => (i < count ? 1 : 0));
};
