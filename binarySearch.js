let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let target = 12;

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let middle = 0;

  while (array[middle] !== target && left <= right) {
    if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  let output = array[middle] === target ? middle : "Not found";

  console.log(output);
};

binarySearch(array, target);
