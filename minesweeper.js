let input1 = ["  * * ", "  *   ", "*  *  ", "  * * ", "  * * ", "  *   "];

let input2 = ["      ", "      ", "  *   ", "      ", "      "];

const input3 = [
  "*    *",
  "      ",
  "      ",
  "  *   ",
  "      ",
  "      ",
  "*    *",
];
const input4 = ["      ", "      ", "  **  ", "  **  ", "      ", "      "];
const input5 = ["    ", "    ", "    ", "  * "];
const input6 = [" *  * ", "  *   ", "    * ", "   * ", "  * ", "      "];

function mineSweeper(input) {
  input.forEach((e) => e.split(""));
  let n1 = input.length;
  let n2 = input[0].length;
  let output = Array(n1)
    .fill()
    .map(() => Array(n2).fill(0));
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (input[i][j] === "*") {
        output[i][j] = "*";
        //top center
        if (i > 0 && output[i - 1][j] !== "*") {
          output[i - 1][j] += 1;
        }
        //top left
        if (i > 0 && j > 0 && output[i - 1][j - 1] !== "*") {
          output[i - 1][j - 1] += 1;
        }
        //top right
        if (i > 0 && j < n2 - 1 && output[i - 1][j + 1] !== "*") {
          output[i - 1][j + 1] += 1;
        }
        //left
        if (j > 0 && output[i][j - 1] !== "*") {
          output[i][j - 1] += 1;
        }
        //right
        if (j < n2 - 1 && output[i][j + 1] !== "*") {
          output[i][j + 1] += 1;
        }
        //bottom center
        if (i < n1 - 1 && output[i + 1][j] !== "*") {
          output[i + 1][j] += 1;
        }
        //bottom left
        if (i < n1 - 1 && j > 0 && output[i + 1][j - 1] !== "*") {
          output[i + 1][j - 1] += 1;
        }
        //bottom right
        if (i < n1 - 1 && j < n2 - 1 && output[i + 1][j + 1] !== "*") {
          output[i + 1][j + 1] += 1;
        }
      }
    }
  }

  for (let x = 0; x < n1; x++) {
    for (let y = 0; y < n2; y++) {
      if (output[x][y] === 0) {
        output[x][y] = " ";
      } else {
        output[x][y] = output[x][y].toString();
      }
    }
    output[x] = output[x].join("");
  }
  return output;
}

const tests = async (input1, input2, input3, input4, input5, input6) => {
  const test1 = await mineSweeper(input1);
  test1 === " 2*3*1",
    "13*421",
    "*33*21",
    "13*5*2",
    " 3*5*2",
    " 2*311" ? console.log("Test 1: Pass") : console.log("Test 1: Fail");
  console.log(`Output:`);
  console.table(test1);
  console.log("Expected:");
  console.table([" 2*3*1", "13*421", "*33*21", "13*5*2", " 3*5*2", " 2*311"]);

  const test2 = mineSweeper(input2);
  test2 === "      ",
    " 111  ",
    " 1*1  ",
    " 111  ",
    "      " ? console.log("Test 2: Pass") : console.log("Test 2: Fail");

  const test3 = mineSweeper(input3);
  test3 === "*1  1*",
    "11  11",
    " 111  ",
    " 1*1  ",
    " 111  ",
    "11  11",
    "*1  1*" ? console.log("Test 3: Pass") : console.log("Test 3: Fail");

  const test4 = mineSweeper(input4);
  test4 === "      ",
    " 1221 ",
    " 2**2 ",
    " 2**2 ",
    " 1221 ",
    "      " ? console.log("Test 4: Pass") : console.log("Test 4: Fail");

  const test5 = mineSweeper(input5);
  test5 === "    ",
    "    ",
    " 111",
    " 1*1" ? console.log("Test 5: Pass") : console.log("Test 5: Fail");

  const test6 = mineSweeper(input6);
  test6 === "1*22*1",
    "12*322",
    " 123*1",
    " 12*21",
    " 1*21 ",
    " 111  " ? console.log("Test 6: Pass") : console.log("Test 6: Fail");
};
tests(input1, input2, input3, input4, input5, input6);
