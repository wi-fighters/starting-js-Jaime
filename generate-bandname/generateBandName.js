function createBand(clothing, lastFoodEaten) {
    return `The name of our band is "The ${clothing} ${lastFoodEaten}"!`;
}

console.log(createBand("shirt", "peaches"));


function newBand(fruit, car) {
    const fruitUpperCase = fruit[0].toUpperCase() + fruit.substring(1).toLowerCase();
    const carUppercase = car[0].toUpperCase() + car.substring(1).toLowerCase();
    return `The name of our new rock band is "${fruitUpperCase} ${carUppercase}"!`;
}

console.log(newBand("banAna", "peugEot"));