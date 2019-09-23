const myRecipe = new Object;
myRecipe.name = "Spaghetti Carbonara";
myRecipe.onePerson = {
    spaghetti: 125,
    eggs: 1,
    bacon: 40,
    parmesan: 40
};
myRecipe.ingredients = function (people) {
    if (people <= 1) {
        return `${this.onePerson.spaghetti}gr spaghetti, ${this.onePerson.eggs} egg, ${this.onePerson.bacon}gr bacon, ${this.onePerson.parmesan}gr parmesan`;
    } else {
        return `${people * this.onePerson.spaghetti}gr spaghetti, ${people * this.onePerson.eggs} eggs, ${people * this.onePerson.bacon}gr bacon, ${people * this.onePerson.parmesan}gr parmesan`;
    }
};

console.log(`What are we cooking today?`);
console.log(`We are cooking: ${myRecipe.name}`);

console.log(`\nWhat do I need to cook it for one person?`);
console.log(`You'll need: ${myRecipe.ingredients(1)}`);

console.log(`\nWhat do I need to cook it for 4 people?`);
console.log(`You'll need: ${myRecipe.ingredients(4)}`);