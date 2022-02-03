//db.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Testes', 'root', 'jpMySQL19', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;