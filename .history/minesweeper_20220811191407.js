let input1 = [
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
  ["*", " ", " ", "*", " ", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
];

const mineSweeper = (input) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.lenght; i++) {
      if (input[i][j] === "*") {
        output[i][j] = "*";
      } else {
        output[i][j] = 0;
      }
    }
  }

  console.log(output);
};

mineSweeper(input1);
