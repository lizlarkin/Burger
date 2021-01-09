const mysql = require('mysql');

// const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db',
  });
  
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
  
    console.log(`connected as id ${connection.threadId}`);
  });

module.exports = connection;