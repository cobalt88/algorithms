const string = "abcdef";

function permutations(string) {
  let permutations = [];
  if (string.length === 1) {
    permutations.push(string);
    return permutations;
  }
  for (let i = 0; i < string.length; i++) {
    let firstChar = string[i];
    let remainingString = string.slice(0, i) + string.slice(i + 1);
    let remainingPermutations = permutations(remainingString);
    for (let j = 0; j < remainingPermutations.length; j++) {
      permutations.push(firstChar + remainingPermutations[j]);
    }
  }
  console.log(permutations);
}

permutations(string);

async function allPermutations(string) {

  stringArray = string.split("");

  const output = await if (stringArray.length === 1) {
    output.push(stringArray);
  } else {
    stringArray.array.forEach((e) => {
      output.push(e);
    });
  };
  for
}
