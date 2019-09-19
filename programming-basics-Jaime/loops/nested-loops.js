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

// const loopTwo = () => {

//     let pipes = "";
//     for (let i = 0; i < 4; ++i) {
//         pipes = "";
//         for (let j = 0; j < 5; ++j) {
//             pipes += "|";
//         }
//         console.log(pipes);
//     }
// };
// console.log(`\Second loop:`);
// loopTwo();