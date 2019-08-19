// 1

const name = "Natalia";
console.log(`Name length is ${name.length}`);
const secondElem = name[1];
const sixthElem = name[5];
console.log(`2nd element: ${secondElem}, 6th element: ${sixthElem}`);


// 2

const js = "JavaScript";
console.log(`The length of the string is: ${js.length} characters`);
const letterJ = js[0];
const letterS = js[4];
console.log(`${letterJ} & ${letterS}`);


// 3

// const sentence = "I can walk in the park all day!";
// console.log(`${sentence.substring(18, 22)}`);

const sentence = "I can walk in the park all day!";
const goal = sentence.includes("park");
const park = (goal)? "park" : "keep trying";
console.log(`${park}`);


//4

const jsWord = "JavaScript";
console.log(`${jsWord.substring(3, 6)}`);


// 5

const helloWorld = "Hello World";
console.log(`${helloWorld.toUpperCase()}`);


// 6

const anotherWorld = "Hello Earthling";
console.log(`${anotherWorld.toLowerCase()}`);


// 7

const shoes = "nice shoes";
console.log(`Does the string include a "l"? ${shoes.includes("l")}
Does the string include a "n"? ${shoes.includes("n")}`);


// 8

const firstString = "JavaScript";
console.log(`${firstString[0]}${firstString}${firstString[0]}`);


// 9

console.log(`${firstString.substring(7)}${firstString}${firstString.substring(7)}`);


// 10

const computer = "ThinkPad";
console.log(`${computer.toUpperCase()}`);
console.log(`Does our string include the word Java? ${computer.includes("Java")}`);


// 11

const myString = "JavaScript";
console.log(`${myString[myString.length - 1]}${myString.substring(1, myString.length - 1)}${myString[0]}`);


// 12

const myName = "Jaime";
const myCity = "Berlin";
const myJob = "web developer";
console.log(`My name is ${myName}. I live in ${myCity} and I am a ${myJob}.`);


// 13


