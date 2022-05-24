const { DataTypes } = require('sequelize');

const { sequelize } = require('../../database/connection');

const { User } = require('../User');

const Thought = sequelize.define('thought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

Thought.belongsTo(User);
User.hasMany(Thought);

module.exports = { Thought };