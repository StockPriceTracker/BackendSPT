// server.js - Point d'entrée du backend
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoute');
const stockRoutes = require('./routes/stockRoute');
const historicalStockRoutes = require('./routes/historicalStockRoute');
const watchlistRoutes = require('./routes/watchlistRoute');
const dbconnect =require('./config/db');

// Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9090;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/stock', stockRoutes);
app.use('/api/historicalStock', historicalStockRoutes);
app.use('/api/watchlist', watchlistRoutes);


// Connexion à MongoDB

dbconnect();
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));


module.exports = app;
