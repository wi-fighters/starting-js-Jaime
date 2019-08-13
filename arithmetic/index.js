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

console.log(`Expected output: Score in the sixth test: ${(average * numberOfTests) - (testOne + testTwo + testThree + testFour + testFive)}`); // 90


// EXERCISE 4: The minimum Score

const finalAverage = 80;
const finalAssessments = 9;
const actualAverage = 78;
const actualAssessments = 8;

console.log(`James needs a minimum of ${(finalAverage * finalAssessments) - (actualAverage * actualAssessments)}% to get an 80% average.`); // 96%


// EXERCISE 5: Consumer Formula

const billOne = 22.35;
const tipOne = billOne * 0.10;
const billTwo = 26.67;
const tipTwo = billTwo * 0.15;
const billThree = 35.92;
const tipThree = billThree * 0.20;

console.log(`The total amount of the first bill including 10% tip is: ${billOne + tipOne}`); // 24.58
console.log(`The total amount of the second bill including 15% tip is: ${billTwo + tipTwo}`); // 30.67
console.log(`The total amount of the third bill including 20% tip is: ${billThree + tipThree}`); // 43.10
