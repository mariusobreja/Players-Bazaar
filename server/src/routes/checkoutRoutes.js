const express = require('express');
const { createCheckoutIntent } = require('../controllers/checkoutController');

const router = express.Router();

router.post('/intent', createCheckoutIntent);

module.exports = router;
