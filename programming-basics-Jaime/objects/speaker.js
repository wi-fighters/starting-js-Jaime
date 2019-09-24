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

// 3-Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of “capital” and “population” and their respective values.

const spain = { capital: "Madrid", population: 45000000 };
nestedObject.addCountry("spain", spain);
console.log(nestedObject.data.continents.europe.countries);