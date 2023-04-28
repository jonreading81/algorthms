// blocks must contain same numbers of elements
// every block must contain at least 1 peak
export function Peaks(values: number[]) {
  const peaks = [];

  for (let i = 1; i < values.length - 1; i++) {
    if (values[i] > values[i - 1] && values[i] > values[i + 1]) {
      peaks.push(i);
    }
  }

  if (peaks.length < 2) {
    return peaks.length;
  }

  for (let numBlocks = peaks.length; numBlocks > 0; numBlocks--) {
    if (values.length % numBlocks === 0) {
      const sizeOfBlock = values.length / numBlocks;
      const allBlocksContainPeak = peaks
        .reduce(
          (blocks, peak) => {
            const blockIndex = Math.floor(peak / sizeOfBlock);
            blocks[blockIndex] = true;
            return blocks;
          },
          Array.from({length: numBlocks}, () => false)
        )
        .every(val => val);

      if (allBlocksContainPeak) {
        return numBlocks;
      }
    }
  }

  return 0;
}
