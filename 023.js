/*
Problem 23: Non-abundant sums
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.


*/

const sumOfNonAbundantNumbers = n => {
  const knownAb = new Set();
  const nonAb = new Set();

  const isAbundant = num => {
    if (knownAb.has(num)) return true;
    if (nonAb.has(num)) return false;

    let sumDivisors = 1;
    for (let i = 2; i <= Math.sqrt(num); i++ ) {
      if (num % i === 0) {
        if (i === num / i) sumDivisors += i
        else sumDivisors += i + num / i;
      }
    }

    if (sumDivisors > num) knownAb.add(num);
    else nonAb.add(num);
    return sumDivisors > num;
  }

  const isSumOfAbundNums = num => {
    for (let i = 12; i <= num - 12; i++)
      if (isAbundant(i) && isAbundant(num-i)) return true;
    return false;
  }

  return new Array(n -1).fill(0)
          .map((el,i) => i + 1)
          .filter((el) => !isSumOfAbundNums(el))
          .reduce((acc,curr) => acc + curr, 0)
}


console.log(sumOfNonAbundantNumbers(28123));
