const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Constant = sequelize.define('constant', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
    },
    value: Sequelize.FLOAT,
    recheckTimeout: Sequelize.INTEGER,
    outputActiveTime: Sequelize.INTEGER
});

module.exports = Constant;
