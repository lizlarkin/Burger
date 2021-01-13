// MySQL connection is connected here
// MySQL connection is connected here
const connection = require('./connection.js');

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
  
    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(`${key}=${value}`);
      }
    }
  
    // Translate array of strings to a single comma-separated string
    return arr.toString();
  };

const orm = {

    // Select All Method
    selectAll (whatToSelect, cb) {        
        const queryString = `SELECT * FROM ${whatToSelect}`;
        connection.query(queryString, (err, data) => {
            if (err) {throw err};
            cb(data);
            });
    },

    // Insert One Method
    insertOne (tableName, nameToInsert, cb) {
        const queryString = `INSERT INTO ${tableName} (burger_name, devoured) VALUE (?, FALSE)`;
        connection.query(queryString, nameToInsert, (err, data) => {
            if (err) {throw err};
            cb(data);
            });
    },

    // Update One Method
    updateOne (tableName, boolean, condition, cb) {
        // const queryString = `UPDATE ${tableName} SET devoured = ${boolean} WHERE ${condition}`;
        const queryString = "UPDATE " + tableName;
        queryString += " SET "
        queryString += objToSql(boolean) 
        queryString += " WHERE "
        queryString += condition;

        console.log(queryString);

        // connection.query(queryString, boolean, condition, (err, data) => {
        connection.query(queryString, (err, data) => {
            if (err) {throw err};
            cb(data);
            });
    },
  
};

// Export Object
module.exports = orm;