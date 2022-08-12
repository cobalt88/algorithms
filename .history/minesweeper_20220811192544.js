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
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - 1; i++) {
      console.log(i, j);
    }
  }

  console.log(output);
};

mineSweeper(input1);
