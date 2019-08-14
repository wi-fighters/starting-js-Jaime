// 1. canDrive?

const canDrive = 15;
const legalAge = 18;

console.log((canDrive >= legalAge)? "Yes, you can drive! Hope you have a license": "Nope, you're too young!");


// 2. Slow Down!

const speedCheck = 135;
const maxSpeed = 130;

console.log((speedCheck > maxSpeed)? "You're going too fast - slow down": "You're driving below the speed limit");


// 3. How old are you?

const personAge = 20;
const minAge = 21;

console.log((personAge < minAge)? "Here's some juice": "Here's some wine");


// 4. Student Discount

// const isStudent = 28;

// console.log((isStudent >= 18 && isStudent <= 25)? "Ticket costs €5,00": "Ticket costs €12,00");

const student = true;
const isStudent = (student) ? "Ticket costs 5EUR" : "Ticket costs 12EUR";

console.log(isStudent);


// 5. What time is it?

// const timeOfDay = 20;

// console.log((timeOfDay >= 6 && timeOfDay < 13)? "Good Morning": "Good Evening");

const morning = true;
const timeOfDay = (morning)? "Good morning": "Good evening";

console.log(timeOfDay);