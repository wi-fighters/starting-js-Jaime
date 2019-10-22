// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

const exerciseOne = () => {

    const sumOfNumbers = value => {
        let result = 0;
        value.map(element => result += element);

        return result;
    };

    const nums = [12, 45, 95, 345, 2, 97];

    console.log(`\nOriginal array: `, nums);
    console.log(`Total result:\t`, sumOfNumbers(nums));

};

console.log(`\nExercise 1: sumOfNumbers`);
exerciseOne();


// Hello Friend. Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

const exerciseTwo = () => {

    const helloFriend = value => {
        let index = -1;
        return value.map(element => {
            index += 1;
            console.log(`Hello ${element}. ${element} is at index ${index} of my friends array`)
        });
    };

    const friends = ["Mike", "Sarah", "John", "Martha", "Alex"];

    console.log(`\nOriginal array: `, friends);
    console.log(`Greetings: \n`)
    helloFriend(friends);

};

console.log(`\nExercise 2: helloFriends`);
exerciseTwo();


// City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".

const exerciseThree = () => {

    const cityNames = value => {
        const citiesString = value.map(element => value.join(", "));
        return citiesString[0];
    };

    const cities = ["Berlin", "Paris", "Madrid", "Rome"];

    console.log(`Original array of cities: `, cities);
    console.log(`String of cities:\t\t`, cityNames(cities));

};

console.log(`\nExercise 3: cityNames\n`);
exerciseThree();


// Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4]➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20]➞ expected output: [5, 10, 9, 19]

const exerciseFour = () => {

    const oddsAndEvens = value => {

        return value.map(element => (element % 2 === 0) ? element - 1 : element + 1);
    };

    const arrayOne = [3, 5, 2, 4];
    const arrayTwo = [6, 9, 10, 20]

    console.log(`Original array one: `, arrayOne);
    console.log(`Modified array one: `, oddsAndEvens(arrayOne));
    console.log(`Original array two: `, arrayTwo);
    console.log(`Modified array one: `, oddsAndEvens(arrayTwo));

};

console.log(`\nExercise 4: oddsAndEvens\n`);
exerciseFour();


// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["mAtt", "saRA", "lara"]➞["Matt", "Sara", "Lara"]

const exerciseFive = () => {

    const names = ["mAtt", "saRA", "lara"];
    console.log(`Original array of names: `, names);

    const capitalize = value => {

        return value.map(element => element.substring(0, 1).toLocaleUpperCase() + element.substring(1).toLocaleLowerCase());
    };

    console.log(`Capitalized names:\t `, capitalize(names));

};

console.log(`\nExercise 5: Capitalize\n`);
exerciseFive();


//  Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7]➞[1, 4, 7]

const exerciseSix = () => {

    const duplicates = value => {

        const newNums = [];
        value.map(element => {
            !newNums.includes(element) ? newNums.push(element) : false;
        });

        return newNums;
    };

    const nums = [1, 4, 4, 7, 7, 7];

    console.log(`Original array of numbers:\t `, nums);
    console.log(`Array without duplicate numbers: `, duplicates(nums));

};

console.log(`\nExercise 6: Duplicates\n`);
exerciseSix();
