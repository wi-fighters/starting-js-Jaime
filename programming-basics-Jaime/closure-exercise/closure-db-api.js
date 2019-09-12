function init() {
    let api = [];

    function create(paramOne) {
        api.push(paramOne);

        return api;
    }

    api.push(create);
    return create;
}

const createInDb = init();
console.log(createInDb("Bread"));
console.log(createInDb("Butter"));
console.log(createInDb("Ham"));
console.log(createInDb("Cheese"));
