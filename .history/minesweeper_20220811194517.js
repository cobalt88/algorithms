let input1 = [
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
  ["*", " ", " ", "*", " ", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
];
function mineSweeper(input) {
  console.log(input.length);
  let output = [];
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
