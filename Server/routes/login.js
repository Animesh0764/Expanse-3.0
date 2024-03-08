const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/login', loginController)
    .get('/login', (req, res) => res.status(400).json({ error: "Method GET not allowed. Try POST request." }));

module.exports = router;