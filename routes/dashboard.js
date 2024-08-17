const express = require('express');

const sensorController = require('../controllers/sensor');

const router = express.Router();

router.get('/ph/current', sensorController.getPhCurrent);

router.get('/ph/history', sensorController.getPhHistory);

router.get('/tds/current', sensorController.getTdsCurrent);

router.get('/tds/history', sensorController.getTdsHistory);

module.exports = router;