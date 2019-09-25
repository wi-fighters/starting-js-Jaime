
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

let employedPeople = [];

const findEmployed = () => {

    let employedPeopleNames = "";
    for (let i = 0; i < people.length; ++i) {
        employedPeopleNames = "";
        if (people[i].employed === true) {
            employedPeople.push(people[i].firstName);
            employedPeopleNames += `- ${people[i].firstName} ${people[i].lastName}`;
            return employedPeopleNames;
        }
    }
};

findEmployed();
console.log(`\nHow many people of the group have a job? ${employedPeople.length}`);
console.log(findEmployed());

// Who is over 30 and has no job?

const over30AndUnemployed = () => {
    let unemployedPeople = "";
    for (let i = 0; i < people.length; ++i) {
        unemployedPeople = "";
        if (people[i].age >= 30 && people[i].employed !== true) {
            console.log(unemployedPeople += `- ${people[i].firstName} ${people[i].lastName}`)
        }
    }
};

console.log(`\nThese are the people over 30 without a job:`);
over30AndUnemployed();