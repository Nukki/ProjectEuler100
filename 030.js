/*
Problem 30: Digit n powers
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44

8208 = 84 + 24 + 04 + 84

9474 = 94 + 44 + 74 + 44

As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of n powers of their digits.
*/
const digitnPowers = n => {
  let sum = 0;
  for (let i = 2; i < 1000000; i++) {
    let digiSum = i.toString().split('')
                   .map(Number)
                   .map(num => num ** n)
                   .reduce((acc, curr) => acc + curr, 0)
    if (i === digiSum) sum += i;
  }
  return sum;
}

console.log(digitnPowers(5));
