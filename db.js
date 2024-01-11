const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'root', { dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;