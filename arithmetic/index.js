// EXERCISE 1: Percent

const firstNumber = 17;
const secondNumber = 30;
const percentage = (firstNumber / secondNumber) / 100;

console.log(`${percentage}%`); // 30 is 0,0056% of 17


// EXERCISE 2: Working with averages

const workingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
const workingDays = 10;
console.log(`Noemy's average hour is: ${workingHours / workingDays}`); // 5.85 hours


// EXERCISE 3: Score

const average = 85;
const numberOfTests = 6;
const testOne = 75;
const testTwo = 70;
const testThree = 85;
const testFour = 90;
const testFive = 100;

console.log(`Expected output: Score in the sixth test: ${(average * numberOfTests) - (testOne + testTwo + testThree + testFour + testFive)}`);

