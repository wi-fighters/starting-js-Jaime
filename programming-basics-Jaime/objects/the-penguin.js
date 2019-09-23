const myPenguin = new Object();
myPenguin.name = "Misha";
myPenguin.origin = "Death and the Penguin, Penguin Lost";
myPenguin.author = "Andrey Kurkov";

console.log(`Hello, I'm a penguin and my name is Misha!`);

myPenguin.canFly = false;
myPenguin.chirp = function () {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
};
myPenguin.sayHello = function () {
    console.log(`Hello, I'm a penguin and my name is ${this.name}!`);
};
myPenguin.fly = function () {
    if (this.canFly === true) {
        console.log("I can fly!");
    } else {
        console.log("No flying for me!");
    }
}
myPenguin.sayHello();
myPenguin.fly();