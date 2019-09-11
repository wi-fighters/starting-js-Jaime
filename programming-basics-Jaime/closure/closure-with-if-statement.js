function add() { // I declare the function add()
    let number = 0; // I declare a variable inside it with the initial value of '0'

    function addingOne() { // I declare the function addingOne(), which is going to add 1 to the current value of 'number' and return it
        number += 1;
        return number;
    }

    function addingTen() { // I declare the function addingTen(), which is going to add 10 to the current value of 'number' and return it
        number += 10;
        return number;
    }

    function operations() { // I declare the function operations(), which is going to return the value of addingOne() or addingTen() depending on the current value of 'number'
        if (number < 10) {
            return addingOne();
        } else {
            return addingTen();
        }
    }
    return operations;
}

const addition = add(); // I declare the function addition() and assign to it the value of add(), which is equal to its return, so it's the value of the function 'operations'

console.log(addition()); // I call 'addition'. The current value of 'number' is 0. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 1.
console.log(addition()); // I call 'addition'. The current value of 'number' is 1. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 2.
console.log(addition()); // I call 'addition'. The current value of 'number' is 2. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 3.
console.log(addition()); // I call 'addition'. The current value of 'number' is 3. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 4.
console.log(addition()); // I call 'addition'. The current value of 'number' is 4. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 5.
console.log(addition()); // I call 'addition'. The current value of 'number' is 5. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 6.
console.log(addition()); // I call 'addition'. The current value of 'number' is 6. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 7.
console.log(addition()); // I call 'addition'. The current value of 'number' is 7. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 8.
console.log(addition()); // I call 'addition'. The current value of 'number' is 8. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 9.
console.log(addition()); // I call 'addition'. The current value of 'number' is 9. Since 'number' < 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 10.
console.log(addition()); // I call 'addition'. The current value of 'number' is 10. Since 'number' >= 10, we are going to run addingTen(), so we are going to add 1 to 'number' and return it. Expected output: 20.
console.log(addition()); // I call 'addition'. The current value of 'number' is 20. Since 'number' >= 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 30.
console.log(addition()); // I call 'addition'. The current value of 'number' is 30. Since 'number' >= 10, we are going to run addingOne(), so we are going to add 1 to 'number' and return it. Expected output: 40.