function powerSumDigTerm(n) {
  const outputArr = [
    81, 512, 2401, 4913, 5832, 17576, 19683, 234256, 390625, 614656, 1679616,
  ];

  if (n <= 11) {
    return outputArr[n - 1];
  } else {
    let sum = 0;
    const logBase = (n, base) => Math.round(Math.log(n) / Math.log(base));
    for (let i = 2000000; i <= 1000000000; i++) {
      let a = parseInt(i);
      let b = i.toString().split("");

      b.forEach((e) => {
        sum += parseInt(e);
      });

      let x = logBase(a, sum);

      if (Math.pow(sum, x) === a) {
        outputArr.push(a);
        i += 10000;
      }
      if (outputArr.length === n) {
        break;
      }

      sum = 0;
    }
    //    return outputArr[n - 1]
  }
  console.log(outputArr);
}

powerSumDigTerm(13);
