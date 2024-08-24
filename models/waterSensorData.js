const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const WaterSensorData = sequelize.define('WaterSensorData', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    value: Sequelize.FLOAT,
    fillOn: Sequelize.BOOLEAN,
    pumpOn: Sequelize.BOOLEAN,
});

module.exports = WaterSensorData;