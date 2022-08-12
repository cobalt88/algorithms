function powerSumDigTerm(n) {
  const outputArr = [];

  const logBase = (n, base) => Math.round(Math.log(n) / Math.log(base));
  for (let i = 81; i <= 1000000000; i++) {
    let a = parseInt(i);
    let sum = a
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    let x = logBase(a, sum);

    if (Math.pow(sum, x) === a) {
      outputArr.push(a);
    }
    if (outputArr.length === n) {
      break;
    }
  }
  console.log(outputArr[n - 1]);
}

powerSumDigTerm(30);
