const express = require('express');
const database = require('./database/connection');
const cors = require('cors');
const routes = require('./routes/routes');
require ('dotenv/config');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hi guys, Hows going?');
});
console.log(`${port}`);

app.listen(`${port}`);