const express = require('express');
const userRoute = require('./user.api');
const taskRoute = require('./task.api');

const router = express.Router();

router.use('/user', userRoute);
router.use('/task', taskRoute);

module.exports = router;
