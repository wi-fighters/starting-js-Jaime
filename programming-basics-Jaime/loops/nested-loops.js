// EXERCISE 1.

const loopOne = () => {

    let pipes = "";
    for (let i = 0; i < 4; ++i) {
        pipes = "";
        for (let j = 0; j < 5; ++j) {
            pipes += "|";
        }
        console.log(pipes);
    }
};
console.log(`\nFirst loop:`);
loopOne();


// // EXERCISE 2.

const loopTwo = () => {

    let pipesAndDashes = "";
    for (let i = 0; i < 3; ++i) {
        pipesAndDashes = "";
        if (i % 2 === 0) {
            pipesAndDashes += "-|-|-";
        } else {
            pipesAndDashes += "|-|-|";
        }
        console.log(pipesAndDashes);
    }
};
console.log(`\nSecond loop:`);
loopTwo();


// EXERCISE 3.

const loopThree = () => {

    let stars = "";
    for (let i = 0; i < 4; ++i) {
        stars += "*";
        console.log(stars);
    }
};
console.log(`\nThird loop:`);
loopThree();