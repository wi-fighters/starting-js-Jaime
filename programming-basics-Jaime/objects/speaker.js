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
    addSpeaker: function (newSpeaker) {
        this.speakers.push(newSpeaker);
    },
    addLanguage: function (newLang, language) {
        this.data.languages[newLang] = language;
    },
    addCountry: function (newCountry, country) {
        this.data.continents.europe.countries[newCountry] = country;
    }
};

const jaime = { name: "Jaime" };
nestedObject.addSpeaker(jaime);
console.log(nestedObject.speakers);

const german = { hello: "Hallo" };
nestedObject.addLanguage("german", german);
console.log(nestedObject.data.languages);

const spain = { capital: "Madrid", population: 45000000 };
nestedObject.addCountry("spain", spain);
console.log(nestedObject.data.continents.europe.countries);
