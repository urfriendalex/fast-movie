const db = require('../db/mysql');


class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    static list() {
        return db.execute("SELECT * FROM User");
    }
}

module.exports = User;