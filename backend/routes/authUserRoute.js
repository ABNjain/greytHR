const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authUserController');
const authenticateUser = require('../middlewares/authenticateUser');

// Define the routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticateUser, logout);

module.exports = router;
