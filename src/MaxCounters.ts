export const MaxCounters = (numCounters: number, values: number[]) => {
  const counters = Array.from<number>({length: numCounters}).fill(0);
  let maxValue = 0;
  let maxCounter = 0;

  values
    .map(value => value - 1)
    .forEach(index => {
      if (index < numCounters) {
        const newValue = Math.max(maxCounter, counters[index]) + 1;
        maxValue = Math.max(maxValue, newValue);
        counters[index] = newValue;
      } else {
        maxCounter = maxValue;
      }
    });

  return counters.map(value => Math.max(value, maxCounter));
};
