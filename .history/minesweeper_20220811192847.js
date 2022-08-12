let input1 = [
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
  ["*", " ", " ", "*", " ", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
];

const mineSweeper = (input) => {
  console.log(input.length);
  let output = [];
  for (let i = 0; i < 6 - 1; i++) {
    for (let j = 0; j < 6 - 1; i++) {
      console.log(i, j);
    }
  }
};

mineSweeper(input1);
