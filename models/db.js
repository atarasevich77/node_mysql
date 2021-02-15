const mysql = require('mysql');
const dbConfig = require('../config/db.config');

//Create connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//Open to MySQL connection
connection.connect(err => {
    if(err) throw err;
    console.log('Successfully connected to the Database');
})

module.exports = connection;