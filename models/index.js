const sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const Sequelize = new sequelize(
  config.database, config.username, config.password, config
);
const db = {};

db.Sequelize = Sequelize;

module.exports = db;