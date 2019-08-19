// Winston Exercise

const name = " Winston  ";
const correctName = name.replace(/\s/g, "");

console.log(`Hello ${name.trim()}.
Your name is ${correctName.length} letters long.
The first letter of your name is ${correctName[0]}, the last is ${correctName.substring(correctName.length - 1)}.
If I wanted to be funny, I would call you ${correctName.substring(0,3)}chmoo.`);
