/*
Problem 27: Quadratic primes
Euler discovered the remarkable quadratic formula:

n^2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values  0≤n≤39 . However, when  n=40,402+40+41=40(40+1)+41  is divisible by 41, and certainly when  n=41,412+41+41  is clearly divisible by 41.

The incredible formula  n^2−79n+1601  was discovered, which produces 80 primes for the consecutive values  0≤n≤79 . The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n^2+an+b , where  |a|<range  and  |b|≤range where  |n|  is the modulus/absolute value of  n e.g.  |11|=11  and  |−4|=4
Find the product of the coefficients,  a  and  b , for the quadratic expression that produces the maximum number of primes for consecutive values of  n , starting with  n=0 .
*/

const quadraticPrimes = range => {

  const isPrime = num => {
    let limit = ~~(Math.sqrt(num));
    for (let i = 2; i <= limit; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const numGeneratedPrimes = (a, b) => {
    let n = 0;
    while (n < range) {
      let num = n * (n + a) + b;
      if (num > 0 && isPrime(num)) n++;
      else break;
    }
    return n;
  }

  let maxNumPrimes = 0;
  let prodOfCoef = 0;
  for (let a = -range; a < range; a++) {
    for (let b = 2; b <= range; b++) {

      if (isPrime(b)) {
        let numPrimes = numGeneratedPrimes(a, b);
        if (numPrimes > maxNumPrimes) {
          maxNumPrimes = numPrimes;
          prodOfCoef = a * b;
        }
      }

    }
  }
  return prodOfCoef;
}

console.log(quadraticPrimes(1000));
