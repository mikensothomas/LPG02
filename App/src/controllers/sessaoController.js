const Filmes = require('../models/crudFilme');
const Sessao = require('../models/crudSessao');

exports.index = async (req, res) => {
    const filmes = await Filmes.select();
    res.render('cadastraSessao', { filmes });
}

exports.cadastrar = async (req, res) => {
    const sessao = new Sessao(req.body);
    await sessao.insert();
    res.redirect('back');
}