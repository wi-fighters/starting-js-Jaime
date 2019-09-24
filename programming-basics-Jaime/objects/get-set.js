const exampleOne = () => {
    const person = {
        firstName: "Jaime",
        lastName: "Segura",
        age: 31,
        occupation: "web developer",
        get job() {
            return this.occupation;
        },
        city: "",
        set home(myCity) {
            return this.city = myCity;
        }
    };
    console.log(person.age);
    console.log(person.occupation);
    console.log(person.job);
    person.home = "Berlin";
    console.log(person.city);
};
console.log(`\nExample 1:`);
exampleOne();

// -----------------------------------

const exampleTwo = () => {
    const person = {
        firstName: "Jaime",
        lastName: "Segura",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    console.log(person.fullName());
};
console.log(`\nExample 2:`);
exampleTwo();
