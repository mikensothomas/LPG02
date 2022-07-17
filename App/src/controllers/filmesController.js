const Movie = require('../models/crudFilme');

exports.index = (req, res) => {
    res.render('cadastroFilmes');
}

exports.cadastrar = async (req, res) => {
    try {
        const filme = new Movie(req.body.nome, req.body.imagem, req.body.categoria);
        await filme.insert();
        res.redirect('back');
    }catch (error) {
        console.log(error);
    }
}