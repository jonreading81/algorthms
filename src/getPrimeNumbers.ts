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
