const sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');

const Sequelize = new sequelize(
  config.database, config.username, config.password, config
);
const db = {};

db.Sequelize = Sequelize;
db.User = User;

User.init(Sequelize);

User.associate(db);

module.exports = db;