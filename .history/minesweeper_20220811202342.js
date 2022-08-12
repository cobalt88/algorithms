let input1 = [
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
  ["*", " ", " ", "*", " ", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
];

let input2 = [
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", "*", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
];
function mineSweeper(input) {
  let n = input.length;
  let output = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  console.log(output);
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i][j] === "*") {
        output[i][j] = "*";
        if (i > 0) {
          output[i - 1][j] += 1;
        }
        if (i > 0 && j > 0 && output[i - 1][j - 1] !== "*") {
          output[i - 1][j - 1] += 1;
        }
        if (i > 0 && j < n - 1 && output[i - 1][j + 1] != "*") {
          output[i - 1][j + 1] += 1;
        }
        if (j > 0 && output[i][j - 1] != "*") {
          output[i][j - 1] += 1;
        }
        if (j < n - 1 && output[i][j + 1] != "*") {
          output[i][j + 1] += 1;
        }
        if (i < n - 1 && output[i + 1][j] != "*") {
          output[i + 1][j] += 1;
        }
        if (i < n - 1 && j > 0 && output[i + 1][j - 1] != "*") {
          output[i + 1][j - 1] += 1;
        }
        if (i < n - 1 && j < n - 1 && output[i + 1][j + 1] != "*") {
          output[i + 1][j + 1] += 1;
        }
      }
    }
  }
  console.log(output);
}

mineSweeper(input2);
