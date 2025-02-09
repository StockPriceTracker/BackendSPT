// src/controllers/stockController.js
const historicalStock = require('../models/historicalStock');


// Fetch all stocks
exports.getHistoricalStocks = async (req, res) => {
  try {
    const historicalStocks = await historicalStock.find(); // Fetch all stock records
    res.status(200).json(historicalStocks);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

exports.getHistoricalStockBySymbol = async (req, res) => {
  try {
     const { symbol } = req.params;

     // Find the stock by its symbol
     const hstock = await historicalStock.findOne({ symbol: symbol });

     // If not found, return 404
     if (!hstock) {
        return res.status(404).json({ message: "Historical stock not found" });
     }

     // Return the historical stock data
     res.status(200).json(hstock);
  } catch (err) {
     console.error("Error fetching historical stock:", err);
     res.status(500).json({ error: "Server error, please try again later." });
  }
};