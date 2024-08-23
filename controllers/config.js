const Constant = require('../models/constant');

exports.getConfig = (req, res, next) => {
    Constant.findAll().then(constants => {
        res.json({
            "confData": constants
        })
    }).catch();

};

exports.getConfigOne = (req, res, next) => {
    let type = req.params.type;
    Constant.findOne({ where: { type: type } })
        .then(result => {
            res.json({ constant: result });
        })
        .catch(err => console.log(err));
};

exports.setConfigOne = (req, res, next) => {
    let type = req.params.type;
    let constant = req.query;
    Constant.findOne({ where: { type: type } })
        .then(c => {
            c.pumpTime = constant.pumpTime;
            c.value = constant.value;
            c.name = constant.name;
            c.recheckTimeout = constant.recheckTimeout;
            return c.save();
        })
        .then(result => {
            res.json({ constant: result });
        })
        .catch(err => console.log(err));
};