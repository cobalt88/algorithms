function powerSumDigTerm(n) {
  const outputArr = [];

  const logBase = (n, base) => Math.round(Math.log(n) / Math.log(base));
  for (let i = 81; i <= 1000000000; i++) {
    let a = parseInt(i);
    let sum = i
      .toString()
      .split("")
      .map((e) => parseInt(e))
      .reduce((a, b) => a + b);
    let x = logBase(a, sum);

    if (Math.pow(sum, x) === a) {
      outputArr.push(a);
    }
    if (outputArr.length === n) {
      break;
    }
  }
  return outputArr[n - 1];
}

powerSumDigTerm(12);
