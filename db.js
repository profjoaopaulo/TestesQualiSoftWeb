//db.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Testes', 'root', '********', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
