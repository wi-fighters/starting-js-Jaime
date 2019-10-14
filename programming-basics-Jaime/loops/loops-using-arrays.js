const exerciseOne = () => {

    const sumOfNumbers = (numbers) => {
        let total = 0;

        for (let i = 0; i < numbers.length; ++i) {
            total += numbers[i];
        }

        return total;
    };

    console.log(sumOfNumbers([10, 20, 30]));
    console.log(sumOfNumbers([23, 1, 3]));
    console.log(sumOfNumbers([99, 77, 55]));

};
console.log(`\nExercise 1: sumOfNumbers\n`);
exerciseOne();


const exerciseTwo = () => {

    const helloFriend = () => {

        const friends = ["Silvia", "Juan", "Blanca", "Katja"];
        for (let i = 0; i < friends.length; ++i) {
            console.log(`Hello ${friends[i]}!`);
            console.log(`${friends[i]} is at index ${i} of my friends array`);
        }
    };

    helloFriend();
};
console.log(`\nExercise 2: helloFriend\n`);
exerciseTwo();


const exerciseThree = () => {

    const cityNames = () => {
        let myCities = "";
        const cities = ["Madrid", "Málaga", "Sevilla", "Granada"];
        for (let i = 0; i < cities.length; ++i) {
            myCities = cities.join(", ");
        }
        console.log(myCities);
    };

    cityNames();
};
console.log(`\nExercise 3: cityNames\n`);
exerciseThree();


const exerciseFour = () => {

    const oddsAndEvens = (numbers) => {
        for (let i = 0; i < numbers.length; ++i) {

            if (numbers[i] % 2 === 0) {
                numbers[i] -= 1;
            } else {
                numbers[i] += 1;
            }
        }
        return numbers;
    };

    console.log(oddsAndEvens([3, 5, 2, 4]));
    console.log(oddsAndEvens([6, 9, 10, 20]));
};
console.log(`\nExercise 4: oddsAndEvens\n`);
exerciseFour();


const exerciseFive = () => {

    const capitalize = (names) => {
        for (let i = 0; i < names.length; ++i) {
            names[i] = names[i][0].toLocaleUpperCase() + names[i].substring(1).toLocaleLowerCase();
        }
        return names;
    };

    console.log(capitalize(["matt", "sara", "lara"]));
    console.log(capitalize(["samuel", "MARIA", "luke", "mary"]));
    console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"]));
};
console.log(`\nExercise 5: Capitalize\n`);
exerciseFive();


const exerciseSix = () => {

    const noDuplicates = (numbers) => {
        const setNumbers = [];
        for (let i = 0; i < numbers.length; ++i) {
            if (!setNumbers.includes(numbers[i])) {
                setNumbers.push(numbers[i]);
            }
        }
        return setNumbers;
    };

    console.log(noDuplicates([1, 4, 4, 7, 7, 7]));
    console.log(noDuplicates([1, 6, 6, 9, 9]));
    console.log(noDuplicates([2, 2, 2, 2, 2, 2]));
    console.log(noDuplicates([5, 10, 15, 20, 25]));
};
console.log(`\nExercise 6: noDuplicates\n`);
exerciseSix();
