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
    }
};

// 1-Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you’d like.

console.log(nestedObject.speakers);
const jaime = { name: "Jaime" };
nestedObject.addSpeaker(jaime);
console.log(nestedObject.speakers);