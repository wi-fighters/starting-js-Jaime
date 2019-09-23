let profile = {
    firstName: "Jaime",
    lastName: "Segura",
    age: (yearOfBorn) => {
        return 2019 - yearOfBorn;
    },
    city: "Madrid",
    welcome: () => {
        return `Hello ${profile.firstName}, you live in ${profile.city}`
    }
};

console.log(profile.firstName, profile.city, profile.age(1988));
profile.city = "Berlin";
console.log(profile.city);
console.log(profile.welcome());


// How to start a new Object:

let car = new Object();
car.name = "Peugeot";
car.color = "grey";
car.old = 25;

console.log(car);
car.add = (x, y) => x + y;
console.log(car.add(3, 4));
console.log(car);