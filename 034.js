/*
Problem 34: Digit factorials
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

const digitFactorial = () => {
  let sum = 0;
  const numbers = [];
  const factorials = { 0: 1, 1: 1, 2: 2 };

  for (let x = 10; x < 1000000; x++) {
    let arr = x.toString().split('').map(Number);
    let sumFactorials = 0;
    arr.forEach(el => {
      if (!factorials[el]) factorials[el] = factorials[el - 1] * el;
      sumFactorials += factorials[el];
    })
    if (sumFactorials === x) {
      sum += x;
      numbers.push(x);
    }
  }

  return { sum, numbers };
}

console.log(digitFactorial());
