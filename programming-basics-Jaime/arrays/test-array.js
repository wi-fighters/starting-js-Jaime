
const array = [1, 2, 4, 8, 16, 32];

let index = 0;

const newArray = array.map(element => {
    index += 1;
    console.log(array[index]);
    return array[index] % element === 0;
});
newArray.pop();
console.log(newArray);

console.log(newArray.every(element => element === true));