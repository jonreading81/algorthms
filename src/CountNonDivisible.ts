const getDivisors = (n: number) => {
  const divisors = [];
  let i = 1;
  while (i * i <= n) {
    if (n % i === 0) {
      divisors.push(i);

      const exponent = n / i;
      if (exponent != i) {
        divisors.push(exponent);
      }
    }
    i++;
  }
  return divisors;
};

const getValuesCount = (values: number[]) =>
  values.reduce<{[key: string]: number}>((obj, value) => {
    const key = String(value);
    obj[key] = obj[key] ? obj[key] + 1 : 1;

    return obj;
  }, {});

export function CountNonDivisible(values: number[]) {
  const objValuesCount = getValuesCount(values);

  return values.map(
    (value, index) =>
      values.length -
      getDivisors(value).reduce(
        (count, divisor) =>
          divisor !== value
            ? count + (objValuesCount[String(divisor)] || 0)
            : count,
        objValuesCount[String(value)]
      )
  );
}
