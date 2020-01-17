/*
Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/

const specialPythagoreanTriplet = n => {
 let sumOfabc = n;
 const maxA = ~~(sumOfabc / 3) - 1;
  for (let a = 2; a <= maxA; a++) {
    for (let b = 3; b < sumOfabc - a; b++) {
      const c = sumOfabc - (a + b);
      if ((a ** 2 + b ** 2) === c ** 2) return a * b * c;
    }
  }
}

console.log(specialPythagoreanTriplet(1000));
