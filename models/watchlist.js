// src/models/Watchlist.js
const { Schema, model, Types } = require('mongoose');

const watchlistSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },  // Reference to the User model
    stocks: [{ type: Types.ObjectId, ref: 'Stock' }]  // List of selected stocks
  },
  { timestamps: true }
);

module.exports = model('Watchlist', watchlistSchema);
