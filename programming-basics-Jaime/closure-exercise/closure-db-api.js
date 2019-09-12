function init() {
    let db = [];

    function create(paramOne) {
        db.push(paramOne);
        return db.length;
    }

    return create;
}

const createInDb = init();
console.log(createInDb("Bread"));
console.log(createInDb("Butter"));
console.log(createInDb("Ham"));
console.log(createInDb("Cheese"));
