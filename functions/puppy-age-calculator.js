function calculateDogAge(puppyAge) {
    //bonus
    const humanAge = Math.ceil(puppyAge / 7);
    return `Considering that the doggie is ${puppyAge} years old in dog years, the "hooman" is ${humanAge} years old!`
}

console.log(calculateDogAge(7));
console.log(calculateDogAge(31));
console.log(calculateDogAge(72));