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
    let total = "";

    for (let i = 1; i <= 5; ++i) {

        if (i === 1) {
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
};
console.log(`\nExercise 3: odd or even reporter`)
oddOrEven();


// 4. Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

const multiplication = () => {
    total = 0;
    for (let i = 0; i <= 10; ++i) {
        total = i * 9;
        console.log(`${i} * 9 = ${total}`)
    }
};
console.log(`\nExercise 4: multiplication`)
multiplication();


// 4. Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

const multiplicationBonus = () => {
    total = 0;
    for (let i = 1; i <= 10; ++i) {

        for (let x = 0; x <= 10; ++x) {
            total = i * x;
            console.log(`${i} * ${x} = ${total}`)
        }
    }
};
console.log(`\nExercise 4: multiplication - BONUS`)
multiplicationBonus();


// 5. Grades. Write a program to calculate the average mark of the following grades: 90, 60, 77, 81, 65.

const averageMark = () => {
    const grades = [90, 60, 77, 81, 65];
    let total = 0;

    for (let i = 0; i < grades.length; ++i) {
        total += grades[i];
    }

    console.log(`The average of the grades is ${total / grades.length}`);
};
console.log(`\nExercise 5: average mark`)
averageMark();


// 6. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

const fizzBuzz = () => {

    for (i = 1; i <= 100; ++i) {
        let number = i;

        if (i % 3 === 0 && i % 5 === 0) {
            number = "FizzBuzz";
        } else if (i % 3 === 0) {
            number = "Fizz";
        } else if (i % 5 === 0) {
            number = "Buzz"
        }
        console.log(number);
    }

};
console.log(`\nExercise 6: Fizz Buzz`)
fizzBuzz();


// 7. Sum of Multiples: Write a program to add the multiples of 3 and 5 under 1000.

const sumOfMultiples = () => {
    total = 0;
    for (i = 0; i < 1000; ++i) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    console.log(`If we add the multiples of 3 and 5 under 1000, the total is ${total}`);
};
console.log(`\nExercise 7: Sum of Multiples`)
sumOfMultiples();


// 8. Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.

const names = () => {
    let myNames = ["Silvia", "Juan", "Blanca", "Katja", "Javi"];

    for (i = 0; i < myNames.length; ++i) {
        console.log(`Hello ${myNames[i]}!`);
    }
};
console.log(`\nExercise 8: Family and friend names`)
names();


// 8. BONUS: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

const namesBonus = () => {
    let myNames = ["Silvia", "Juan", "Blanca", "Katja", "Javi"];

    for (i = 0; i < myNames.length; ++i) {
        console.log(`${myNames[i]} is at index ${i} of myNames array`);
    }
};
console.log(`\nExercise 8: Family and friend names`)
namesBonus();


// // 9. Write programs that produce the following outputs:
// // 100 200 300 400 500 600 700 800 900 1000
// // 1 2 4 8 16 32 64 128
// // 0 2 4 6 8 10
// // 3 6 9 12 15
// // 9 8 7 6 5 4 3 2 1 0

// const myChains = () => {


// };
// console.log(`\nExercise 9: Family and friend names`)
// myChains();