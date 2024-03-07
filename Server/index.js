const express = require('express');
const config = require('./config');
require('dotenv').config();


const app = express();
const port = config.PORT;

app.get('/', (req, res) => {
    res.json({ message: 'Success' });
    }
);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
    }
);