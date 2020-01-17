/*
Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

const sieveBelow = limit => {
  const primes = new Array(limit).fill(true);
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

const primeSummation = n => {
  return sieveBelow(n).reduce((acc, curr) => acc + curr, 0)
}

console.log(primeSummation(2000000))
