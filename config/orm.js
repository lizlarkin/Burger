// MySQL connection is connected here
const connection = require('./connection.js');

const orm = {

    // Select All Method
    selectAll (whatToSelect, cb) {        
        const queryString = `SELECT * FROM ${whatToSelect}`;
        connection.query(queryString, (err, data) => {
            if (err) {throw err};
            cb(data);
            });
    },

    // // Insert One Method
    // insertOne (tableName, valueToInsert) {
    //     const queryString = `INSERT INTO ?? VALUE ${valueToInsert}`;
    //     connection.query(queryString, (err, data) => {
    //         if (err) throw err;
    //         console.log(data);
    //         });
    // },

    // // Update One Method
    // updateOne (tableName, columnName, booleanValue, id) {
    //     const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    //     connection.query(queryString, (err, data) => {
    //         if (err) throw err;
    //         console.log(data);
    //         });
    // }

};

// Export Object
module.exports = orm;