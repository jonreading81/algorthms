function getPeaks(values: number[]) {
  const peaks = [];

  for (let i = 1; i < values.length - 1; i++) {
    if (values[i] > values[i - 1] && values[i] > values[i + 1]) {
      peaks.push(i);
    }
  }

  return peaks;
}

export function Flags(values: number[]) {
  const peaks = getPeaks(values);

  if (peaks.length < 2) {
    return peaks.length;
  }

  const distance = peaks[peaks.length - 1] - peaks[0] + 1;
  const maxFlags = Math.min(Math.round(Math.sqrt(distance)), peaks.length);
  let result = 1;

  for (let numFlags = maxFlags; numFlags > 1; numFlags--) {
    const flagsAdded = [peaks[0]];

    for (let p = 1; p < peaks.length && flagsAdded.length < numFlags; p++) {
      const peak = peaks[p];
      const boundaryForNextFlag = flagsAdded[flagsAdded.length - 1] + numFlags;

      if (peak >= boundaryForNextFlag) {
        flagsAdded.push(peak);
      }
    }

    result = Math.max(result, flagsAdded.length);
  }

  return result;
}
