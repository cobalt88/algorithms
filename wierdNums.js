/*
Description:
There are numbers that have a special property, wherein the sum of the numbers digits raised to a whole power is equal to the original number.
In mathematical terms this can be expressed as the following where N = the original number, b = sum of the digits of N, and x = exponent(note: whole numbers/integers only): Log base b (N) = x
Example N = 81
Log base 9 (81) = 2
8 + 1 = 9
9^2 = 81

The goal of this algorithm is to produce all numbers with this property within a given range, place them into an array, and return the nth object in that array. 

for example if n = 1, return the zeroth position of the array (81)
if n = 30 return the 29th position of the array(248155780267521)

Below are 2 solutions to this problem. The first works but is extremely inefficient. The second will accomplish the same output in milliseconds. They each use a different approach. 
*/

function powerSumDigTerm1(n) {
  let count = 0;

  for (let i = 81; i < 10000000000; i++) {
    let a = i;
    let sum = a
      .toString()
      .split("")
      .map((e) => parseInt(e))
      .reduce((a, b) => a + b);

    let x = Math.round(Math.log(a) / Math.log(sum));

    if (Math.pow(sum, x) === a) {
      count += 1;
    }
    if (count === n) {
      console.log(i);
      break;
    }
  }
}

function powerSumDigTerm2(n) {
  let outputArr = [];

  for (let i = 2; i < 1000; i++) {
    for (let j = 2; j < 15; j++) {
      let num = Math.pow(i, j);
      let sum = num
        .toString()
        .split("")
        .map((e) => parseInt(e))
        .reduce((a, b) => a + b);
      if (sum === i) {
        outputArr.push(num);
      }
    }
  }
  outputArr.sort((a, b) => a - b);
  console.log(outputArr[n - 1]);
}

powerSumDigTerm2(30);
