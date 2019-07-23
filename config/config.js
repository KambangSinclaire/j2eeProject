const mysql = require('mysql');


const config = {
    host: 'localhost',
    port: 3306,
    user: 'myuser',
    password: 'mypassword',
    database: 'taximan',
    insecureAuth: true
}

// const databaseApi = mysql.createPool(process.env.JAWSDB_URL);
const databaseApi=mysql.createPool(config);


module.exports = databaseApi;

