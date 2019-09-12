const init = () => {
    let db = [];

    const create = (paramOne) => {
        db.push(paramOne);

        return db.length;
    };

    const read = (paramHack) => {
        let dbCopy = [...db];

        return db.push(paramHack);
    };

    let api = [create, read];

    return api;
};

const createInDb = init();

createInDb[0]("Bread");
createInDb[0]("Butter");
createInDb[0]("Ham");
createInDb[0]("Cheese");
console.log(`\n We've added 4 items to the 'db' array (+ 1 undefined with this console logs)`);
console.log(createInDb[0]());
console.log(createInDb[1]());
createInDb[0]("Milk");

console.log(`\n Here I'm trying to hack the api variable without modifying 'create'`);

createInDb[1]("Hacking");
console.log(createInDb[1]());



