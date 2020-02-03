/*
Problem 32: Pandigital products
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/
const pandigitalProducts = () => {

  const checkPandigital = (mult1, mult2) => {
    const prod = mult1 * mult2;
    let str = prod.toString() + mult1.toString() + mult2.toString();
    if (str.length < 9) return 0;
    let panDig =  str.split('').sort().every((el, i) => parseInt(el) === i + 1);
    return panDig ? prod : 0;
  }

  const noRepeats = (m1, m2) => {
    let mult1 = m1.toString().split('');
    let mult2 = m2.toString();
    return mult1.every(el => !mult2.includes(el))
  }

  const theSet = new Set();
  for (let x = 1; x <= 98; x++) {
    for (let y = 100; y <= 9876; y++) {
      if (noRepeats(x, y))
        theSet.add(checkPandigital(x, y));
    }
  }

  return Array.from(theSet).reduce((acc, curr) => acc + curr, 0);
}

console.log(pandigitalProducts());
