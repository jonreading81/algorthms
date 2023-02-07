export const permutations = (arr: number[]): number[][] => {
  if (arr.length < 2) {
    return [arr];
  }

  const firstElement = arr[0];
  const rest = arr.slice(1);
  const permsWithoutFirst = permutations(rest);

  return permsWithoutFirst.reduce<number[][]>((result, perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = perm.slice(0);
      permWithFirst.splice(i, 0, firstElement);
      result.push(permWithFirst);
    }

    return result;
  }, []);
};
