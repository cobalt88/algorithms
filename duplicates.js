const countTheDoubles = (s) => {
  let input = s.toLowerCase();
  let inputArray = input.split("");
  let sortedArray = inputArray.sort();
  let singlesArray = [];
  let doublesArray = [];

  sortedArray.forEach((element) => {
    if (!singlesArray.includes(element)) {
      singlesArray.push(element);
    } else if (!doublesArray.includes(element)) {
      doublesArray.push(element);
    }
  });

  console.log(doublesArray.length); //count of how many doubles
  console.log(doublesArray); //array of what letters are duplicated
};

countTheDoubles("wrsetdruyiftuogyihu");

const palindrome = (string) => {
  const newString = string.replace(/\s+/g, "");
  const a = newString;
  const b = [...newString].reverse().join("");

  a === b ? console.log(true) : console.log(false);
};
