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
        date: {
          type: String,
          default: function() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0'); // Ensure two digits
            const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure two digits
            return `${hours}:${minutes}`; 
          }
        }
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
