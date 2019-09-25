let myCar = {
    company: "Fiat",
    model: "Punto"
};

const myOtherCar = {
    company: "Peugeot",
    year: 2008
};

const newCar = Object.assign(myCar, myOtherCar);

console.log(newCar);

console.log(myCar);

console.log(myOtherCar);

