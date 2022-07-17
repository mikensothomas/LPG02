const Login = require('../models/login');
const Filmes = require('../models/crudFilme');

exports.index = (req, res) => {
    res.render('login');
};

exports.logado = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();
        await login.login();
        if (login.erro.length > 0) {
            req.session.save(function () {
                return res.send(login.erro);
            }); 
        } else {
            req.session.user = {email: req.body.email, logado: true};
            const filmes = await Filmes.select();
            console.log('FILMES AQUI: ' + filmes);
            res.render('homepage', { filmes });
        } 
    } catch (error) {
        res.render('404');
    }
}

exports.homepage = async (req, res) => {
    const filmes = await Filmes.select();
    res.render('homepage', { filmes });
}

exports.criaConta = (req, res) => {
    res.render('cadastroUser')
}
