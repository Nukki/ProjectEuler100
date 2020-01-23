/*
Problem 26: Reciprocal cycles
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2 = 0.5
1/3 = 0.(3)
1/4 = 0.25
1/5 = 0.2
1/6 = 0.1(6)
1/7 = 0.(142857)
1/8 = 0.125
1/9 = 0.(1)
1/10 = 0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/
const reciprocalCycles = n => {

  const getRecurLen = num => {
    const memory = new Map();
    let dividend = 1;

    while (dividend && memory.size < n) {
      while (dividend / num < 1) dividend *= 10;
      if (memory.has(dividend)) { // cycle found
        let cycleStart;
        let arr = Array.from(memory);
        arr.forEach((el,i) => {
          if (el[0] === dividend) cycleStart = i;
        })
        return arr.slice(cycleStart).length
      }
      let whole = ~~(dividend / num);
      memory.set(dividend, whole);
      dividend = dividend - whole * num;
    }
    return 0;
  }

  let maxNum;
  new Array(n).fill(0)
    .map((_,i) => i + 1) // array from 1 to n
    .reduce((acc, curr) => {
      let cycleLen = getRecurLen(curr);
      if (cycleLen > acc) {
        maxNum = curr;
        return cycleLen;
      } else {
        return acc;
      }
    }, 0);
  return maxNum;
}

reciprocalCycles(1000);
