// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

const howManyTimes = num => {

    const letterA = "a";

    return `Ed${letterA.repeat(num)}bit`
};

console.log(howManyTimes(5)); // "Edaaaaabit"
console.log(howManyTimes(10)); // "Edaaaaaaaaaabit"
console.log(howManyTimes(15)); // "Edaaaaaaaaaaaaaaabit"