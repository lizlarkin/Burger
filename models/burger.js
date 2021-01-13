// Import orm
const orm = require('../config/orm.js');

const burger = {

    // Select All from orm
    selectAll: function(cb) {
        orm.selectAll('burgers',
        cb);
    },

    // Insert One from orm
    insertOne: function(nameToInsert, cb) {
        orm.insertOne('burgers', 
        nameToInsert, 
        cb);
    },

    // Update One from orm
    updateOne: function(boolean, condition, cb) {
        orm.updateOne('burgers', 
        boolean, 
        condition, 
        cb);
    }
};

module.exports = burger;