/*
Problem 16: Power digit sum
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^exponent?
*/

const powerDigitSum = exponent => {
  let num = exponent > 53 ?
    BigInt(Math.pow(2, exponent)) :
    Math.pow(2, exponent);
  return num.toString()
   .split('')
   .reduce((acc, curr) => parseInt(curr) ? acc + parseInt(curr) : acc, 0);
}

console.log(powerDigitSum(1000));
