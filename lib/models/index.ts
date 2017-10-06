const db = require('./db');

const User = require('./User');

const model = db.sync();

module.exports = {
    db,
    User,
};
