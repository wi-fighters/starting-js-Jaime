// Define the object

const myCounter = {
    counter: 100
};

console.log(`\nThis is the current value of the variable myCounter:`);
console.log(myCounter);
console.log(`Counter: ${myCounter.counter}`);

// Define the setters:

// 1. Reset:

Object.defineProperty(myCounter, "reset", {
    get: function () {
        this.counter = 0;
    }
});

console.log(`\nNow I'm going to reset the counter`);
myCounter.reset;
console.log(`Counter: ${myCounter.counter}`);

// 2. Add:

Object.defineProperty(myCounter, "add", {
    set: function (value) {
        this.counter += value;
    }
});

console.log(`\nNow I'm going to add 25 to the counter`);
myCounter.add = 25;
console.log(`Counter: ${myCounter.counter}`);

// 3. Increment:

Object.defineProperty(myCounter, "increment", {
    get: function () {
        this.counter++;
    }
});

console.log(`\nNow I'm going to increment 1 to the counter`);
myCounter.increment;
console.log(`Counter: ${myCounter.counter}`);

// 4. Decrement:

Object.defineProperty(myCounter, "decrement", {
    get: function () {
        this.counter--;
    }
});

console.log(`\nNow I'm going to decrement 1 to the counter`);
myCounter.decrement;
console.log(`Counter: ${myCounter.counter}`);

// 5. Subtract:

Object.defineProperty(myCounter, "subtract", {
    set: function (value) {
        this.counter -= value;
    }
});

console.log(`\nNow I'm going to subtract 15 to the counter`);
myCounter.subtract = 15;
console.log(`Counter: ${myCounter.counter}`);
