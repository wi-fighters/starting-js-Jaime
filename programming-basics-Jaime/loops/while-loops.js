// WHILE LOOPS

// 1. Run Along. Create a while loop that runs as long as i is less than 15.

const runAlong = () => {
    let i = 0; // 15

    while (i < 15) {
        ++i;
        console.log(`Number ${i}`);
    }
};
console.log(`Exercise 1: run along`);
runAlong();

// 2. City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".

const cityNames = () => {
    const citiesArray = ["Madrid", "Málaga", "Bilbao", "Barcelona", "Sevilla", "Granada"];
    let i = 0;
    let myCities = "";

    while (i < citiesArray.length) {

        if (i < citiesArray.length - 1) {
            myCities += citiesArray[i] + ", ";
        }
        else if (i === citiesArray.length - 1) {
            myCities += citiesArray[i];
        }

        ++i;
    }

    console.log(myCities);
};
console.log(`\nExercise 2: city names`);
cityNames();

// 3. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. 

const oddsAndEvens = () => {
    let myArray = [1, 2, 3, 4, 5];
    let i = 0;

    console.log(myArray);

    while (i < myArray.length) {

        if (myArray[i] % 2 === 0) {
            myArray[i] -= 1;

        } else {
            myArray[i] += 1;
        }

        ++i;
    }

    console.log(myArray);
};
console.log(`\nExercise 3: odds and evens`);
oddsAndEvens();