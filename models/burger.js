
// Import orm
let orm = require('../config/orm.js');

let burger = {

    // Select All from orm
    selectAll(callback) {
        orm.selectAll('burgers',
        (data) => callback(data));
    },

    // Insert One from orm
    insertOne(nameToInsert, cb) {
        orm.insertOne('burgers', nameToInsert, (data) => cb(data));
    },

    // Update One from orm
    updateOne(boolean, condition, cb) {
        orm.updateOne('burgers', boolean, condition, (data) => cb(data));
    }
};

module.exports = burger;