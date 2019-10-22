// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

const exerciseOne = () => {

    const sumOfNumbers = value => {
        let result = 0;
        value.map(element => result += element);

        return result;
    };

    const nums = [12, 45, 95, 345, 2, 97];

    console.log(`\nOriginal array: `, nums);
    console.log(`Total result:\t`, sumOfNumbers(nums));

};

console.log(`\nExercise 1: sumOfNumbers`);
exerciseOne();


// Hello Friend. Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

const exerciseTwo = () => {

    const helloFriend = value => {
        let index = -1;
        return value.map(element => {
            index += 1;
            console.log(`Hello ${element}. ${element} is at index ${index} of my friends array`)
        });
    };

    const friends = ["Mike", "Sarah", "John", "Martha", "Alex"];

    console.log(`\nOriginal array: `, friends);
    console.log(`Greetings: \n`)
    helloFriend(friends);

}

console.log(`\nExercise 2: helloFriends`);
exerciseTwo();
