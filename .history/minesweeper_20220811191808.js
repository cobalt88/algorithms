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
    let sub = [];
    for (let j = 0; j < input.lenght; i++) {
      if (input[i][j] === "*") {
        sub[j] = "*";
      } else {
        sub[j] = 0;
      }
    }
    output.push(sub);
  }

  console.log(output);
};

mineSweeper(input1);
