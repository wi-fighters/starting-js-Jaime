const nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function (snack) {
            this.snacks.push(snack);
            return this;
        }
    }
};

// 1 - Using a for loop, console.log all of the numbers in the primeNumbers array.

const primeNumbers = nestedData.innerData.numberData.primeNumbers;
console.log(`\nThese are the prime numbers:`);
for (let i = 0; i < primeNumbers.length; ++i) {
    console.log(primeNumbers[i]);
};

// 2 - Using a for loop, console.log all of the even Fibonnaci numbers.

const fibonnaciNumbers = nestedData.innerData.numberData.fibonnaci;
console.log(`\nThese are the Fibonnaci numbers:`);
for (let i = 0; i < fibonnaciNumbers.length; ++i) {
    if (fibonnaciNumbers[i] % 2 === 0) {
        console.log(fibonnaciNumbers[i]);
    }
};

// 3 - Console.log the value “second” inside the order array.

const orderArray = nestedData.innerData.order;
console.log(`\nThis is the second value of the order array: ${orderArray[1]}`);

// 4 - Inside of the addSnack function there is a special keyword called this.What does the word this refer to inside the addSnack function?

console.log(`\nNow I'm adding chettos to the snacks array`);
nestedData.innerData.addSnack("chettos");
console.log(nestedData.innerData.snacks);

// In this case "this" refers to "nestedData.innerData"
