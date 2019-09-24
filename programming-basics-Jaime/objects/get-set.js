const exampleOne = () => {
    const person = {
        firstName: "Jaime",
        lastName: "Segura",
        age: 31,
        occupation: "web developer",
        get job() {
            return this.occupation;
        },
        city: "",
        set home(myCity) {
            return this.city = myCity;
        }
    };
    console.log(person.age);
    console.log(person.occupation);
    console.log(person.job);
    person.home = "Berlin";
    console.log(person.city);
};
console.log(`\nExample 1:`);
exampleOne();

// -----------------------------------

const exampleTwo = () => {
    const person = {
        firstName: "Jaime",
        lastName: "Segura",
        birthYear: 1988,
        birthMonth: 8,
        birthDay: 3,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        age: function () {
            return 2019 - this.birthYear + " years old";
        },
        zodiac: function () {
            sign = "";
            switch (this.birthMonth) {
                case 1:
                    if (this.birthDay >= 20) {
                        sign = "Aquarius";
                    } else {
                        sign = "Capricorn";
                    }
                    break;
                case 2:
                    if (this.birthDay >= 20) {
                        sign = "Pisces";
                    } else {
                        sign = "Aquarius";
                    }
                    break;
                case 3:
                    if (this.birthDay >= 21) {
                        sign = "Aries";
                    } else {
                        sign = "Pisces";
                    }
                    break;
                case 4:
                    if (this.birthDay >= 21) {
                        sign = "Taurus";
                    } else {
                        sign = "Aries";
                    }
                    break;
                case 5:
                    if (this.birthDay >= 21) {
                        sign = "Gemini";
                    } else {
                        sign = "Taurus";
                    }
                    break;
                case 6:
                    if (this.birthDay >= 22) {
                        sign = "Cancer";
                    } else {
                        sign = "Gemini";
                    }
                    break;
                case 7:
                    if (this.birthDay >= 23) {
                        sign = "Leo";
                    } else {
                        sign = "Cancer";
                    }
                    break;
                case 8:
                    if (this.birthDay >= 24) {
                        sign = "Virgo";
                    } else {
                        sign = "Leo";
                    }
                    break;
                case 9:
                    if (this.birthDay >= 24) {
                        sign = "Libra";
                    } else {
                        sign = "Virgo";
                    }
                    break;
                case 10:
                    if (this.birthDay >= 23) {
                        sign = "Scorpio";
                    } else {
                        sign = "Libra";
                    }
                    break;
                case 11:
                    if (this.birthDay >= 23) {
                        sign = "Sagittarius";
                    } else {
                        sign = "Scorpio";
                    }
                    break;
                case 12:
                    if (this.birthDay >= 22) {
                        sign = "Capricorn";
                    } else {
                        sign = "Sagittarius";
                    }
                    break;
            }
            return sign;
        }
    }
    console.log(person.fullName());
    console.log(person.age());
    console.log(person.zodiac());
};
console.log(`\nExample 2:`);
exampleTwo();
