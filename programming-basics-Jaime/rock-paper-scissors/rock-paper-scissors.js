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

const options = ["rock", "paper", "scissors"];

const attack = (randomHand) => {
    randomHand = rightWritten(randomHand);
    switch (randomHand) {
        case "rock":
        case "paper":
        case "scissors":
            return takeRandom(options);
    }
    return `I'm an honest function bro, be honest too and just write "rock", "paper", or "scissors" as an argument`;
};

console.log(attack("scissors"));

function rightWritten(rawString) {

    return rawString.toString().toLowerCase();
}

function takeRandom(number) {

    return number[Math.floor(Math.random() * 3)];
}
