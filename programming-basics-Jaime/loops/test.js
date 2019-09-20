const myNumbers = [1, 1, 23, 5, 5, 34, 3, 3, 3];
let i = 0;
let uniqueItems = [];

do {

    if (uniqueItems.includes(myNumbers[i]) !== true) {
        uniqueItems.push(myNumbers[i]);
    }

    ++i;
} while (i < myNumbers.length);

console.log(uniqueItems);