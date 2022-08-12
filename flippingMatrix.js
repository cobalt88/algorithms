function flippingMatrix(matrix) {
  matrix.forEach((e) => {
    e.sort((a, b) => b - a);
  });

  matrix.sort(function (a, b) {
    return b[0] - a[0];
  });
  let maxSum = matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
  return maxSum;
}
