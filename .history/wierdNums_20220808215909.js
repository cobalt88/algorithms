function powerSumDigTerm(n) {
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

powerSumDigTerm(2);
