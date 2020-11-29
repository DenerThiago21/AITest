const express = require('express');
const database = require('./database/connection');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hi guys, Hows going?');
});

app.listen(3001);