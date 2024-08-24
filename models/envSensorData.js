const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const EnvSensorData = sequelize.define('EnvSensorData', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tempValue: Sequelize.FLOAT,
    lightValue: Sequelize.INTEGER,
    humidityValue: Sequelize.INTEGER,
    co2Value: Sequelize.INTEGER,
    baroValue: Sequelize.INTEGER,
    tovcValue: Sequelize.INTEGER,
    lightOn: Sequelize.BOOLEAN,
    coolingOn: Sequelize.BOOLEAN,
    heatOn: Sequelize.BOOLEAN,
    co2On: Sequelize.BOOLEAN,
});

module.exports = EnvSensorData;