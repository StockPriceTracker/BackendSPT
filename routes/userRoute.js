var express = require('express');
const router = express.Router();

// src/routes/authRoutes.js
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
