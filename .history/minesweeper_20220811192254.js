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
    for (let j = 0; j < input.length; i++) {
      if (input[i][j] === "*") {
        console.log("test1");
      } else {
        console.log("test2");
      }
    }
  }

  console.log(output);
};

mineSweeper(input1);
