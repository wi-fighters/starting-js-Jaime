function init() {
    let db = [];

    function create(paramOne) {
        db.push(paramOne);
        return db.length;
    }

    return create;
}



