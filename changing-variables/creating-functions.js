
// Changing variables and using functions

// 1. Declare a variable called name. Assign a string value. Print to screen.

let name = "Homer Simpson";

// 2. Print to screen that name with a "Schm" in front of it.

console.log("Schm" + name);

// 3. What value does name have now? Comment your answer and then print name to screen to test.
// 'name' continues having the same value: "monday", because we didn't reassign it

// 4. Assign another string value to name. Print to screen. Comment why name has now had two different values.

name = "Peter Griffin";
console.log(name);

// We call the console to print 'name' before and after the value has been reassigned. Because of that, in the first one the first value remains.

// 5. Declare a variable called coffee. Assign it a numeric value.

let coffee = 10;

// 6. Print to screen a string that tells us x regularly drinks y cups of coffee per day.

console.log(`${name} regularly drinks ${coffee} cups of coffee per day.`);

// 7. Declare a variable called daysBeforeExam. Assign it a numeric value.

let daysBeforeExam = 3;

// 8. Print to screen a string that tells us x drinks y cups of coffee with n days before exam.

console.log(`${name} drinks ${coffee} cups of coffee per day with ${daysBeforeExam} days before exam.`);

// 9.Making use of += and -=, print to screen a string that has x drinking one more cup of coffee, with (n - 1) less days before exam.

console.log(`${name} drinks ${coffee += 1} cups of coffee per day with ${daysBeforeExam -= 1} days before exam.`);

// or

console.log(`${name} drinks ${coffee++} cups of coffee per day with ${daysBeforeExam--} days before exam.`);

// ------------
// Another way to accumulate or "concatenate" strings:
//
// 1. Declare a variable called schmozzler. Assign it a string value of "Schm"

let schmozzler = "Schm";

// 2. Using the concat() function, print to screen the name variable linked to schmozzler

console.log(schmozzler.concat(name));

// or

function schmozzling(x, y) {
    return x + y;
}

console.log(schmozzling("Schm", name));