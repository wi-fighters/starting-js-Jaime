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

console.log(`\nChecking out what's in my database:`)
console.log(createInDb[1]());

createInDb[0]("Bread");
createInDb[0]("Butter");
createInDb[0]("Ham");
createInDb[0]("Cheese");

console.log(`\nChecking out my database after pushing 4 items inside it:`)
console.log(createInDb[1]());

console.log(`\nI'm gonna push a new item ('Milk') inside the database:`)
console.log(createInDb[0]("Milk"));
console.log(createInDb[1]());

console.log(`\nNow I'm gonna push another new item ('Banana') inside the database:`)
console.log(createInDb[0]("Banana"));
console.log(createInDb[1]());

console.log(`\nNow I'm gonna update the first item: I'll change 'Bread' for 'Chocolate'`)
console.log(createInDb[2](0, "Chocolate"));

console.log(`\nNow I'm gonna update the third item: I'll change 'Ham' for 'Vanilla'`)
console.log(createInDb[2](2, "Vanilla"));

console.log(`\nChecking out my database again:`)
console.log(createInDb[1]());
