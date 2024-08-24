
const Sequelize = require('sequelize');

const phdata = require('../models/phSensorData');
const tdsData = require('../models/tdsSensorData');
const waterData = require('../models/waterSensorData');
const envData = require('../models/envSensorData');

exports.getPhCurrent = (req, res, next) => {
    phdata.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    }).then(entries => {
        res.json(entries[0]);
    })
};

exports.getPhHistory = (req, res, next) => {
    let endDate = req.query.to ? new Date(req.query.to) : new Date();
    let startDate = req.query.from ? new Date(req.query.from) : new Date(new Date() - 24 * 60 * 60 * 1000);
    if (req.query.from || req.query.to) {
        phdata.findAll({
            where: {
                createdAt: {
                    [Sequelize.Op.between]: [startDate, endDate]
                }
            }
        })
            .then(result => {
                res.json({ phData: result });
            })
            .catch(err => console.log(err));
    } else {
        phdata.findAll()
            .then(result => {
                res.json({ phData: result });
            })
            .catch(err => console.log(err));
    }
};

exports.getTdsCurrent = (req, res, next) => {
    tdsData.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    }).then(entries => {
        res.json(entries[0]);
    })
};

exports.getTdsHistory = (req, res, next) => {
    let endDate = req.query.to ? new Date(req.query.to) : new Date();
    let startDate = req.query.from ? new Date(req.query.from) : new Date(new Date() - 24 * 60 * 60 * 1000);
    if (req.query.from || req.query.to) {
        tdsData.findAll({
            where: {
                createdAt: {
                    [Sequelize.Op.between]: [startDate, endDate]
                }
            }
        })
            .then(result => {
                res.json({ tdsData: result });
            })
            .catch(err => console.log(err));
    } else {
        tdsData.findAll()
            .then(result => {
                res.json({ tdsData: result });
            })
            .catch(err => console.log(err));
    }
};

exports.getWaterCurrent = (req, res, next) => {
    waterData.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    }).then(entries => {
        res.json(entries[0]);
    })
};

exports.getWaterHistory = (req, res, next) => {
    let endDate = req.query.to ? new Date(req.query.to) : new Date();
    let startDate = req.query.from ? new Date(req.query.from) : new Date(new Date() - 24 * 60 * 60 * 1000);
    if (req.query.from || req.query.to) {
        waterData.findAll({
            where: {
                createdAt: {
                    [Sequelize.Op.between]: [startDate, endDate]
                }
            }
        })
            .then(result => {
                res.json({ waterData: result });
            })
            .catch(err => console.log(err));
    } else {
        waterData.findAll()
            .then(result => {
                res.json({ waterData: result });
            })
            .catch(err => console.log(err));
    }
};

exports.getEnvCurrent = (req, res, next) => {
    envData.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    }).then(entries => {
        res.json(entries[0]);
    })
};

exports.getEnvHistory = (req, res, next) => {
    let endDate = req.query.to ? new Date(req.query.to) : new Date();
    let startDate = req.query.from ? new Date(req.query.from) : new Date(new Date() - 24 * 60 * 60 * 1000);
    if (req.query.from || req.query.to) {
        envData.findAll({
            where: {
                createdAt: {
                    [Sequelize.Op.between]: [startDate, endDate]
                }
            }
        })
            .then(result => {
                res.json({ envData: result });
            })
            .catch(err => console.log(err));
    } else {
        envData.findAll()
            .then(result => {
                res.json({ envData: result });
            })
            .catch(err => console.log(err));
    }
};