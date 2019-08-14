// 1. canDrive?

const canDrive = 31;
const legalAge = 18;

console.log((canDrive >= legalAge)? "Yes, you can drive! Hope you have a license": "Nope, you're too young!");


// 2. Slow Down!

const speedCheck = 120;

console.log((speedCheck > 130)? "You're going too fast - slow down": "You're driving below the speed limit");


// 3. How old are you?

const personAge = 25;

console.log((personAge < 21)? "Here's some juice": "Here's some wine");


// 4. Student Discount

const isStudent = 22;

console.log((isStudent >= 18 && isStudent <= 25)? "Ticket costs €5,00": "Ticket costs €12,00");


// 5. What time is it?

const timeOfDay = 20;

console.log((timeOfDay >= 6 && timeOfDay < 13)? "Good Morning": "Good Evening");
