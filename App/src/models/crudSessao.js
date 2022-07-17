const Sessao = require('./Cinema/tableSessao');
const database = require('./bd');
const Filme = require('./crudFilme');

function Session (body) {
    this.body = body;
}

Session.prototype.insert = async function () {

    await database.sync();
    
    const id = await Filme.selectByFilme(this.body.filme);
    let filmeId = id.filmeId;

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Sessao.create({
            sessaoDia: this.body.dia,
            sessaoHorario: this.body.horario,
            sessaoIdioma: this.body.idioma,
            sessaoPreco: this.body.preco,
            idFilme: filmeId
        });
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
}

Session.select = async function (filmeId) {
    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);
    
        const resultadoRead = await Sessao.findAll({where: {
            idFilme: filmeId
        }});
        console.log(resultadoRead);
        return resultadoRead;
    } catch (error) {
        console.log(error);
    }   
} 

Session.selectById = async function (id) {
    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);
    
        const resultadoRead = await Sessao.findOne({where: {
            sessaoId: id
        }});
        console.log(resultadoRead);
        return resultadoRead;
    } catch (error) {
        console.log(error);
    }   
}

module.exports = Session;