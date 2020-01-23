/*
Problem 28: Number spiral diagonals
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25

20  7  8  9 10

19  6  1  2 11

18  5  4  3 12

17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a n by n spiral formed in the same way?
*/

const spiralDiagonals = n => {
 let corners = 0;
 let num = 1;
 let step = 2;
 let sumDiagonals = 0;

 while (num <= n * n) {
   sumDiagonals += num;
   num += step;
   if (corners === 3) {
     step += 2;
     corners = 0;
   } else {
     corners++;
   }
 }

 return sumDiagonals;
}

console.log(spiralDiagonals(1001));
