const express = require('express');
const route = express.Router();
const userController = require('./src/controllers/userController');
const filmesController = require('./src/controllers/filmesController');
const loginController = require('./src/controllers/loginController');
const sessaoController = require('./src/controllers/sessaoController');
const vendasControler = require('./src/controllers/vendasController');
const {
    middlewareGlobal
} = require('./src/middlewares/middleware');

route.get('/usuario/login', loginController.index);
route.get('/usuario/criarConta', loginController.criaConta);
route.post('/usuario/criarConta', userController.insert);

route.get('/homepage/index', loginController.homepage);
route.post('/homepage/index', loginController.logado);

route.get('/vendas', vendasControler.index);
route.post('/vendas', vendasControler.venda);

route.get('/filme/cadastraFilme', filmesController.index);
route.post('/filme/cadastraFilme', filmesController.cadastrar);

route.get('/sessao/cadastraSessao', sessaoController.index);
route.post('/sessao/cadastraSessao', sessaoController.cadastrar);

module.exports = route;