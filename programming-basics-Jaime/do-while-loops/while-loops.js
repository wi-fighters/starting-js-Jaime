// WHILE LOOPS

// 1. Run Along. Create a while loop that runs as long as i is less than 15.

// let i = 0; // 15

// while (i < 15) {
//     ++i;
//     console.log(`Number ${i}`);
// }

// 2. City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".

const cityNames = ["Madrid", "Málaga", "Bilbao", "Barcelona", "Sevilla", "Granada"];
let i = 0;
let myCities = "";

while (i < cityNames.length) {

    if (i === cityNames.length - 1) {
        myCities += cityNames[i];
    }
    else if (i < cityNames.length - 1) {
        myCities += cityNames[i] + ", ";
    }
    ++i;
}

console.log(myCities);


// 3. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. 

// let myArray = [1, 2, 3, 4, 5];
// let i = 0;

// console.log(myArray);

// while (i < myArray.length) {

//     if (myArray[i] % 2 === 0) {
//         myArray[i] -= 1;

//     } else {
//         myArray[i] += 1;
//     }

//     ++i;
// }

// console.log(myArray);
