const myWord = ["L", "O", "O", "P"];
const yourGuess = ["_", "_", "_", "_"];

const guessLetter = (letter) => {
    let answer;

    letter = letter.toLocaleLowerCase();

    for (let i = 0; i < myWord.length; i++) {
        if (letter === "l") {
            yourGuess[0] = "L";
            answer = yourGuess;
            break;

        } else if (letter === "o") {
            yourGuess[1] = "O";
            yourGuess[2] = "O";
            answer = yourGuess;
            break;

        } else if (letter === "p") {
            yourGuess[3] = "P";
            answer = yourGuess;
            break;

        } else {
            answer = `My word doesn't have the letter ${letter.toLocaleUpperCase()}`;
            break;
        }
    }

    console.log(answer);
};

guessLetter("r");
guessLetter("k");
guessLetter("l");
guessLetter("G");
guessLetter("o");
guessLetter("t");
guessLetter("p");
