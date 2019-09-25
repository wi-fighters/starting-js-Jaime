// 1-Creating objects using the ‘new’ keyword

const exerciseOne = () => {
    const user = new Object();
    user.name = new Object();
    user.name.first = "Jaime";
    user.name.last = "Segura";
    user.age = 31;
    user.city = "Madrid";
    user.languages = new Object();
    user.languages.spanish = true;
    user.languages.english = true;
    user.languages.german = true;
    user.languages.french = false;
    user.languages.italian = false;

    console.log(user);
};
console.log(`\nThis is the result of the first exercise:`)
exerciseOne();

// 2-Creating objects using literal notation

const exerciseTwo = () => {
    const user = {
        name: {
            first: "John",
            last: "Doe",
        },
        age: 45,
        city: "California",
        languages: {
            spanish: false,
            english: true,
            german: false,
            french: false,
            italian: false,
        },
    };
    console.log(user);
};
console.log(`\nThis is the result of the second exercise:`)
exerciseTwo();

// 3-Creating objects using the object constructor
// 4-Adding properties to each object type
// 5-Adding methods to each object type