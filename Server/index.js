const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const { connectToMongoDB } = require('./connect');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = config.PORT;
const mongoURI = config.mongoURI;

app.use(cors());

const loginRoute = require('./routes/login');

const startServer = async () => {
    try {
        await connectToMongoDB(mongoURI);
        console.log('MongoDB Connected...');

        app.use(express.json());

        // Default route for testing server status
        app.get('/', (req, res) => {
            res.status(200).json({ msg: 'success' });
        });

        // Routes
        app.use(loginRoute);

        app.listen(port, () => console.log(`Server started at ${port}...`));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

startServer();