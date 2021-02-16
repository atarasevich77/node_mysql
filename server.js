const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Simple API application.' });
});

dotenv.config();

require('./routers/customer.routers')(app);

// set port, listen for requests
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started, listening port ${port}`);
});
