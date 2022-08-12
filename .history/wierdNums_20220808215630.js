function powerSumDigTerm(n) {
  let count = 0;

  for (let i = 81; i <= 1000000000; i++) {
    let a = parseInt(i);
    let sum = i
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
    }
  }
}

powerSumDigTerm(10);
