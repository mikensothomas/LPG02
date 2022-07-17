const Venda = require('./Cinema/tableVenda');
const database = require('./bd');
const Usuario = require('./crudUsuario');
const Sessao = require('./crudSessao');

function Vendas (usuario, sessao) {
    this.usuario = usuario;
    this.sessao = sessao;
}

Vendas.prototype.insert = async function () {

    await database.sync();

    const idUser = await Usuario.select(this.usuario);
    const idSession = await Sessao.selectById(this.sessao);
    let usuarioId = idUser.userId;
    let sessaoId = idSession.sessaoId;
    

    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoCreate = await Venda.create({
            idUser: usuarioId,
            idSessao: sessaoId
        });
        return resultadoCreate;
    } catch (error) {
        console.log(error);
    }
}

module.exports = Vendas;