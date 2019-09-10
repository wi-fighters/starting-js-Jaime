// CLOSURE

// function a() {

//     function c() {

//         function b() {
//             console.log(myVar);
//             d();
//         }

//         b();

//     }

//     var myVar = null;
//     c();

// }

// function d() {
//     console.log(myVar);
// }

// var myVar = 1;
// a();


// OBJECTS

// var person = new Object();

// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// var firstNameProperty = "firstname";

// console.log(typeof person);
// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);

// person.address = new Object();
// person.address.street = "False Street 123";
// person.address.city = "Berlin";

// console.log(person.address);
// console.log(person.address.city);
// console.log(person["address"]["city"]);


// OBJECTS SHORTHANDS

// var person = {};

// console.log(typeof person);
// console.log(person);

// person = { firstname: "Jaime", lastname: "Segura" };
// console.log(person);
// console.log(person.lastname);

// OR EVEN BETTER...

// var person = {
//     firstname: "Jaime",
//     lastname: "Segura",
//     city: "Berlin"
// };

// console.log(person);
// console.log(person.firstname);
// console.log(person.lastname);

// function greet(person) {
//     console.log("Hi " + person.firstname + " " + person.lastname)
// }

// greet(person);
// greet({
//     firstname: "Mary",
//     lastname: "Doe"
// });