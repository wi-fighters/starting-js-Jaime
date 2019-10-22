
// const array = [1, 2, 4, 8, 16, 32];

// array.forEach(element => console.log(element > 4));

// let index = 0;

// const newArray = array.map(element => {
//     index += 1;
//     console.log(array[index]);
//     return array[index] % element === 0;
// });
// newArray.pop();
// console.log(newArray);

// console.log(newArray.every(element => element === true));

// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const two = outerArray => {

//     return outerArray.map(innerArray => innerArray.map(element => console.log(element)));

// }

// two(array);

// const factors = integers => {
//     for (let i = 0; i < integers.length; i++) {
//         if ((integers[i + 1]) % integers[i] === 0) {
//             return true;
//         }
//         return false;
//     }

//     // integers.map((value, i) => (value[i + 1] % value === 0 ? true : false));
// };

// console.log(factors([1, 2, 4, 8, 16, 32]));
// console.log(factors([1, 1, 1, 1, 1, 1]));
// console.log(factors([2, 4, 6, 7, 12]));
// console.log(factors([10, 1]));


const list = ["h", "e", "l", "l", "o"];
list.map((currElement, index) => {
    console.log("The current iteration is: " + index);
    console.log("The current element is: " + currElement);
    console.log("\n");
    return currElement; //equivalent to list[index]
});