// Assigning points and grades randomly to your students:


const assignGrade = () => {

    let numberScore = 0;
    let scoreGrade = "";

    (function () {
        numberScore = Math.ceil(Math.random() * (100 - 60) + 60);
        return numberScore;
    })();

    if (numberScore >= 90) {
        scoreGrade = "A";
    } else if (numberScore >= 80) {
        scoreGrade = "B";
    } else if (numberScore >= 70) {
        scoreGrade = "C";
    } else if (numberScore >= 60) {
        scoreGrade = "D";
    } else {
        scoreGrade = "F";
    }
    return `If you reach ${numberScore} points, you get this grade: ${scoreGrade}.`;
};

for (let i = 0; i < 10; ++i) {
    console.log(assignGrade());
}
