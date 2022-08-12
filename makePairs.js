const str = "wserxydctufgyvihuboijnko";
function solution(str) {
  const output = [];
  const arr = str.split("");
  console.log(arr);

  if (!arr.length % 2 === 0) {
    arr.push("_");
  }
  console.log(arr.length);
  for (let i = 0; i < arr.length; i = i + 2) {
    console.log(`${arr[i]}${arr[i + 1]}`);
  }
}

// solution(str);

function narcissistic(value) {
  const nums = [...(value + "")].map(Number);
  const z = parseInt(nums.length);
  let numSum = 0;
  nums.forEach((e) => {
    numSum += Math.pow(e, z);
  });
  if (numSum === value || nums.length === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// narcissistic(371);

function alphabetPosition(text) {
  text = text.toLowerCase();
  const input = text.replace(/([\s+\d])/gi, "");
  const inputArray = input.split("");
  const myArray = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = myArray.map((x) => String.fromCharCode(x));
  const outputArr = [];

  inputArray.forEach((e) => {
    let index = alphabet.indexOf(e);
    console.log(e, index + 1);
    if (index + 1 > 0) {
      outputArr.push(index++);
    }
  });

  const outputString = outputArr.join(" ");
  return outputString;
}

// alphabetPosition("Hello World");

function high(x) {
  x = x.split(" ");
  const alphabetNums = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alphabetNums.map((x) => String.fromCharCode(x));
  let wordScores = [];

  x.forEach((e) => {
    let word = e.split("");
    let wordScore = 0;

    word.forEach((element) => {
      const letterScore = alphabet.indexOf(element) + 1;
      wordScore += letterScore;
    });

    wordScores.push({ [(key = "word")]: e, [(key = "score")]: wordScore });
  });
  wordScores = wordScores.sort((a, b) => b.score - a.score);
  console.log(wordScores[0]);
}

high("hello world my name is jack");

//test cases for disemvowel
const string1 = "Hello World"; //returns "Hll Wrld"
const string2 = "My name is Jack"; //returns "My nme s jck"
const string3 = "Lorem Ipsum something something something."; //returns "Lrm psm smthng smthng smthng"
const string4 = "Just another nonsensical string";

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

disemvowel(string1);
disemvowel(string2);
disemvowel(string3);
disemvowel(string4);
