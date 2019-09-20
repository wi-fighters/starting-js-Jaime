const myWord = ["L", "O", "O", "P"];
const yourGuess = ["*", "*", "*", "*"];

const guessLetter = (letter) => {

    letter = letter.toLocaleUpperCase();
    guess = false;

    for (let i = 0; i < myWord.length; ++i) {
        if (myWord[i] === letter) {
            yourGuess[i] = letter;
            guess = true;
        }
    } if (guess === true && yourGuess.includes("*") !== true) {
        console.log(`\nYou chose the letter '${letter}'...
ALRIGHT! The board looks now like this [${yourGuess}]`);
        console.log("Well done! Congratulations!");
    } else if (guess === true) {
        console.log(`\nYou chose the letter '${letter}'...
ALRIGHT! The board looks now like this [${yourGuess}]`);
    } else {
        console.log(`\nYou chose the letter '${letter}'...
WRONG! Continue playing...`);
    }
};

guessLetter("i");
guessLetter("k");
guessLetter("o");
guessLetter("s");
guessLetter("p");
guessLetter("l");



