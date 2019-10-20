//Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

const makePlusFunction = baseNum => {

    const result = num => {
        return baseNum + num;
    };

    return result;
};

const plusTwo = makePlusFunction(2);
const plusFive = makePlusFunction(5);
const plusSeven = makePlusFunction(plusTwo(plusFive(0)));
const plusTen = makePlusFunction(10);

console.log(plusTwo(18)); // 20
console.log(plusFive(0)); // 5
console.log(plusSeven(41)); // 48
console.log(plusTen(-1)); // 9
console.log(plusTwo(plusFive(plusSeven(plusTen(1))))); // 25