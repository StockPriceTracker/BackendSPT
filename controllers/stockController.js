// src/controllers/stockController.js
const Stock = require('../models/stock');

// Create a stock


// Get all stocks
exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    console.log("🔄 Fetching stocks...");
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

