export const same = (values: number[], squared: number[]) => {
  const squaredFrequency: {[key: string]: number} = {};

  squared.forEach(square => {
    const key = String(square);
    squaredFrequency[key] = ++squaredFrequency[key] || 1;
  });

  return values.every(value => {
    const key = String(value ** 2);

    if (squaredFrequency[key] > 0) {
      squaredFrequency[key]--;
      return true;
    } else {
      return false;
    }
  });
};
