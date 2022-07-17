const Filme = require('../models/crudFilme');
const Sessao = require('../models/crudSessao');
const Venda = require('../models/crudVenda');

exports.index = async (req, res) => {
    try {
        const filmeNome = req.query.filme;
        const filme = await Filme.selectByFilme(filmeNome);
        const sessoes = await Sessao.select(filme.filmeId);
        res.render('vendas', { filme, sessoes });
    } catch (error) {
        res.render('404');
    }
}

exports.venda = async (req, res) => {
    try {
        const usuario = req.session.user.email;
        const sessao = Number(req.query.sessao);
        console.log('SESSÃO FILME: ' + sessao);
        const venda = new Venda(usuario, sessao);
        venda.insert();
        res.redirect('homepage/index');
    } catch (error) {
        res.render('404');
    }
}