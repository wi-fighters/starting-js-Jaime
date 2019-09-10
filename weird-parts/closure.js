// var counter = 0;

// function add() {
//     console.log(counter += 1);
// }

// add();
// add();
// add(); 


// This here:

// var counter = 0;

// function add() {
//     counter += 1;
//     return counter;
// }

// add();
// add();
// console.log(add());

// would be the same than this:

// var add = (function () {
//     var counter = 0;

//     return function () {
//         counter += 1;
//         return counter;
//     };
// })();

// add();
// add();
// console.log(add());


// let val = 7;

// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b
//         return ret

//     }
//     return addNumbers

// }

// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);


// function createCounter() {
//     let counter = 0;
//     const myFunction = function () {
//         counter = counter + 1;
//         return counter;

//     }
//     return myFunction

// }

// const increment = createCounter(); // 1
// const c1 = increment(); // 1
// const c2 = increment(); // 1
// const c3 = increment(); // 1
// console.log(c1,c2,c3);


// let c = 4;
// function addX(x) {
//     return function (n) {
//         return n + x
//     }
// }
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);



// function buildContor() {
//     var contor = 0;
//     var displayContor = function () {
//         console.log(contor++);
//         contor++;
//     };
//     return displayContor;
// }

// var myContor = buildContor();
// myContor(); // 1
// myContor(); // 2
// myContor(); // 3


// function greet(whatToSay) {

//     return function (name) {
//         console.log(whatToSay + " " + name);
//     }
// }

// var sayHi = greet("hi");
// sayHi("Ho");




// var myVar = 1;

// function myFunction() {

//     var myVar = 2;

//     function innerFunction() {
//         console.log(myVar++);
//     }

//     return innerFunction;
// }

// var outterFunction = myFunction();

// // console.log(outterFunction);
// console.log(outterFunction());


// ---------------------------------------------------------------
// Different forms to do the same closure:
// 1:

const sayMyName = () => {
    const name = "Jaime";

    return showMyName = () => {
        console.log(name);
    };
};

const giveName = sayMyName();
giveName();

// 2:

// const sayMyName = () => {
//     const name = "Jaime";

//     showMyName = () => {
//         console.log(name);
//     };
//     return showMyName;
// };

// const giveName = sayMyName();
// giveName();

// // 3:

// function sayMyName() => {
//     const name = "Jaime";

//     return showMyName = () => {
//         console.log(name);
//     };
// };

// const giveName = sayMyName();
// giveName();
