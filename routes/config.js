const express = require('express');

const configController = require('../controllers/config');

const router = express.Router();

router.get('/config/current', configController.getConfig);

router.get('/config/:type', configController.getConfigOne);

module.exports = router;