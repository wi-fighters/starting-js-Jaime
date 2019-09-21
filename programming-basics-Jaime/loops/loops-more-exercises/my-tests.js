// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

const flipIt = (input) => {
    result = 0;
    switch (input) {
        case 0:
            result = 1;
            break;
        case 1:
            result = 0;
            break;
    }
    console.log(result);
};

// flipIt(1);
// flipIt(0);

const myArray = ["Madrid", "Barcelona", "Atletico", "Sevilla", "Valencia"];

console.log(myArray.join(", "));