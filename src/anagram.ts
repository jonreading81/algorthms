export const anagram = (a: string, b: string) => {
  const characterFrequencyA: {[key: string]: number} = {};
  const characterFrequencyB: {[key: string]: number} = {};

  for (let char of a) {
    characterFrequencyA[char] = ++characterFrequencyA[char] || 1;
  }

  for (let char of b) {
    characterFrequencyB[char] = ++characterFrequencyB[char] || 1;
  }

  const allKeys = Array.from(
    new Set([
      ...Object.keys(characterFrequencyA),
      ...Object.keys(characterFrequencyB),
    ])
  );

  return allKeys.every(key =>
    characterFrequencyA[key] === characterFrequencyB[key] ? true : false
  );
};
