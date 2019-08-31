// Using the switch statement

// You can test what day is TODAY!

function getDayName(dayNum) {
    var day = new Date().getDay();

    switch (day) {
        case 1:
            day = "I know it's hard, but let's go for the Monday...";
            break;
        case 2:
            day = "It's just Tuesday, but at least there is Champions League today";
            break;
        case 3:
            day = "You did it until the middle of the week. Come on, beat this Wednesday!";
            break;
        case 4:
            day = "Frid... Thursday! But it's getting closer!";
            break;
        case 5:
            day = "FRIDAY!!! I hope you don't have to work tomorrow!";
            break;
        case 6:
            day = "It's Saturday, let's go for some beers!";
            break;
        case 7:
            day = "Oh no! It's Sunday... The weekend is barely over...";
            break;
        default:
            day = "That's not a valid number";
    }
    return day;
}

console.log(getDayName());