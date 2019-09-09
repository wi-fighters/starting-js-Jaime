// Unbeatable Rock Paper Scissors

// const attack = (hand) => {

//     hand = rightWritten(hand);

//     switch (hand) {
//         case "scissors":
//             return "rock";
//         case "rock":
//             return "paper";
//         case "paper":
//             return "scissors";
//         default:
//             return `I only take "rock", "paper" or "scissors" as an argument`;
//     }
// };

// console.log(attack(3));

// function rightWritten(rawString) {

//     return rawString.toString().toLowerCase();
// }


// Honest Rock Paper Scissors

// const options = ["rock", "paper", "scissors"];

// const attack = (randomHand) => {
//     randomHand = rightWritten(randomHand);
//     switch (randomHand) {
//         case "rock":
//         case "paper":
//         case "scissors":
//             return takeRandom(options);
//     }
//     return `I'm an honest function bro, be honest too and just write "rock", "paper", or "scissors" as an argument`;
// };

// console.log(attack("Paper"));

// function rightWritten(rawString) {

//     return rawString.toString().toLowerCase();
// }

// function takeRandom(number) {

//     return number[Math.floor(Math.random() * number.length)];
// }


// Two-player

// const options = ["rock", "paper", "scissors"];

// const attack = (playerA, playerB) => {
//     playerA = rightWritten(playerA);
//     playerB = rightWritten(playerB);

//     console.log(`Player A plays ${playerA} and Player B plays ${playerB}`);

//     if (!options.includes(playerA) || !options.includes(playerB)) {
//         return `I only take "rock", "paper" or "scissors" as an argument`;
//     } else if (playerA === playerB) {
//         return `It's a draw!`;
//     } else if (playerA === "rock" && playerB === "paper") {
//         return `Player B wins!`;
//     } else if (playerA === "rock" && playerB === "scissors") {
//         return `Player A wins!`;
//     } else if (playerA === "paper" && playerB === "rock") {
//         return `Player A wins!`;
//     } else if (playerA === "paper" && playerB === "scissors") {
//         return `Player A wins!`;
//     } else if (playerA === "scissors" && playerB === "rock") {
//         return `Player B wins!`;
//     } else if (playerA === "scissors" && playerB === "paper") {
//         return `Player A wins!`;
//     }
// };

// console.log(attack("scIssors", "papEr"));
// console.log(attack("rOck", "paPer"));
// console.log(attack("SCissors", "sciSSors"));
// console.log(attack("3", "5"));
// console.log(attack(1, "pAper"));
// console.log(attack("sCissors", 2));


// function rightWritten(rawString) {

//     return rawString.toString().toLowerCase();
// }


//Rock Paper Scissors Lizard Spock(bonus)

const options = ["rock", "paper", "scissors", "lizard", "spock"];

const attack = (playerA, playerB) => {
    playerA = rightWritten(playerA);
    playerB = rightWritten(playerB);

    console.log(`Player A plays ${playerA} and Player B plays ${playerB}`);

    if (!options.includes(playerA) || !options.includes(playerB)) {
        return `I only take "rock", "paper" or "scissors" as an argument`;
    } else if (playerA === playerB) {
        return `It's a draw!`;
    } else {
        switch (playerA) {
            case "rock":
                switch (playerB) {
                    case "scissors":
                    case "lizard":
                        return `Player A wins!`;
                    case "spock":
                    case "paper":
                        return `Player B wins!`
                }
            case "paper":
                switch (playerB) {
                    case "scissors":
                    case "lizard":
                        return `Player A wins!`;
                    case "rock":
                    case "spock":
                        return `Player B wins!`
                }
            case "scissors":
                switch (playerB) {
                    case "paper":
                    case "lizard":
                        return `Player A wins!`;
                    case "rock":
                    case "spock":
                        return `Player B wins!`
                }
            case "lizard":
                switch (playerB) {
                    case "paper":
                    case "spock":
                        return `Player A wins!`;
                    case "rock":
                    case "scissors":
                        return `Player B wins!`
                }
            case "spock":
                switch (playerB) {
                    case "rock":
                    case "scissors":
                        return `Player A wins!`;
                    case "lizard":
                    case "paper":
                        return `Player B wins!`
                }
        }
    }
};

function rightWritten(rawString) {

    return rawString.toString().toLowerCase();
}

console.log(attack("scIssors", "papEr"));
console.log(attack("rOck", "paPer"));
console.log(attack("SCissors", "sciSSors"));
console.log(attack("sPocK", "Lizard"));
console.log(attack("liZard", "paPer"));
console.log(attack("Rock", "sPOck"));
console.log(attack("3", "5"));
console.log(attack(1, "pAper"));
console.log(attack("sCissors", 2));
