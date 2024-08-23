const express = require('express');

const configController = require('../controllers/config');

const router = express.Router();

router.get('/config/current', configController.getConfig);

router.get('/config/:type', configController.getConfigOne);

router.put('/config/:type', configController.setConfigOne);

module.exports = router;