/*
Problem 24: Lexicographic permutations
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210
What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/
const lexicographicPermutations = n => {
  /*
  10! = 3628800
  pick first dig =>  10! / 10 = 362880
  pick second dig =>   9! / 9 = 40320
  pick third dig =>    8! / 8 = 5049
  pick fourth dig =>   7! / 7 = 720
  pick fifth dig =>    6! / 6 = 120
  pick sixth dig =>    5! / 5 = 24
  pick seventh dig =>  4! / 4 = 6
  pick eighth dig =>   3! / 3 = 2
  pick nineth dig =>   2! / 2 = 1
*/
  let answer = [];
  let nums = new Array(10).fill(0).map((_,i) => i); // 0 to 9
  [ 362880, 40320, 5040, 720, 120, 24, 6, 2, 1 ].forEach(divisor => {
    let indInSpliced = Math.floor(n/divisor);
    answer.push(nums.splice(indInSpliced,1))
    n = n % divisor;
  })
  answer.push(nums[0]);
  return parseInt(answer.join(''));
}

console.log(lexicographicPermutations(999999));
