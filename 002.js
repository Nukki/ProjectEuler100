/*
Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence that do not exceed the nth term,
find the sum of the even-valued terms.
*/

const fiboEvenSum = n => {
  const fibs = [1, 2];
  let i = 3;
  while (i <= n) {
    fibs.push(fibs[i-2] + fibs[i-3]);
    i++;
  }

  return fibs.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(fiboEvenSum(23));