const init = () => {
    let db = [];

    const create = (paramOne) => {
        db.push(paramOne);
        const dbArrayLength = db.length;

        return `New element added! The new length of the array is ${dbArrayLength}`;
    };

    const read = () => {
        let dbCopy = [...db];

        return dbCopy;
    };

    const update = (index, newElement) => {
        let dbLength = db.length - 1;

        if (index >= 0 && index <= dbLength) {
            db[index] = newElement;
        } else {
            return create(newElement);
        }

        return db;
    }

    let api = [create, read, update];

    return api;
};

const createInDb = init();

createInDb[0]("Bread");
createInDb[0]("Butter");
createInDb[0]("Ham");
createInDb[0]("Cheese");

console.log(createInDb[1]());
console.log(createInDb[0]("Milk"));
console.log(createInDb[1]());

console.log(createInDb[2](2, "Chocolate"));
console.log(createInDb[2](2, "Vanilla"));
console.log(createInDb[2](5, "Eis"));
console.log(createInDb[1]());