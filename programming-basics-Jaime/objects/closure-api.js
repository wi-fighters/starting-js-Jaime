let init = new Object();
init.db = [];
init.api = [];

init.create = (paramOne) => {
    init.db.push(paramOne);
    return `New element added! The new length of the array is ${init.db.length}`;
};

init.read = () => {
    return [...init.db];
};

init.update = (index, newElement) => {
    const oldElement = init.db[index];
    if (index >= 0 && index <= (init.db.length - 1)) {
        init.db[index] = newElement;
    } else {
        return init.create(newElement);
    }
    return `You changed the item ${oldElement} for ${newElement}.`;
};

init.remove = (deleteIndex) => {
    const deletedItem = init.db[deleteIndex];
    if (deleteIndex >= 0 && deleteIndex <= (init.db.length - 1)) {
        init.db.splice(deleteIndex, 1);
    } else {
        return `ERROR!!!`;
    }
    return `You deleted one item: ${deletedItem}.`;
};

init.api.push(init.create, init.read, init.update, init.remove);

init.db.push("HELLO");
console.log(init.db);

// console.log(`\nWhat do I have in my 'init' object?`);
// console.log(init);

// console.log(`\nChecking out what's in my database:`);
// console.log(init.read());

// init.create("Bread"); // create
// init.create("Butter"); // create
// init.create("Ham"); // create
// init.create("Cheese"); // create

// console.log(`\nChecking out my database after pushing 4 items inside it:`);
// console.log(init.read()); // read

// console.log(`\nI'm gonna push a new item ('Milk') inside the database:`);
// console.log(init.create("Milk")); // create
// console.log(init.read()); // read

// console.log(`\nNow I'm gonna push another new item ('Banana') inside the database:`);
// console.log(init.create("Banana")); // create
// console.log(init.read()); // read

// console.log(`\nNow I'm gonna update the first item: I'll change 'Bread' for 'Chocolate'`);
// console.log(init.update(0, "Chocolate")); // update
// console.log(init.read()); // read

// console.log(`\nNow I'm gonna update the third item: I'll change 'Ham' for 'Vanilla'`);
// console.log(init.update(2, "Vanilla")); // update
// console.log(init.read()); // read

// console.log(`\nI'm gonna delete the 'Cheese' (item 4 from my database)`);
// console.log(init.remove(3)); // delete

// console.log(`\nThis is the current status of my database:`);
// console.log(init.read()); // read
