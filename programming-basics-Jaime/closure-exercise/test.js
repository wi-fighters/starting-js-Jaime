let db = ["milk", "pizza", "cola", "chocolate"];
console.log(db[2]);

const update = (index, newElement) => {
    let dbLength = (db.length - 1);

    if (index >= 0 && index <= dbLength) {

        db[index] = newElement;
    } else {
        return "ERROR!!!";
    }
    return db;
};

console.log(update(4, "ham"));