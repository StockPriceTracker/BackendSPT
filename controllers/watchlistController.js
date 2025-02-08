// src/controllers/watchlistController.js
const Watchlist = require('../models/watchlist');
const Stock = require('../models/stock');

// Add stock to watchlist
exports.addToWatchlist = async (req, res) => {
  try {
    const { userId, stockSymbol } = req.body;
    
    // Find the stock by symbol
    const stock = await Stock.findOne({ symbol: stockSymbol });
    if (!stock) return res.status(404).json({ message: "Stock not found" });

    // Find or create watchlist for user
    let watchlist = await Watchlist.findOne({ user: userId });
    if (!watchlist) {
      watchlist = new Watchlist({ user: userId, stocks: [stock._id] });
    } else {
      if (!watchlist.stocks.includes(stock._id)) {
        watchlist.stocks.push(stock._id);
      }
    }
    
    await watchlist.save();
    res.json({ message: "Stock added to watchlist", watchlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user's watchlist
exports.getWatchlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const watchlist = await Watchlist.findOne({ user: userId }).populate('stocks');
    if (!watchlist) return res.status(404).json({ message: "Watchlist not found" });
    
    res.json(watchlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove stock from watchlist
exports.removeFromWatchlist = async (req, res) => {
  try {
    const { userId, stockSymbol } = req.body;
    
    const stock = await Stock.findOne({ symbol: stockSymbol });
    if (!stock) return res.status(404).json({ message: "Stock not found" });

    const watchlist = await Watchlist.findOne({ user: userId });
    if (!watchlist) return res.status(404).json({ message: "Watchlist not found" });

    watchlist.stocks = watchlist.stocks.filter(stockId => stockId.toString() !== stock._id.toString());
    await watchlist.save();
    
    res.json({ message: "Stock removed from watchlist", watchlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
