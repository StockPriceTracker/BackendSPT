var express = require('express');
const router = express.Router();

// src/routes/authRoutes.js
const { getHistoricalStocks } = require('../controllers/historicalStockController');

router.post('/getHistoricalStocks', getHistoricalStocks);

router.post("/save", async (req, res) => {
    try {
        const stockData = req.body;

        for (const symbol in stockData) {
            const { "Company Name": companyName, Price, "Change(%)": changePercent } = stockData[symbol];

            const newDailyData = {
                price: parseFloat(Price),
                percentageChange: parseFloat(changePercent.replace("%", "")),
                date: new Date(),
            };

            await HistoricalStock.findOneAndUpdate(
                { symbol },
                { $set: { companyName }, $push: { dailyData: newDailyData } },
                { upsert: true, new: true }
            );
        }

        res.status(200).json({ message: "✅ Stock data saved successfully" });
    } catch (error) {
        console.error("❌ Error saving stock data:", error);
        res.status(500).json({ message: "❌ Server Error" });
    }
});
module.exports = router;
