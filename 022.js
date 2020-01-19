/*
Problem 22: Names scores
Using names, an array containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/
const namesScores = arr => {
  return arr.sort()
    .map((el,i) => (i+1) * el.toUpperCase().split('')
                     .map(ch => ch.charCodeAt(0) - 64)
                     .reduce((acc,curr) => acc + curr,0)
    )
    .reduce((acc,curr) => acc + curr,0)
}

const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test1));
