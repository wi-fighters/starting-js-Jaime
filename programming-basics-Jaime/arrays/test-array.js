
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


// const list = ["h", "e", "l", "l", "o"];
// list.map((currElement, index) => {
//     console.log("The current iteration is: " + index);
//     console.log("The current element is: " + currElement);
//     console.log("\n");
//     return currElement; //equivalent to list[index]
// });


// const names = ["mAtt", "saRA", "lara"];

// const capitalize = names.map(name => name.substring(0, 1).toLocaleUpperCase() + name.substring(1).toLocaleLowerCase());

// console.log(capitalize);
// // Peter

// const obj = {
//     name: "Jaime",
//     age: 31,
// };

// const newArray = [...obj];

// console.log(newArray);

const cuisines = [["pizza", "burratta", "spaguetti"], ["cocido", "gazpacho"], ["burguer"]];
const cities = ["Madrid", "Sevilla", "Toledo", "Ciudad Real", "Cádiz"];

const isLongerThanFive = value => value.filter(element => element.length > 5);
const isLongerThanSix = value => value.filter(element => element.length > 6);
const isLongerThanSeven = value => value.filter(element => element.length > 7);

const filterFunc = (value, callback) => callback(value);

console.log(filterFunc(cities, isLongerThanFive));
console.log(filterFunc(cities, isLongerThanSix));
console.log(filterFunc(cities, isLongerThanSeven));

// const arrayLongerThanTwo = filterFunc(cuisines, isLongerThanTwo);

// const pushInsideNewArray = (value, destination) => destination.push(value.map(element => element));

// console.log(arrayLongerThanTwo);



// pushInsideNewArray(arrayLongerThanTwo, newArray);

// console.log(newArray);