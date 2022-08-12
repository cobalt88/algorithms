let arr = [1, 1, 1, 5, 8, 9, 0, 3, 6, 5, 2, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 1;
const countingSort = (arr, target) => {
  let count = new Array(arr.length).fill(0);

  arr.forEach((e) => {
    count[e + 1] += 1;
  });
  let output = count[target];
  console.log(count);
};

countingSort(arr, target);
