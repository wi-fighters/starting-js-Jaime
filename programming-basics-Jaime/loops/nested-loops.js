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


// EXERCISE 2.

const loopTwo = () => {

    let pipesAndDashes = "";

    for (let i = 0; i < 3; ++i) {


        if (i % 2 === 0) {
            pipesAndDashes = "";
            for (let j = 0; j < 5; ++j) {
                if (j % 2 === 0) {
                    pipesAndDashes += "-";
                } else {
                    pipesAndDashes += "|";
                }
            }
        } else {
            pipesAndDashes = "";
            for (let j = 0; j < 5; ++j) {
                if (j % 2 === 0) {
                    pipesAndDashes += "|";
                } else {
                    pipesAndDashes += "-";
                }
            }
        }
        console.log(pipesAndDashes);
    }
};
console.log(`\nSecond loop:`);
loopTwo();



// EXERCISE 2 - REFACTORED with functions.

const loopTwoRefactored = () => {
    let pipesAndDashes = "";
    const assigningSymbols = (symbolOne, symbolTwo) => {
        lineOfSymbols = "";
        for (let j = 0; j < 5; ++j) {
            if (j % 2 === 0) {
                lineOfSymbols += symbolOne;
            } else {
                lineOfSymbols += symbolTwo;
            }
        }
        return lineOfSymbols;
    };

    for (let i = 0; i < 3; ++i) {
        if (i % 2 === 0) {
            pipesAndDashes = assigningSymbols("-", "|");
        } else {
            pipesAndDashes = assigningSymbols("|", "-");
        }
        console.log(pipesAndDashes);
    }
};
console.log(`\nSecond loop (refactored):`);
loopTwoRefactored();



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



// EXERCISE 4: BONUS.

const exerciseBonus = () => {
    let starsTree = "";

    for (let i = 0; i < 1; ++i) {
        starsTree += "*";
        // console.log(starsTree);
        for (let j = 0; j < 1; ++j) {
            starsTree = " " + starsTree;
        }
        console.log(starsTree);
    }
};
console.log(`\nBonus exercise:`);
exerciseBonus();