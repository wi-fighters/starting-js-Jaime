// Create a function that takes in an array and returns an array of the accumulating sum.

const accumulatingArray = arr => {

    for (let i = 1; i < arr.length; ++i) {
        arr[i] += arr[i - 1]

    }
    return arr;
}

console.log(accumulatingArray([1, 1, 1, 1, 1]));
// console.log(accumulatingArray([1, 2, 3, 4, 5]));