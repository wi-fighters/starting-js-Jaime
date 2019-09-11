function mathematic() { // this is my 'mathematic' function declaration
    let number = 0; // it stores a variable that starts with the value '0'

    function addOne() { // the function addOne() is going to add 1 to the actual value of number and return it
        number += 1;
        return number;
    }

    function substractOne() { // the function substractOne() is going to substract 1 to the actual value of number and return it
        number -= 1;
        return number;
    }

    let options = [addOne, substractOne]; // the variable operation has 2 function expressions inside its array

    return options; // the return of mathematic() is an array. So when we call it from the outside we have to decide first which of them are we going to run (using index)
}

let operation = mathematic(); // I create a variable called operation and give it the value of mathematic(), which is equal to its return: [function: addOne, function: substractOne]

console.log(operation); // this is just going to print the value of 'operation', which is the value of 'options': an array which contains 2 function expressions

console.log(operation[0]()); // we are choosing 'addOne', which is contained in the index 0 of the array 'options', and we are running it. The value of 'substractOne' is the actual value of 'number' + 1. In this moment it will be 1.

// console.log(operation()); // this throws an error because the value of 'operation' is an array and not a function, so we CAN'T call it like this. We have to call one of the functions inside the array

console.log(operation[1]()); // we are choosing 'substractOne', which is contained in the index 1 of the array 'options', and we are running it. The value of 'substractOne' in is the actual value of 'number' - 1. Since the value was 1 before this call, now it's goint to be 0.
