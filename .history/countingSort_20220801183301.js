let arr = [1, 1, 1, 5, 8, 9, 0, 3, 6, 5, 2, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const countingSort = (arr) => {
  let count = [];
  for (let i = 0; i <= arr.length; i++) {
    count[i] = 0;
  }
  arr.forEach((e) => {
    count[e + 1] += 1;
  });
  console.log(count);
};

countingSort(arr);
