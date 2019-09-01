// Every time the function is called, it should store the result in a global array (and still return it like before)

const myArrayStore = [];

function newBand(fruit, car) {
    const fruitUpperCase = fruit[0].toUpperCase() + fruit.substring(1);
    const carUppercase = car[0].toUpperCase() + car.substring(1);
    return `${fruitUpperCase} ${carUppercase}`;
}

console.log(myArrayStore.unshift(newBand("banana", "peugeot")));
console.log(myArrayStore);

console.log(myArrayStore.unshift(newBand("strawberry", "opel")));
console.log(myArrayStore);

console.log(myArrayStore.unshift(newBand("orange", "mercedes")));
console.log(myArrayStore);

