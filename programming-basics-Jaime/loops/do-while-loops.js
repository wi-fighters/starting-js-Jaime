// DO-WHILE LOOPS

// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers).

// const myNumbers = [3, 23, 19, 210, 56];
// let i = 0;
// let sumOfNumbers = 0;

// do {
//     sumOfNumbers += myNumbers[i];
//     ++i;
// }
// while (i < myNumbers.length);

// console.log(sumOfNumbers);


// 2. Add it up! Create a program that adds numbers from 1-20 together using a while loop.

// let myNumber = 0;
// let i = 0;

// do {
//     ++i;
//     myNumber += i;

// }
// while (i < 20)

// console.log(myNumber);


// 3.Capitalize. Create a program that capitalizes the first letter of each element in an array of names, using a do while loop

const myCities = ["maDriD", "MáLaGa", "bilBao", "barCElona", "sEviLLa", "graNada"];
let i = 0;

console.log(myCities);

do {
    myCities[i] = myCities[i][0].toLocaleUpperCase() + myCities[i].substring(1).toLocaleLowerCase();;
    ++i;
}
while (i < myCities.length)

console.log(myCities);
