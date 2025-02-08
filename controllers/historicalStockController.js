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
