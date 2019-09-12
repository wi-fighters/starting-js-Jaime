const init = () => {
    let db = [];

    const create = (paramOne) => {
        db.push(paramOne);

        return db.length;
    };

    const read = () => {
        let dbCopy = [...db];

        return dbCopy;
    };

    let api = [create, read];

    return api;
};

const createInDb = init();

createInDb[0]("Bread");
createInDb[0]("Butter");
createInDb[0]("Ham");
createInDb[0]("Cheese");

console.log(createInDb[1]());
