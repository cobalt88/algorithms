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
        sub.push("test1");
      } else {
        sub.push("test2");
      }
      if (j === input.length) {
        output.push(...sub);
        sub = [];
      }
    }
  }

  console.log(output);
};

mineSweeper(input1);
