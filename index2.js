//index2.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    //Insert (Create)
    const resultadoCreate = await Produto.create({
        nome: 'mouse',
        preco: 10,
        descricao: 'Mouse USB'
    })
    //console.log(resultadoCreate);

    //Read
    const repository = require('./produtoRepository');
    const produtos = await repository.findAll(10);
    //console.log(produtos);

})();

