import * as Sequelize from 'sequelize';

const db = require('./db');

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    avatar_url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
});

module.exports = User;
