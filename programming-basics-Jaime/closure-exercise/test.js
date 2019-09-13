let db = ["milk", "pizza", "cola", "chocolate"];
let dbLength = db.length - 1;
// console.log(db[2]);

// const update = (index, newElement) => {
//     let dbLength = (db.length - 1);

//     if (index >= 0 && index <= dbLength) {

//         db[index] = newElement;
//     } else {
//         return "ERROR!!!";
//     }
//     return db;
// };

// console.log(update(4, "ham"));

const remove = (deleteIndex) => {

    if (deleteIndex >= 0 && deleteIndex <= dbLength) {
        db.splice(deleteIndex, 1);
    } else {
        return `ERROR!!!`;
    }

    return db;
};

console.log(remove(2));