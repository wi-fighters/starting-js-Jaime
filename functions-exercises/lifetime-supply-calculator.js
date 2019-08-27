function calculateSupply(age, amountPerDay) {
    const deathAge = 100;
    const lifeAmount = amountPerDay * 365 * (deathAge - age);
    return `You will need ${lifeAmount} Kit-Kats to last you until the ripe old age of ${deathAge}.`
}

console.log(calculateSupply(31, 3.1));
console.log(calculateSupply(52, 2.9));
console.log(calculateSupply(98, 1.6));