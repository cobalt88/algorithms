const input1 = ["  * * ", "  *   ", "*  *  ", "  * * ", "  * * ", "  *   "];
const input2 = ["      ", "      ", "  *   ", "      ", "      "];
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

/* 
---------------
TEST CONDITIONS
---------------
*/
const tests = async (input1, input2, input3, input4, input5, input6) => {
  const test1 = await mineSweeper(input1);
  const test1expected = [
    " 2*3*1",
    "13*421",
    "*33*21",
    "13*5*2",
    " 3*5*2",
    " 2*311",
  ];
  test1.join("") === test1expected.join("")
    ? console.log("Test 1: Pass")
    : console.log("Test 1: Fail");
  console.log(`Output:`);
  console.table(test1);
  console.log("Expected:");
  console.table(test1expected);

  const test2 = mineSweeper(input2);
  const test2expected = ["      ", " 111  ", " 1*1  ", " 111  ", "      "];
  test2.join("") === test2expected.join("")
    ? console.log("Test 2: Pass")
    : console.log("Test 2: Fail");
  console.log(`Output:`);
  console.table(test2);
  console.log("Expected:");
  console.table(test2expected);

  const test3 = mineSweeper(input3);
  const test3expected = [
    "*1  1*",
    "11  11",
    " 111  ",
    " 1*1  ",
    " 111  ",
    "11  11",
    "*1  1*",
  ];
  test3.join("") === test3expected.join("")
    ? console.log("Test 3: Pass")
    : console.log("Test 3: Fail");
  console.log(`Output:`);
  console.table(test3);
  console.log("Expected:");
  console.table(test3expected);

  const test4 = mineSweeper(input4);
  const test4expected = [
    "      ",
    " 1221 ",
    " 2**2 ",
    " 2**2 ",
    " 1221 ",
    "      ",
  ];
  test4.join("") === test4expected.join("")
    ? console.log("Test 4: Pass")
    : console.log("Test 4: Fail");
  console.log(`Output:`);
  console.table(test4);
  console.log("Expected:");
  console.table(test4expected);

  const test5 = mineSweeper(input5);
  const test5expected = ["    ", "    ", " 111", " 1*1"];
  test5.join("") === test5expected.join("")
    ? console.log("Test 5: Pass")
    : console.log("Test 5: Fail");
  console.log(`Output:`);
  console.table(test5);
  console.log("Expected:");
  console.table(test5expected);

  const test6 = mineSweeper(input6);
  const test6expected = [
    "1*22*1",
    "12*322",
    " 123*1",
    " 12*21",
    " 1*21 ",
    " 111  ",
  ];
  test6.join("") === test6expected.join("")
    ? console.log("Test 6: Pass")
    : console.log("Test 6: Fail");
  console.log(`Output:`);
  console.table(test6);
  console.log("Expected:");
  console.table(test6expected);
};
tests(input1, input2, input3, input4, input5, input6);
