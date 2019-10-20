// Write a function that finds the sum of the first n natural numbers. Make your function recursive.

const sum = n => n === 1 ? n : n + sum(n - 1);

console.log(sum(1)); // 1
console.log(sum(5)); // 15
console.log(sum(10)); // 55