function rightWritten(rawString) {

    return rawString.toString().toLowerCase();
}

const attack = (hand) => {

    hand = rightWritten(hand);

    switch (hand) {
        case "scissors":
            return "rock";
        case "rock":
            return "paper";
        case "paper":
            return "scissors";
        default:
            return `I only take "rock", "paper" or "scissors" as an argument`;
    }
}

console.log(attack(3));
