function powerSumDigTerm(n) {
  const outputArr = [];

  const logBase = (n, base) => Math.round(Math.log(n) / Math.log(base));
  for (let i = 81; i <= 1000000000; i++) {
    let a = parseInt(i);
    let sum = 0;
    let x = logBase(a, sum);
    while (a) {
      sum += a % 10;
      a = Math.floor(a / 10);
    }
    if (Math.pow(sum, x) === a) {
      outputArr.push(a);
    }
    if (outputArr.length === n) {
      break;
    }
  }
  console.log(outputArr[n - 1]);
}

powerSumDigTerm(2);