let input1 = [
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
  ["*", " ", " ", "*", " ", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
];
function mineSweeper(input) {
  let n = input.length - 1;
  let output = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      output[i][j] = 0;
    }
  }
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i][j] === "*") {
        output[i][j] = input[i][j];

        output[i - 1][j - 1] += 1;
        output[i - 1][j] += 1;
        output[i - 1][j + 1] += 1;

        output[i][j - 1] += 1;
        output[i][j + 1] += 1;

        output[i + 1][j - 1] += 1;
        output[i + 1][j] += 1;
        output[i + 1][j + 1] += 1;
      }
    }
  }
  console.log(output);
}

mineSweeper(input1);
