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

    return sumOfNumbers;
};
console.log(`\nExercise 1: sumOfNumbers`);
exerciseOne();
