export const binarySort = (values: (1 | 0)[]) => {
  const count = values.reduce((result, current) => {
    if (current === 1) {
      result++;
    }

    return result;
  }, 0);

  return Array.from({length: values.length}, (_, i) => (i < count ? 1 : 0));
};
