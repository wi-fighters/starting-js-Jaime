function add() {
    let number = 0;

    function addingOne() {
        number += 1;
        return number;
    }

    function addingTen() {
        number += 10;
        return number;
    }

    function operations() {
        if (number < 10) {
            return addingOne();
        } else {
            return addingTen();
        }
    }
    return operations;
}

const addition = add();

console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());
console.log(addition());