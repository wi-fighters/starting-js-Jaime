// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
// Having more high cards remaining in the deck favors the player.Each card is assigned a value according to the table below.When the count is positive, the player should bet high.When the count is zero or negative, the player should bet low.

var count = 0;
var decission;

function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
            break;
    }

    if (count > 0) {
        decission = "Bet";
    } else if (count <= 0) {
        decission = "Hold";
    }

    return count + " " + decission;
}


cc(2); cc(3); cc("K"); cc(5); cc(6);
console.log(cc());

