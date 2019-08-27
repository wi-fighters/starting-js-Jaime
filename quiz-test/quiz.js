//
// QUIZ
//
// testing functions
//

function questionOne(answerOne) {
    console.log("How much is 2 + 2?");
    console.log(answerOne);
    if (answerOne == 4) {
        console.log("Correct! Go on!");
        return questionTwo();
    }
    return "Seriously? Please go home studying!";
}

console.log(questionOne("4"));

function questionTwo(answerTwo) {
    console.log("How much is 10 * 10?");
    console.log(answerTwo);
    if (answerTwo == 100) {
        console.log("Correct! Continue...");
        return questionThree();
    }
    return "Are you kidding me...?";
}

console.log(questionTwo(100));

function questionThree(answerThree) {
    console.log("How much is 100 / 50?");
    console.log(answerThree);
    if (answerThree == 2) {
        console.log("Correct! I trust you.");

    }
    return "Wasn't it an easy one?";
}

