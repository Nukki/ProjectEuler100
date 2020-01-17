/*
Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

const sieve = limit => {
  const primes = new Array(limit + 1).fill(true);
  if (limit >= 2) {
    const sqrtlmt = Math.sqrt(limit);
    for (let i = 2; i <= sqrtlmt; i++) {
      if (primes[i])
        for (let j = i * i; j < primes.length; j += i) primes[j] = false;
    }
  }
  let answer = primes.map((el, i) => el && i !== 1 ? i : false).filter(el => el !== false);
  answer.shift()
  return answer;
}

const nthPrime = n => {
  let primes = sieve(n * 15);
  return primes[n - 1];
}

console.log(nthPrime(10001));
