
// EXERCISE 1: Return a string that represents the resulting band name, with every first letter as a capital.

function newBand(fruit, car) {

    const fruitUpperCase = fruit[0].toUpperCase() + fruit.substring(1).toLowerCase();
    const carUppercase = car[0].toUpperCase() + car.substring(1).toLowerCase();
    return `${fruitUpperCase} ${carUppercase}`;
}

console.log(`The name of our rockband is ${newBand("banAna", "peugEot")}`);


// EXERCISE 2: NOW... Every time the function is called, it should store the result in a global array (and still return it like before)

const myArrayStore = [];

console.log(myArrayStore.unshift(newBand("banaNA", "pEUgeot")));
console.log(myArrayStore);

console.log(myArrayStore.unshift(newBand("strawBErRy", "OPel")));
console.log(myArrayStore);

console.log(myArrayStore.unshift(newBand("orAnge", "mercEDes")));
console.log(myArrayStore);
