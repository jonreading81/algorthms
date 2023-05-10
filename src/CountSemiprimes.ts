export function getPrimeNumbers(n: number) {
  const primes = Array.from({length: n + 1}, () => true);

  for (let i = 2; i <= n; i++) {
    const j = i * i;
    if (primes[j] === true) {
      for (let k = j; k <= n; k = k + i) {
        primes[k] = false;
      }
    }
  }

  return primes.reduce<number[]>(
    (result, isPrime, i) => (isPrime && i > 0 ? [...result, i] : result),
    []
  );
}

function getSemiPrimes(max: number) {
  const primes = getPrimeNumbers(Math.ceil(max / 2));
  const semiPrimes = Array.from({length: max + 1}, () => false);

  for (let i = 1; i < primes.length; i++) {
    for (let j = 1; j < primes.length; j++) {
      const semiPrime = primes[i] * primes[j];
      if (semiPrime <= max) semiPrimes[semiPrime] = true;
    }
  }

  return semiPrimes;
}

export function CountSemiprimes(max: number, start: number[], end: number[]) {
  const semiPrimes = getSemiPrimes(max);

  const semiPrimesCounts = semiPrimes.reduce<number[]>(
    (counts, isSemiPrime) => {
      const count = counts.length ? counts[counts.length - 1] : 0;

      return [...counts, isSemiPrime ? count + 1 : count];
    },
    []
  );

  return start.map(
    (_, i) => semiPrimesCounts[end[i]] - semiPrimesCounts[start[i] - 1]
  );
}
