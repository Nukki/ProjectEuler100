/*
Problem 33: Digit cancelling fractions
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/
const digitCancellingFractions = () => {

  const nonTrivCancel = (one, two) => {
    let oneStr = one.toString().split('');
    let twoStr = two.toString();
    let noEndZero = oneStr[1] !== '0' && twoStr[1] !== '0';
    let ltOne = one / two < 1;
    let common = null;
    oneStr.forEach(el => {
      if (twoStr.includes(el)) common = el;
    })
    if (ltOne && noEndZero && common && one !== two) {
      let uno = parseInt(oneStr.join('').replace(common, ''));
      let dos = parseInt(twoStr.replace(common, ''));
      return one / two === uno / dos;
    }
    return false;
  }

  let nums = [];
  let denoms = []
  for (let x = 10; x <= 99; x++) {
    for (let y = 11; y <= 99; y++) {
      if (nonTrivCancel(x, y)) {
        nums.push(x)
        denoms.push(y);
      }
    }
  }
  let prodN = nums.reduce((acc, curr) => acc * curr, 1);
  let prodD = denoms.reduce((acc, curr) => acc * curr, 1);
  return prodD / prodN;
}

console.log(digitCancellingFractions());
