// src/models/Stock.js
const { Schema, model } = require('mongoose');

const historicalStockSchema = new Schema(
  {
    symbol: { type: String, required: true, unique: true },  // Stock ticker symbol (e.g., "AAPL", "GOOGL")
    
    // Daily data: List of prices, percentage changes, and timestamps for today
    dailyData: [
      {
        price: { type: Number, required: true },
        percentageChange: { type: Number, required: true },
        date: { type: Date, default: Date.now }
      }
    ],
    
    // Yearly data: List of percentage changes over time
    yearlyData: [
      {
        date: { type: Date, required: true },
        price: { type: Number, required: true },
        percentageChange: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
);

module.exports = model('HistoricalStock', historicalStockSchema);
