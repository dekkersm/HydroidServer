const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const TdsSensorData = sequelize.define('TdsSensorData', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    value: Sequelize.FLOAT,
    pumpOn: Sequelize.BOOLEAN
});

module.exports = TdsSensorData;