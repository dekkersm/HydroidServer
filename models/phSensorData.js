const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const PhSensorData = sequelize.define('PhSensorData', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    value: Sequelize.FLOAT,
    phUpOn: Sequelize.BOOLEAN,
    phDownOn: Sequelize.BOOLEAN,
});

module.exports = PhSensorData;