const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const server = {
    port: 3000
};

app.use(cors());
app.use(bodyParser.json());
app.listen(server.port, () => {
    console.log(`Server started, listening port: ${server.port}`);
})
