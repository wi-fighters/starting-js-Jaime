// EXERCISE 1: Vars & console.log()

let firstName = "Jaime";
let surname = "Segura";

console.log(firstName,surname);

// EXERCISE 2: Variable info

let name = "John Smith";
let age = 43;
let job = "teacher";
let city = "Berlin";
let hobby = "football";

console.log(name, age, job, city, hobby);

// EXERCISE 3: Concatenation

console.log(name + " is a " + age + " year old " + job + " who lives in " + city);

// EXERCISE 4: Data Types

let length = 16.78; // number
let lastName = "Johnson"; // string
let car = ""; // string
let isOpen = true; // boolean

console.log(typeof length);
console.log(typeof lastName);
console.log(typeof car);
console.log(typeof isOpen);

// EXERCISE 5: Number Vars

let ageMark = 10; // number
let ageJohn = "20"; // string

console.log(typeof ageMark);
console.log(typeof ageJohn);

// EXERCISE 6: Who's older?

console.log((ageJohn > ageMark)? "John is older than Mark: true": "No, Mark is older");

// EXERCISE 7: Compare and contrast

let a = 1;
let b = 2;
let c = 3;

console.log(a === b);
console.log(a === c);
console.log(b === c);

console.log(typeof((a === b), (a === c), (b === c))); // boolean

// EXERCISE 8: isFun?

let programmingLanguage = "JavaScript";
let isFun = true;

console.log(programmingLanguage + " is fun: " + isFun);

// EXERCISE 9: What typpe is it?

let test
console.log(test); // undefined, because we didn't assign a value to the variable test, we only declared it

// EXERCISE 10: Calculation!

let calculation = 2*5 + 10/2 - 5;
console.log(calculation); // 10
