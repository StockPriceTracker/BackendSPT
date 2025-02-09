var express = require('express');
const router = express.Router();

// src/routes/authRoutes.js
const { getStocks } = require('../controllers/stockController');

router.get('/getStocks', getStocks);


module.exports = router;
