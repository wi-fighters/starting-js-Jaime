// 1. Lowest Number

const Peter = 28;
const John = 32;
const Sarah = 27;
const Hannah = 33;
const Michael = 25;
const friends = [Peter, John, Sarah, Hannah, Michael];

console.log(`The youngest friend in the group is ${Math.min(...friends)} years old.`);


// 2. Highest Number

console.log(`The oldest friend in the group is ${Math.max(...friends)} years old.`);


// 3. Rounding
// 3.1. Round up

const numberOne = 3321.32321;
const numberTwo = 326.76;
const numberThree = 76788.7;
const numberFour = -9.78;
const numberFive = 43.342;

console.log(`Rounding up the given numbers: ${Math.ceil(numberOne)}, ${Math.ceil(numberTwo)}, ${Math.ceil(numberThree)}, ${Math.ceil(numberFour)}, ${Math.ceil(numberFive)}`);


// 3.2 Round down

console.log(`Rounding down the given numbers: ${Math.floor(numberOne)}, ${Math.floor(numberTwo)}, ${Math.floor(numberThree)}, ${Math.floor(numberFour)}, ${Math.floor(numberFive)}`);
