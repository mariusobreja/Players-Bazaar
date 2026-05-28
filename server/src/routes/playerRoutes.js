const express = require('express');
const {
  listPlayers,
  getPlayer
} = require('../controllers/playersController');

const router = express.Router();

router.get('/', listPlayers);
router.get('/:id', getPlayer);

module.exports = router;
