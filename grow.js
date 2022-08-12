// Given an array of integers, return the product of the array. (multiply all the integers in sequence)

let x = [1, 2, 3, 4, 5, 6];

const grow = (x) => console.log(x.reduce((a, b) => (b *= a)));

grow(x);
