// DO-WHILE LOOPS

// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers).

const myNumbers = [3, 23, 19, 210, 56];
let i = 0;
let sumOfNumbers = 0;

do {
    sumOfNumbers += myNumbers[i];
    ++i;
}
while (i < myNumbers.length);

console.log(sumOfNumbers);
