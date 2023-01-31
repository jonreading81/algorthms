export const permutations = (arr: number[]): number[][] => {
  if (arr.length === 0) {
    return [arr];
  }

  const firstElement = arr[0];
  const rest = arr.slice(1);
  const permsWithoutFirst = permutations(rest);

  return permsWithoutFirst.reduce<number[][]>((result, perm) => {
    for (let i = 0; i <= perm.length; i++) {
      result.push([...perm.slice(0, i), firstElement, ...perm.slice(i)]);
    }

    return result;
  }, []);
};
