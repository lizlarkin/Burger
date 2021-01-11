// Import orm
const orm = require('../config/orm.js');

const burger = {

    // Select All from orm
    selectAll(callback) {
        orm.selectAll('burgers',
        (data) => callback(data));
    },

    // Insert One from orm
    insertOne(nameToInsert, cb) {
        orm.insertOne('burgers', nameToInsert, (data) => cb(data));
    },

    // // Update One from orm
    // updateOne(booleanValue, id) {
    //     orm.updateOne('burgers', 'devoured', booleanValue, id);
    // }
};

module.exports = burger;