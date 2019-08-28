// Every time the function is called, it should store the result in a global array (and still return it like before)

function newBand(fruit, car) {
    const fruitUpperCase = fruit[0].toUpperCase() + fruit.substring(1);
    const carUppercase = car[0].toUpperCase() + car.substring(1);
    return `The name of our new rock band is "${fruitUpperCase} ${carUppercase}"!`;
}

console.log(newBand("banana", "peugeot"));