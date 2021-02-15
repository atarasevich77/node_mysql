const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

const app = express();

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19vilka76',
    database: 'simplenodeapi'
});

const server = {
    port: 3000
};

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRouter);

app.listen(server.port, () => {
    console.log(`Server started, listening port: ${server.port}`);
})
