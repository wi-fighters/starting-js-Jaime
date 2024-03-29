
// const person;
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.employed);

// 1 - change what needed to ADD more people to your array of objects, you need at least 5 people
// 2 - Find how many people have a job
// 3 - display only the people who are over 30 and have no job

const person1 = {
    firstName: "Peter",
    lastName: "Griffin",
    age: 25,
    employed: true,
};

const person2 = {
    firstName: "Michael",
    lastName: "Night",
    age: 35,
    employed: false,
};

const person3 = {
    firstName: "Lara",
    lastName: "Croft",
    age: 31,
    employed: true,
};

const person4 = {
    firstName: "Steven",
    lastName: "Seagal",
    age: 45,
    employed: false,
};

const person5 = {
    firstName: "Sarah",
    lastName: "Connor",
    age: 25,
    employed: true,
};

const people = [person1, person2, person3, person4, person5];

// How many people have a job?


const findEmployed = () => {

    let employedPeople = [];
    for (let i = 0; i < people.length; ++i) {

        if (people[i].employed === true) {
            employedPeople.push(people[i].firstName);
        }
    }
    return employedPeople.length;
};

console.log(`\nHow many people of the group have a job? ${findEmployed()}`);


// Who is over 30 and has no job?

const over30AndUnemployed = () => {

    for (let i = 0; i < people.length; ++i) {
        if (people[i].age >= 30 && people[i].employed !== true) {
            console.log(`- ${people[i].firstName} ${people[i].lastName}`)
        }
    }
};

console.log(`\nThese are the people over 30 without a job:`);
over30AndUnemployed();