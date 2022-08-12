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
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      console.log(i, j);
    }
  }
}

mineSweeper(input1);
