/*
Problem 17: Number letter counts
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
The use of "and" when writing out numbers is in compliance with British usage.
*/

const numberLetterCounts = limit => {
  let singles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twoDigit = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const getName = num => {
    let digs = parseInt(num).toString().split('');

    if (digs[0] === '0') {
      digs.shift();
      return digs.length > 0 ? '' + getName(digs.join('')) : '';
    }
    if (digs.length === 4 ) return getName(digs.shift()) + 'thousand' + getName(digs.join(''));
    if (digs.length === 3 ) {
      let and = num % 100 === 0 ? '' : 'and'
      return getName(digs.shift()) + 'hundred' + and + getName(digs.join(''));
    }
    if (digs.length === 2 && digs[0] === '1') return digs[1] === '0' ? teens[0] : teens[digs.pop()];
    if (digs.length === 2 ) return  digs[1] === '0' ? twoDigit[parseInt(digs.shift()) - 2] : twoDigit[parseInt(digs.shift()) - 2] + getName(digs);
    return singles[parseInt(digs[0]) - 1];
  }

  return new Array(limit + 1).fill(0)
                .map((el, i) => getName(i))
                .map(el => el.length)
                .reduce((acc,curr) => acc + curr, 0);
}

console.log(numberLetterCounts(1000));
