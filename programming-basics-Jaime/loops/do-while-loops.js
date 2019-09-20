// DO-WHILE LOOPS

// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers).

const sumOfNumbers = () => {
    const myNumbers = [3, 23, 19, 210, 56];
    let i = 0;
    let sumOfNumbers = 0;

    do {
        sumOfNumbers += myNumbers[i];
        ++i;
    }
    while (i < myNumbers.length);

    console.log(sumOfNumbers);
};
console.log(`EXERCISE 1: sum of numbers`);
sumOfNumbers();

// 2. Add it up! Create a program that adds numbers from 1-20 together using a while loop.

const addItUp = () => {
    let myNumber = 0;
    let i = 0;

    do {
        ++i;
        myNumber += i;

    }
    while (i < 20)

    console.log(myNumber);
};
console.log(`\nEXERCISE 2: add it up`);
addItUp();

// 3.Capitalize. Create a program that capitalizes the first letter of each element in an array of names, using a do while loop

const capitalize = () => {
    const myCities = ["maDriD", "MáLaGa", "bilBao", "barCElona", "sEviLLa", "graNada"];
    let i = 0;

    console.log(myCities);

    do {
        myCities[i] = myCities[i][0].toLocaleUpperCase() + myCities[i].substring(1).toLocaleLowerCase();
        ++i;
    } while (i < myCities.length);

    console.log(myCities);
};
console.log(`\nEXERCISE 3: capitalize`);
capitalize();

// 4. No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values using a do while loop. See the examples below. 

const noDuplicates = () => {
    const myNumbers = [1, 1, 23, 5, 5, 34, 3, 3, 3];
    let i = 0;
    let uniqueItems = [];

    do {

        if (uniqueItems.includes(myNumbers[i]) !== true) {
            uniqueItems.push(myNumbers[i]);
        }

        ++i;
    } while (i < myNumbers.length);

    console.log(`We go from the array [${myNumbers}] to this array: [${uniqueItems}]`);
};
console.log(`EXERCISE 4: no duplicates`);
noDuplicates();

// 5. Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.

const repeatIt = () => {
    const repeatedItem = [];
    let i = 0;

    const program = (item, times) => {

        do {
            repeatedItem.push(item);
            ++i;
        }
        while (i < times);


        return repeatedItem;
    }

    console.log(program("Hello", 5));
};
console.log(`\nEXERCISE 5: repeat it`);
repeatIt();

// BONUSES - Choose the loop

// Factors. A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36]
// Create a program that determines whether or not a given array is a factor chain using a do while loop.

const factors = () => {
    const factorNumbers = [3, 6, 12, 35];
    let i = 0;
    let total = "";
    let answer = "";

    const myOperation = (itemOne, itemTwo) => { // 3, 7
        return itemTwo % itemOne === 0;
    };

    do {
        total = myOperation(factorNumbers[i], factorNumbers[i + 1]);
        if (total === true) {
            answer = factorNumbers + " " + "TRUE";
        } else {
            answer = factorNumbers + " " + "FALSE";
        }

        ++i;
    } while (i < factorNumbers.length - 1 && total !== false);

    console.log(answer);
};
console.log(`\nBONUS EXERCISE: factors`);
factors();