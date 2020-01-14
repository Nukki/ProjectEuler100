/*
Problem 14: Longest Collatz sequence
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

const longestCollatzSequence = limit => {
  const getChainLenBrute = (num) => {
    let len = 1; // account for 1
    while (num > 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      len++;
    }
    return len;
  }

  // save the values we calcualted
  const knownChainLengths = { 1: 1 };
  const getChainLenRec = (num) => {
    if (knownChainLengths[num]) return knownChainLengths[num];
    let newNum = num % 2 === 0 ? num / 2 : num * 3 + 1;
    if (!knownChainLengths[newNum]) {
      knownChainLengths[newNum] = getChainLenRec(newNum);
    }
    knownChainLengths[num] = knownChainLengths[newNum] + 1;
    return knownChainLengths[num];
  }

  let maxLen = 0;
  const chainChamp = new Array(limit).fill(1)
  .map((el,i) => i)
  .slice(1)
  .reduce((acc, curr) => {
    const chainLen = getChainLenRec(curr);
    if (chainLen > maxLen) {
      maxLen = chainLen;
      return curr;
    }
    return acc;
  }, 0);

  return chainChamp;
}

console.log(longestCollatzSequence(100000));
