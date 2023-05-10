function fib(max: number) {
  const result = [1, 2];

  while (result[result.length - 1] + result[result.length - 2] <= max) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

export function FibFrog(values: number[]) {
  const leaves = [...values, 1];
  const jumps = fib(leaves.length);
  const reachable = Array.from({length: leaves.length}, () => -1);

  jumps.forEach(jump => {
    if (leaves[jump - 1] === 1) {
      reachable[jump - 1] = 1;
    }
  });

  leaves.forEach((leaf, index) => {
    if (leaf === 1 && reachable[index] === -1) {
      reachable[index] = jumps.reduce((minValue, jump) => {
        if (reachable[index - jump] > 0) {
          const candidate = reachable[index - jump] + 1;
          return minValue !== -1 ? Math.min(minValue, candidate) : candidate;
        }

        return minValue;
      }, -1);
    }
  });

  return reachable[reachable.length - 1];
}
