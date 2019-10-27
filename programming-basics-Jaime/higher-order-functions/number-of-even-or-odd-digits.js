// Create a function that takes in an array of integers returns the number of even or odd digits for each number, depending on the parameter.
// countDigits([22, 53, 99, 61, 777, 8], "odd") ➞ [0, 2, 2, 1, 3, 0]

const countDigits = (arr, type) => {

    const toString = arr.map(el => parseInt(el.toString().split("")));
    return toString;
    // type === "odd" ? arr.map(element => divideNumber) : false;
};

console.log(countDigits([22, 53, 99, 61, 777, 8], "odd")); // [0, 2, 2, 1, 3, 0]
console.log(countDigits([22, 53, 99, 61, 777, 8], "even")); // [2, 0, 0, 1, 0, 1]
console.log(countDigits([54, 113, 89, 10], "odd")); //, [1, 3, 1, 1]
