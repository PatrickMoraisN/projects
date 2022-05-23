const { DataTypes } = require('sequelize');

const { sequelize } = require('../../database/connection');

// User

const Thought = sequelize.define('Thought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  }
});

module.exports = { Thought };