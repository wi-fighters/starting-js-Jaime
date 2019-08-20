// 1. Characters & Properties

// Declare a variable and assign a string as a value. Make sure that the string is at least six characters long. Print the length to the console. Access and print the 2nd and 6th elements of the string.

const name = "Natalia"; // I declared a variable with the value "Natalia" (string)
console.log(`Name length is ${name.length}`); // I print with the property ".length" how many characters my string has: 7
const secondElem = name[1]; // Here I look with index=1 for the second character of the string, since we start counting from nill (String indexes are zero-based), and declare a variable with that value
const sixthElem = name[5]; // Here I look with index=5 for the sixth character of the string and declare a variable with that value
console.log(`2nd element: ${secondElem}, 6th element: ${sixthElem}`); // I print both new variables

// 2. JS

// Declare a variable and assign the value JavaScript to the variable. Print the length of the string to the console, then print the J & S characters to the console.

const js = "JavaScript"; // First of all I declare the variable js
console.log(`The length of the string is: ${js.length} characters`); // I extract the total number of characters of the string with the property ".length"
const letterJ = js[0]; // I declare a variable with the value of the first character of my string: "J" (since we start counting from nill)
const letterS = js[4]; // I declare a variable with the value of the fifth character of my string: "S" (since we start counting from nill)
console.log(`${letterJ} & ${letterS}`); // I print both variables within a string literal using string interpolation

// 3. I can...

// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

// const sentence = "I can walk in the park all day!";
// console.log(`${sentence.substring(18, 22)}`);

const sentence = "I can walk in the park all day!";
const goal = sentence.includes("park");
const park = goal ? "park" : "keep trying";
console.log(`${park}`);

//4. aSc

// Declare a variable with the value JavaScript. Use string methods to print the the characters aSc from your declared variable.

const jsWord = "JavaScript";
console.log(`${jsWord.substring(3, 6)}`);

// 5. Upper Case

// Declare a variable with the value of Hello World. Covert the value to upper case and print the converted value to the console.

const helloWorld = "Hello World";
console.log(helloWorld.toUpperCase());

// 6. Lower Case

// Declare another variable with the value of Hello Earthling. Convert the value to lower case and print the converted value to the console.

const anotherWorld = "Hello Earthling";
console.log(`${anotherWorld.toLowerCase()}`);

// 7. Does it contain...?

// Check if the words nice shoes contains the letter l or n.

const shoes = "nice shoes";
console.log(`Does the string include a "l"? ${shoes.includes("l")}
Does the string include a "n"? ${shoes.includes("n")}`);

// 8. Front & Back

// Create a new string from a given string with the first character of the given string added at the front and back. Expected output: JavaScript => JJavaScriptJ

const firstString = "JavaScript";
console.log(`${firstString[0]}${firstString}${firstString[0]}`);

// 9. Last Three Chars

// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more. Expected output: Javascript => iptJavaScriptipt

console.log(
  `${firstString.substring(7)}${firstString}${firstString.substring(7)}`
);

// 10. Java

// Create a variable and assign a string value to it. Then, convert the value to upper case and print the value to the console. Check whether it includes Java.

const computer = "ThinkPad";
console.log(`${computer.toUpperCase()}`);
console.log(
  `Does our string include the word Java? ${computer.includes("Java")}`
);

// 11. First and Last

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. Expected output: JavaScript => tavaScripJ

const myString = "JavaScript";
console.log(
  `${myString[myString.length - 1]}${myString.substring(
    1,
    myString.length - 1
  )}${myString[0]}`
);

// 12. Concatenation

// Create 3 different variables about yourself using strings as values e.g.let firstName = "Maria".Print the sentence to the console using string interpolation. Example of output: `My name is Maria. I live in Berlin and I am a teacher`.

const myName = "Jaime";
const myCity = "Berlin";
const myJob = "web developer";
console.log(`My name is ${myName}. I live in ${myCity} and I am a ${myJob}.`);

// 13. Capitalize

// Declare a variable and assign the value the quick brown fox (lower case). Capitalize the first letter of that string.

const pangram = "the quick brown fox";
console.log(`${pangram[0].toUpperCase()}${pangram.substr(1)}`);
console.log(pangram[0].toUpperCase() + pangram.substr(1));
