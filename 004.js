/*
Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

const largestPalindromeProduct = n => {
  const paliNum = num => num.toString() === num.toString().split('').reverse().join('');
  const max = parseInt('9'.repeat(n));
  const min = parseInt('9' + '0'.repeat(n-1));
  let curr = max;
  while (curr >= min) {
    for (let i = curr; i >= min; i--)
      if (paliNum(i * curr)) return i * curr;
    curr--;
  }
}

console.log(largestPalindromeProduct(3));
