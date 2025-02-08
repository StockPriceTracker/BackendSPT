// src/models/Stock.js
const { Schema, model } = require('mongoose');

const stockSchema = new Schema(
  {
    symbol: { type: String, required: true, unique: true },  // Stock ticker symbol (e.g., "AAPL", "GOOGL"),
    name: { type: String, required: true},
    currentPrice: { type: Number, required: true },  // Current stock price
    percentageChange: { type: Number, required: true }, // Current percentage change
    
   
  },
  { timestamps: true }
);

module.exports = model('Stock', stockSchema);
 