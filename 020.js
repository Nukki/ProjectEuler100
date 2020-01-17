/*
Problem 20: Factorial digit sum
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!
*/

const sumFactorialDigits = n => {
  const factorial = new Array(n+1).fill(1)
            .map((el,i) => i)
            .slice(1)
            .reduce((acc, curr) => BigInt(acc) * BigInt(curr),1)
  return factorial.toString().split('')
            .map(Number)
            .reduce((acc, curr)=> acc + curr, 0);
}

console.log(sumFactorialDigits(100));
