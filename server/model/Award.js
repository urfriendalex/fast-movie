const db = require('../db/mysql');


class Award {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }

    static list() {
        return db.execute("SELECT * FROM Award");
    }
}

module.exports = Award;