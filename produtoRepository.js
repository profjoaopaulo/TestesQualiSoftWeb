//produtoRepository.js
const Produto = require('./produto');

function findAll(limit) {
    return Produto.findAll({ limit });
}

module.exports = { findAll }