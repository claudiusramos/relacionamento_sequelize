//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        // CREATE
        // const resultadoCreate = await Produto.create({
        //     nome: 'mouse',
        //     preco: 10,
        //     descricao: 'Um mouse USB bonitão'
        // })
        // console.log(resultadoCreate);


        // RETRIEVE
        // const produtos = await Produto.findAll();
        // Alternativa:
        // const produto = await Produto.findByPk(1);
        // console.log(produtos);

        // UPDATE
        // const produto = await Produto.findByPk(1);
        // produto.nome = "Mouse Top";

        // const resultadoSave = await produto.save();
        // console.log(resultadoSave);


        // DELETE
        // Produto.destroy({ where: { id: 1 }});
        // Alternativa:
        // const produto = await Produto.findByPk(1);
        // produto.destroy();



    } catch (error) {
        console.log(error);
    }
})();