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
  for (let i = 0; i < 6 - 1; i++) {
    for (let j = 0; j < 6 - 1; j++) {
      console.log(i, j);
    }
  }
}

mineSweeper(input1);
