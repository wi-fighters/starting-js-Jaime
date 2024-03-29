
class Person {
    constructor(name, age, address, salary) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }
}

const john = new Person("John", 30, "Fake street 123", 20000);
const peter = new Person("Peter", 34, "Blues street 67", 34000);
const sarah = new Person("Sarah", 45, "Green Avenue 3", 29000);

const people = [john, peter, sarah];

// console.log(people);

const getNameAndAge = people.map(element => [element.name, element.age]);

console.log(people);
