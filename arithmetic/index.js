// EXERCISE 1: Percent

const firstNumber = 17;
const secondNumber = 30;
const percentage = (firstNumber * 100) / secondNumber;

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
const currentAverage = 78;
const currentAssessments = 8;

console.log(`James needs a minimum of ${(finalAverage * finalAssessments) - (currentAverage * currentAssessments)}% to get an 80% average.`); // 96%


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


// EXERCISE 6: Geometry Formulas

// 6.1: Perimeter of a square

const sideLength = 4.75;
const sides = 4;

console.log(`The perimeter of this square is ${sideLength * sides}cm.`); // 19cm


// 6.2: Perimeter of a triangle

const sideOne = 5;
const sideTwo = 6;
const sideThree = 7;

console.log(`The perimeter of this triangle is ${sideOne + sideTwo + sideThree}cm.`); // 18cm


// 6.3: Area of a square

const sideSquare = 5;
const totalSides = 4;

console.log(`The area of this square is ${sideSquare * totalSides}cm.`); // 20cm


// 6.4: Area of a triangle

// const sideOneTriangle = 5;
// const sideTwoTriangle = 6;
// const sideThreeTriangle = 7;

// console.log(`The area of this triangle is ${}cm.`); //


// 6.5: Volume of a cube

const sideLengthCube = 9;

console.log(`The volume of the cube is ${sideLengthCube * sideLengthCube * sideLengthCube}cm.`); // 729cm


// EXERCISE 7: Basic world problems

// 7.1: At the movies

const totalAmount = 6450;
const priceTicket = 15;

console.log(`${totalAmount / priceTicket} people purchased a ticket.`); // 430 people


// 7.2: Income per week

const income = 500;
const months = 52;

console.log(`Silvia's income per year is ${income * months} dollars`); // 26000 dollars




