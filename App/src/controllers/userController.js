const Usuario = require('../models/crudUsuario');

exports.insert = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        usuario.register();
        if (usuario.erros.length > 0) {
            res.send(usuario.erros);
        } else {
            res.redirect('login');
        }
    } catch {
        return res.render('404');
    }
}
