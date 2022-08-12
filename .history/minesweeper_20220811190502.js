let input1 = [
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
  ["*", " ", " ", "*", " ", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", "*", " "],
  [" ", " ", "*", " ", " ", " "],
];

const mineSweeper = (input) => {
  let output = input.forEach((e) => {
    e = 0;
  });
  console.log(output);
};

mineSweeper(input1);
