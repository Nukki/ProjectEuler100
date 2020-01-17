/*
Problem 21: Amicable numbers
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under n.
*/
const sumAmicableNum = n => {

  const getSumDivisors = num => {
    let sumDivisors = 1;
    for (let i = 2; i <= Math.sqrt(num); i++ )
      if (num % i === 0) sumDivisors += i + num / i;
    return sumDivisors;
  }

  return new Array(n+1).fill(0)
             .map((el,i) => i)
             .slice(1)
             .filter(el => {
               let sumDi = getSumDivisors(el);
               let reverse = getSumDivisors(sumDi);
               return sumDi !== el && reverse === el;
             })
             .reduce((acc, curr) => acc + curr, 0)
}

console.log(sumAmicableNum(10000));
