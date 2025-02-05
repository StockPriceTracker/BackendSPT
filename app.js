// server.js - Point d'entrée du backend
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoute');


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


// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  
}).then(() => {
  console.log('MongoDB connecté');
  app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
}).catch(err => console.error('Erreur de connexion MongoDB:', err));

module.exports = app;
