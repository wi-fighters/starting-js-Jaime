const nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    },
    // my solution:
    // addSpeaker: function (newSpeaker) {
    //     this.speakers.push(newSpeaker);
    // },

    // better solution:
    addSpeaker: function (newSpeaker) {
        this.speakers.push({ name: newSpeaker });
    },

    // my solution:
    // addLanguage: function (newLang, language) {
    //     this.data.languages[newLang] = language;
    // },

    //better solution:
    addLanguage: function (newLanguage, helloInNewLanguage) {
        this.data.languages[newLanguage] = { hello: helloInNewLanguage };
    },
    // my solution:
    // addCountry: function (newCountry, country) {
    //     this.data.continents.europe.countries[newCountry] = country;
    // }

    //better solution:
    addCountry: function (newCountry, capital, population) {
        this.data.continents.europe.countries[newCountry] = { capital: capital, population: population }
    }
};

// my solution:
// const jaime = { name: "Jaime" };
// nestedObject.addSpeaker(jaime);
// console.log(nestedObject.speakers);

// better solution:
nestedObject.addSpeaker("Jaime");
console.log(nestedObject.speakers);

// my solution:
// const german = { hello: "Hallo" };
// nestedObject.addLanguage("german", german);
// console.log(nestedObject.data.languages);

// better solution:
nestedObject.addLanguage("German", "Hallo");
console.log(nestedObject.data.languages);

// my solution:
// const spain = { capital: "Madrid", population: 45000000 };
// nestedObject.addCountry("spain", spain);
// console.log(nestedObject.data.continents.europe.countries);

// better solution:
nestedObject.addCountry("Spain", "Madrid", 45000000);
console.log(nestedObject.data.continents.europe.countries);