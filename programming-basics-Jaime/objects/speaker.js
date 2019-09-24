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
    addSpeaker: function (speaker) {
        this.speakers.push(speaker);
    },
    addLanguage: function (newLang, language) {
        this.data.languages[newLang] = language;
    }
};

const jaime = { name: "Jaime" };
nestedObject.addSpeaker(jaime);
console.log(nestedObject.speakers);

const german = { hello: "Hallo" };
nestedObject.addLanguage("german", german);
console.log(nestedObject.data.languages);
