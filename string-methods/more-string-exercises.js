// DR EVIL
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars',
// except it will add '(pinky)' at the end if the amount is 1 million. 

function DrEvil(amount) {
    if (amount < 1000000) {
        return `${amount} dollars`;
    } else {
        return `${amount} dollars (pinky)`;
    }
}

console.log(DrEvil(1000000));

// MIX UP
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
// (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example: mixUp('mix', pod'): 'pox mid'; mixUp('dog', 'dinner'): 'dig donner'

function mixUp(a, b) {
    return b.substring(0, 2) + a.substring(2) + " " + a.substring(0, 2) + b.substring(2);
}

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));

// FIX START
// Create a function called fixStart. It should take a single argument, a string, and return a version where all
// occurences of its first character have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. 

// (NOT SOLVED)

function fixStart(myString) {
    var letter = myString[0];
    if (myString.includes(letter)) {
        return myString.substring(letter).replace(letter, "*");
    }

}

console.log(fixStart("antananarivo"))

// VERBING
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged.

function verbing(myParameter) {
    if (myParameter.length >= 3 && myParameter.substring(myParameter.length - 3) != "ing") {
        return `${myParameter}ing`
    } else if (myParameter.substring(myParameter.length - 3) === "ing") {
        return `${myParameter}ly`
    } else if (myParameter.length < 3) {
        return myParameter;
    }
}

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

// NOT BAD
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

function notBad(myEvaluation) {

    var notBadWithDot = myEvaluation.substring(myEvaluation.indexOf("not"), myEvaluation.length - 1);
    var notBadWithoutDot = myEvaluation.substring(myEvaluation.indexOf("not"), myEvaluation.length);

    if (myEvaluation.includes("not") && myEvaluation.includes("bad") && myEvaluation.includes(".")) {
        return myEvaluation.replace(notBadWithDot, "good");
    } else if (myEvaluation.includes("not") && myEvaluation.includes("bad")) {
        return myEvaluation.replace(notBadWithoutDot, "good");
    } else {
        return myEvaluation;
    }
}

console.log(notBad("This beer is not that bad."));