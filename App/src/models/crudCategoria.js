const database = require('./bd');
const Categoria = require('./Cinema/tableCategoria');

function Categ (nome) {
    this.nome = nome;    
}
    
Categ.prototype.insert = async function () {

    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Categoria.create({
            categoriaNome: this.nome
        });
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
}

Categ.select = async function (categoria) {
    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);
    
        const resultadoRead = await Categoria.findOne({where: {
            categoriaNome: `${categoria}`
        }});
        console.log(resultadoRead);
        return resultadoRead;
    } catch (error) {
        console.log(error);
    }   
}    

module.exports = Categ;