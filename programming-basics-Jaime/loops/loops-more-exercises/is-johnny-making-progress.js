// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday.
// He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
//Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

let weekValues = [3, 6, 4, 5, 8];

const progressDays = (weekValues) => {

    let daysOfProgress = 0;
    for (let i = 0; i < weekValues.length; ++i) {
        if (weekValues[i] < weekValues[i + 1]) {
            daysOfProgress += 1;
        }
    }
    console.log(`Johnny progressed this week ${daysOfProgress} days`);
};

progressDays(weekValues);
weekValues = [4, 5, 6, 7, 8];
progressDays(weekValues);
weekValues = [4, 3, 3, 3, 4];
progressDays(weekValues);