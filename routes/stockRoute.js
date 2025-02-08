var express = require('express');
const router = express.Router();

// src/routes/authRoutes.js
const { getStocks } = require('../controllers/stockController');

router.post('/getStocks', getStocks);


module.exports = router;
