const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const UserConfig = sequelize.define('users', {
    id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING
    },
    isChangePassword:{
        type: Sequelize.BOOLEAN
    },
    enabled: {
        type: Sequelize.BOOLEAN
    },
    editModeEnabled: {
        type: Sequelize.BOOLEAN
    }
})

module.exports = UserConfig;