const express = require('express');
const userRoutes = require('./user.route');
const loginRoutes = require('./login.route');
const router = express.Router();
router.use(loginRoutes);
router.use('/users', userRoutes);
module.exports = router;