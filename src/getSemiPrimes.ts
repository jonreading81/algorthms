import {getPrimeNumbers} from './getPrimeNumbers';

export function getSemiPrimes(n: number) {
  const primes = getPrimeNumbers(n / 2 + 1);
  const semiPrimes = Array.from({length: n}, () => false);

  for (let i = 1; i < primes.length; i++) {
    for (let j = 1; j < primes.length; j++) {
      const semiPrime = primes[i] * primes[j];
      if (semiPrime <= n) semiPrimes[semiPrime] = true;
    }
  }

  return semiPrimes.reduce<number[]>((result, isSemiPrime, i) => {
    return isSemiPrime ? [...result, i] : result;
  }, []);
}
