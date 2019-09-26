const Person = function (firstName, lastName, age, job) {
    this.name = { firstName: firstName, lastName: lastName };
    this.age = age;
    this.job = job;
};

const jaime = new Person("Jaime", "Segura", 31, "web developer");

const peter = new Person("Peter", "Mustermann", 35, "actor");

console.log(jaime);
console.log(peter);

jaime.height = 183;
console.log(jaime);

peter.weight = 80;
console.log(peter);