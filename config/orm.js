// MySQL connection is connected here
const connection = require('./connection.js');

const orm = {

    // Select All Method
    selectAll: function(whatToSelect, cb) {        
        const queryString = `SELECT * FROM ${whatToSelect}`;
        connection.query(queryString, (err, data) => {
            if (err) {throw err};
            cb(data);
            });
    },

    // Insert One Method
    insertOne: function(tableName, nameToInsert, cb) {
        const queryString = `INSERT INTO ${tableName} (burger_name, devoured) VALUE (?, FALSE)`;
        connection.query(queryString, nameToInsert, (err, data) => {
            if (err) {throw err};
            cb(data);
            });
    },

    // Update One Method
    updateOne: function(tableName, boolean, condition, cb) {
        const queryString = `UPDATE ${tableName} SET devoured = ${boolean} WHERE id = ?`;
        connection.query(queryString, boolean, condition, (err, data) => {
            if (err) {throw err};
            cb(data);
            });
    },
  
};

// Export Object
module.exports = orm;