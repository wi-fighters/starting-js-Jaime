const myRecipe = new Object;
myRecipe.name = "Spaghetti Carbonara";
myRecipe.onePerson = {
    spaghetti: 125,
    eggs: 1,
    bacon: 40,
    parmesan: 40
};
myRecipe.ingredients = (people) => {
    if (people <= 1) {
        return `${people * myRecipe.onePerson.spaghetti}gr spaghetti, ${people * myRecipe.onePerson.eggs} egg, ${people * myRecipe.onePerson.bacon}gr bacon, ${people * myRecipe.onePerson.parmesan}gr parmesan`;
    } else {
        return `${people * myRecipe.onePerson.spaghetti}gr spaghetti, ${people * myRecipe.onePerson.eggs} eggs, ${people * myRecipe.onePerson.bacon}gr bacon, ${people * myRecipe.onePerson.parmesan}gr parmesan`;
    }
};

console.log(`What are we cooking today?`);
console.log(`We are cooking: ${myRecipe.name}`);

console.log(`\nWhat do I need to cook it for one person?`);
console.log(`You'll need: ${myRecipe.ingredients(1)}`);

console.log(`\nWhat do I need to cook it for 4 people?`);
console.log(`You'll need: ${myRecipe.ingredients(4)}`);