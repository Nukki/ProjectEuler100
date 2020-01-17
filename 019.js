/*
Problem 19: Counting Sundays
You are given the following information, but you may prefer to do some research for yourself.

* 1 Jan 1900 was a Monday.
* Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
* A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

const countingSundays = (firstYear, lastYear) =>  {

  const getYearArray = yearNum => {
    const yearDivisor = yearNum % 100 === 0 ? 400 : 4
    const febLen = yearNum % yearDivisor === 0 ? 29 : 28;
    const jan = new Array(31+1).fill(0).map((el,i) => i).slice(1);
    const feb = new Array(febLen+1).fill(0).map((el,i) => i).slice(1);;
    const mar = new Array(31+1).fill(0).map((el,i) => i).slice(1);;
    const apr = new Array(30+1).fill(0).map((el,i) => i).slice(1);;
    const may = new Array(31+1).fill(0).map((el,i) => i).slice(1);;
    const jun = new Array(30+1).fill(0).map((el,i) => i).slice(1);;
    const jul = new Array(31+1).fill(0).map((el,i) => i).slice(1);;
    const aug = new Array(31+1).fill(0).map((el,i) => i).slice(1);;
    const sep = new Array(30+1).fill(0).map((el,i) => i).slice(1);;
    const oct = new Array(31+1).fill(0).map((el,i) => i).slice(1);;
    const nov = new Array(30+1).fill(0).map((el,i) => i).slice(1);;
    const dec = new Array(31+1).fill(0).map((el,i) => i).slice(1);;
    return [...jan, ...feb, ...mar, ...apr, ...may, ...jun, ...jul, ...aug, ...sep, ...oct, ...nov, ...dec];
  }

  // which day of the week it was
  const getLastDay = (yearArr, firstDay) => {
    return (yearArr.length % 7 + firstDay) % 7;
  }

  const getSundayCount = (yearArr, firstDay) => {
    return yearArr.reduce((acc, curr, i) => (i + firstDay) % 7 === 0 && yearArr[i] === 1 ? acc + 1 : acc ,0);
  }

  // precalculate
  let yearStart = 1; // week starts with sunday 0, in 1900 it was mon
  const allDaysfrom1900to2000 = {};
  for (let i = 1900; i < 2001; i++) {
    const arr = getYearArray(i);
    const firstDay = yearStart;
    yearStart = getLastDay(arr, firstDay); // get first day for next iteration
    allDaysfrom1900to2000[i] = { arr, firstDay };
  }

  let sundays = 0;
  for (let x = firstYear; x <= lastYear; x++) {
    const { arr, firstDay } = allDaysfrom1900to2000[x];
    sundays += getSundayCount(arr, firstDay);
  }
  return sundays;
}

console.log(countingSundays(1901, 2000));
