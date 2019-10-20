// Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = str => {
    const repeat = () => str;
    return repeat;
};

const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

// console.log(typeof f1);
console.log(f1());
console.log(f2());
console.log(f3());