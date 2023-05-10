const getNailed = (start: number[], end: number[], nailsCount: number[]) =>
  start.reduce(
    (nailed, _, index) =>
      nailsCount[Math.min(nailsCount.length - 1, end[index])] !==
      nailsCount[start[index] - 1]
        ? nailed + 1
        : nailed,
    0
  );

function getNailsCount(nails: number[]) {
  const max = nails.reduce((max, value) => Math.max(max, value, 0));

  return nails
    .reduce(
      (nailsCount, position) => {
        nailsCount[position] = 1;
        return nailsCount;
      },
      Array.from({length: max + 1}, () => 0)
    )
    .map((val, i, nailsCount) =>
      i === 0 ? nailsCount[i] : nailsCount[i] + nailsCount[i - 1]
    );
}

export function NailingPlanks(start: number[], end: number[], nails: number[]) {
  let lower = 1;
  let upper = nails.length;
  let minNails = -1;

  while (upper >= lower) {
    const candidate = Math.floor((upper + lower) / 2);

    if (
      getNailed(start, end, getNailsCount(nails.slice(0, candidate))) ===
      start.length
    ) {
      minNails = minNails === -1 ? candidate : Math.min(minNails, candidate);
      upper = candidate - 1;
    } else {
      lower = candidate + 1;
    }
  }
  return minNails;
}
