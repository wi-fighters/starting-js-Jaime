
const array = [1, 2, 4, 8, 16, 32];

array.forEach(element => console.log(element > 4));

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