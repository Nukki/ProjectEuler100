/*
Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

const smallestMult = n => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19]
  const getPrimeFactors = number => {
    const primeFactors = [];
    while (number > 1) {
      primes.forEach(pr => {
        if (number % pr === 0) {
          primeFactors.push(pr);
          number /= pr;
        }
      })
    }
    return primeFactors;
  }
  let arr = new Array(n + 1).fill(0).map((el, i ) => i)
  arr.shift() // ignore 0
  arr.shift() // ignore 1
  let result = []
  while (arr.some(x => x !== 1)) {
    let last =  getPrimeFactors(arr.pop());
    result.push(...last);
    last.forEach(el => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % el === 0) arr[i] = arr[i] / el;
      }
    })
  }
  return result.reduce((acc, curr) => acc * curr, 1);
}

smallestMult(20);
