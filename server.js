const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: 'Welcome to Simple API application.' });
});

require('./app/routers/customer.routers')(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log('Server started, listening port 3000');
});
