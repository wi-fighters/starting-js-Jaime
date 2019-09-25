// Define the object

let myCounter = {
    counter = 0
};

// Define the setters:

// 1. Reset:

Object.defineProperty(myCounter, "reset", {
    get: function () {
        this.counter = 0;
    }
});
