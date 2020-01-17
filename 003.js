/*
Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

const bitSieve = limit => {
  let primes = [];
  if (limit >= 2) {
    const sqrtlmt = Math.sqrt(limit);

    // fill array with 1s
    let arr = new Uint8Array(Math.ceil(limit / 8)).fill(255);
    for (let div = 2; div <= sqrtlmt; div++) { // iterate through possible divisors
      let divMask = 1 << (7 - (div % 8));
      // we need a prime divisor, i.e. whose but has not been flipped in prev. iterations
      if ((arr[Math.floor(div/8)] & divMask) != 0) {
        for (let i = div * div; i <= limit; i += div) {  // iterate multiples of divisor
          // need to find the location of this multiple
          // which byte it's in and how many bits is the offset (mask)
          let byteNumber  = Math.floor(i / 8);
          let mask = 1 << (7 - (i % 8));
          if ((arr[byteNumber] & mask) != 0)arr[byteNumber] ^= mask; // toggle bit
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
      let start = i === 0 ? 5 : 7;      // omit bit number 0 and 1, start at bit 2 in the first byte
      let end = i === arr.length - 1 ? 7 - (limit % 8) : 0;
      for (let b = start; b >= end; b--) { // iterate the bits
        let mask = 1 << b;
        if((arr[i] & mask) != 0) primes.push(i * 8 + (7 - b));
      }
    }
  }
  return primes;
}

const sieve = limit => {
  const primes = new Array(limit + 1).fill(true);
  if (limit >= 2) {
    const sqrtlmt = Math.sqrt(limit);
    for (let i = 2; i <= sqrtlmt; i++) {
      if (primes[i])
        for (let j = i * i; j < primes.length; j += i) primes[j] = false;
    }
  }
  let answer =  primes.map((el, i) => el && i !== 1 ? i : false).filter(el => el !== false);
  answer.shift()
  return answer;
}


const largestPrimeFactor = number => {
  const primes = sieve(100000);
  const primeFactors = [];
  while (number > 1) {
    primes.forEach(pr => {
      if (number >= pr) {
        if (number % pr === 0) {
          if (!primeFactors.includes(pr)) primeFactors.push(pr);
          number = number / pr;
        }
      }
    })
  }
  return Math.max(...primeFactors)
}

console.log(largestPrimeFactor(600851475143));
