// 1. Lowest Number

const Peter = 28;
const John = 32;
const Sarah = 27;
const Hannah = 33;
const Michael = 25;
const friends = [Peter, John, Sarah, Hannah, Michael];

console.log(`The youngest friend in the group is ${Math.min(...friends)} years old.`);



// 2. Highest Number

console.log(`The oldest friend in the group is ${Math.max(...friends)} years old.`);


// 3. Rounding
// 3.1. Round up

const numberOne = 3321.32321;
const numberTwo = 326.76;
const numberThree = 76788.7;
const numberFour = -9.78;
const numberFive = 43.342;

console.log(`Rounding up the given numbers: ${Math.ceil(numberOne)}, ${Math.ceil(numberTwo)}, ${Math.ceil(numberThree)}, ${Math.ceil(numberFour)}, ${Math.round(numberFive)}`);


// 3.2 Round down

console.log(`Rounding down the given numbers: ${Math.floor(numberOne)}, ${Math.floor(numberTwo)}, ${Math.floor(numberThree)}, ${Math.floor(numberFour)}, ${Math.floor(numberFive)}`);


// 4. Dice Roll

const minNum = Math.ceil(1);
const maxNum = Math.floor(6);

console.log(Math.floor(Math.random()*(maxNum - minNum + 1) + minNum));

// CONCEPTUAL UNDERSTANDING

// The goal of this exercise was to use string methods and string interpolation to complete the tasks.
//
// What is a string method?
// They are properties that help you to work with strings. For example: variable.length, Math.ceil(), variable.includes("x") or variable.toUpperCase()
//
// What is a string interpolation?
// It is a really useful programming language feature that allows you to inject variables directly into a string. Example: (`This is my ${variable}`)
//
//
// SOMETHING NEW I LEARNT: extract the lowest or the highest number FROM A STRING using "..." + variable
//
// const numbers = [19, 3, 22, 25, 2];
// console.log(Math.min(...numbers)); --> here you will get "2"
//
// It is mandatory to type the "..." in this case. If you don't do it, you just get "NaN":
//
// const numbers = [19, 3, 22, 25, 2];
// console.log(Math.min(numbers)); --> here you will get "NaN"
//
//
// There is something I tried and DIDN'T MANAGE. In the 1st exercise I wanted to print the name of the variable with the lowest number. I tried like this:
//
// console.log(`The youngest friend in the group is ${Math.min(...friends).name} years old.`);
//
// and like this:
//
// console.log(`The youngest friend in the group is ${(Math.min(...friends)).name} years old.`);
//
// but the console returned "undefined" in both of the cases.
