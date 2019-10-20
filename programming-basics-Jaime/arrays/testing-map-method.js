const tests = ["mario", "luigi", "boozer", "princess"];

// This method traverse the whole array and prints each element returning TRUE or FALSE 
const isLongerThanFive = tests.map(element => element);
console.log(isLongerThanFive);

// This method traverse the whole array and print an array only with the elements you are looking for 
const FilterElementsLongerThanFive = tests.filter(element => element.length > 5);
console.log(FilterElementsLongerThanFive);

// This method traverse the whole array and prints the first element that has the characteristics you are looking for
const FindElementLongerThanFive = tests.find(element => element.length > 5);
console.log(FindElementLongerThanFive);

// This method needs an "accumulator" and a "currentValue". It just adds or concatenate the elements of the array
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(tests.reduce(reducer));

