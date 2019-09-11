
// EXERCISE 0: Return a string that represents the resulting band name, with every first letter as a capital.

// function generateBandName(clothingColor, lastFoodEaten) {

//     const clothingColorUpperCase = clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
//     const lastFoodEatenUppercase = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
//     return `${clothingColorUpperCase} ${lastFoodEatenUppercase}`;
// }

// console.log(`The name of our rockband is ${generateBandName("yeLLoW", "mueSLI")}`);



// EXERCISE 1: NOW... Every time the function is called, it should store the result in a global array (and still return it like before)

// const myArrayStore = [];

// console.log(myArrayStore.unshift(generateBandName("yellOW", "muesLI")));
// console.log(myArrayStore);

// console.log(myArrayStore.unshift(generateBandName("blACK", "strawBErRy")));
// console.log(myArrayStore);

// console.log(myArrayStore.unshift(generateBandName("brOWn", "SPagheTTi")));
// console.log(myArrayStore);



// EXERCISE 2: generateBandName returns the same result as before, but this time by calling two other functions:
// capitalizeColor(clothingColor) which returns a string.
// E.g.if clothingColor is 'YeLlow', return 'Yellow'
// capitalizeFood(lastFoodEaten) which returns a string.
// E.g.if lastFoodEaten is 'PIE', return 'Pie'

// function generateBandName(clothingColor, lastFoodEaten) {

//     function capitalizeColor() {
//         return clothingColor[0].toUpperCase() + clothingColor.substring(1).toLowerCase();
//     };

//     function capitalizeFood() {
//         return lastFoodEaten[0].toUpperCase() + lastFoodEaten.substring(1).toLowerCase();
//     };

//     return `${capitalizeColor()} ${capitalizeFood()}`;

// }

// console.log(`The name of our rockband is ${generateBandName("yellOW", "muesLI")}!`);
// console.log(`The name of our rockband is ${generateBandName("blACK", "strawBErRy")}!`);
// console.log(`The name of our rockband is ${generateBandName("brOWn", "SPagheTTi")}!`);



// EXERCISE 3: generateBandName returns the same result as before, but this time calls a single function twice:
// capitalizeInitial(rawString) which returns a string.
// E.g.if rawString is 'crimson', return 'Crimson' / E.g.if rawString is 'KEBAB', return 'Kebab'

// function generateBandName(clothingColor, lastFoodEaten) {

// function capitalizeInitial(rawString) {

//     return rawString[0].toUpperCase() + rawString.substring(1).toLowerCase();
// }

// return `${capitalizeInitial(clothingColor)} ${capitalizeInitial(lastFoodEaten)}`;

// }

// console.log(`The name of our rockband is ${generateBandName("yellOW", "muesLI")}!`);
// console.log(`The name of our rockband is ${generateBandName("blACK", "strawBErRy")}!`);
// console.log(`The name of our rockband is ${generateBandName("brOWn", "SPagheTTi")}!`);



// EXERCISE 4: In the same file, write a function called makeTasty that takes color as a parameter. This func should...
// Use the accumulator pattern with just one return statement.

myGlobalArray = [];

const generateBandName = (clothingColor, lastFoodEaten, beautifying, capitalizing) => {

    const color = beautifying(capitalizing(clothingColor));
    const food = capitalizing(lastFoodEaten);

    myGlobalArray.unshift(`${color} ${food}`);

    return `${color} ${food}`;
}

const makeTasty = (color, capitalizing) => {
    tastyColor = "";
    color = capitalizeInitial(color);
    switch (color) {
        case "Red":
            tastyColor = "chilli";
            break;
        case "Orange":
            tastyColor = "tangerine";
            break;
        case "Yellow":
            tastyColor = "pineapple";
            break;
        case "Green":
            tastyColor = "sage";
            break;
        case "Blue":
            tastyColor = "blueberry";
            break;
        case "Purple":
            tastyColor = "plum";
            break;
        default:
            tastyColor = color;
    }
    return capitalizeInitial(tastyColor);
}

const capitalizeInitial = (rawString) => {

    return rawString[0].toUpperCase() + rawString.substring(1).toLowerCase();
}

console.log(`The name of our rockband is The ${generateBandName("yeLLow", "MUEsli", makeTasty, capitalizeInitial)}!`);
console.log(myGlobalArray);
console.log(`The name of our rockband is The ${generateBandName("rEd", "strawBErRy", makeTasty, capitalizeInitial)}!`);
console.log(myGlobalArray);
console.log(`The name of our rockband is The ${generateBandName("orANge", "SPagheTTi", makeTasty, capitalizeInitial)}!`);
console.log(myGlobalArray);