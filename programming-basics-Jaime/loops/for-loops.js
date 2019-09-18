// FOR LOOPS 

// 1. Addition: Write a program to add up the numbers 1 to 20.

const addition = () => {
    let total = 0;
    for (let i = 0; i <= 20; ++i) {
        total += i;
    }
    console.log(`Total: ${total}`);
};
console.log(`Exercise 1: Addition`)
addition();


// 2. There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.

const beerBottles = () => {
    let total = 0;

    for (let i = 1; i <= 5; ++i) {
        total += 1;

        if (total === 1) {
            console.log(`There is one bottle of beer on the wall.`)
        } else {
            switch (i) {
                case 2:
                    total = "two";
                    break;
                case 3:
                    total = "three";
                    break;
                case 4:
                    total = "four";
                    break;
                case 5:
                    total = "five";
                    break;
            }
            console.log(`There are ${total} bottles of beer on the wall.`)
        }
    }

};
console.log(`\nExercise 2: beer bottles`)
beerBottles();


// 3. The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

const oddOrEven = () => {
    let number = 0;

    for (let i = 0; i < 20; ++i) {
        number += 1;
        if (number % 2 === 0) {
            console.log(`The number ${number} is even`)
        } else {
            console.log(`The number ${number} is odd`)
        }
    }
}
console.log(`\nExercise 3: odd or even reporter`)
oddOrEven();
