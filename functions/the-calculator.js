// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. // It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number) {
    return `The result of squaring the number ${number} is ${number * number}.`;
}

console.log(squareNumber(3));

//Write a function called halfNumber that will take one argument(a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
    return `Half of ${num} is ${num / 2}.`
}

console.log(halfNumber(5));

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. 
// It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
    num1 = num2 * 0.5;
    return `${num1} is 50% of ${num2}.`
}

console.log(percentOf(0, 4));

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius) {
    const pi = 3.14159265359;
    return `The area for a circle with radius ${radius} is ${(radius * radius * pi).toFixed(2)}.` // The toFixed() method is used with a value of 2 to round off a number up to 2 decimal places.
}

console.log(areaOfCircle(2));

