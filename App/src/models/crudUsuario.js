const database = require('./bd');
const User = require('./Cinema/tableUser');
const validator = require('validator');

function Usuario (body) {
    this.body = body;
    this.erros = [];
}

Usuario.prototype.register = function () {
    this.valida();
    
    if (this.erros.length > 0) return;

    this.insert();
}

Usuario.prototype.valida = function () {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) this.erros.push('Email inválido!');
    if (this.body.senha.length < 8 || this.body.senha.length > 30) {
        this.erros.push('A senha precisa ter no mínimo 8 e no máximo 50 caracteres');
    } 
}

Usuario.prototype.cleanUp = function () {
    for (let key in this.body) {
        if (typeof this.body[key] !== 'string') this.body[key] = '';
    }

    this.body = {
        nome: this.body.nome,
        email: this.body.email,
        senha: this.body.senha
    }
}

Usuario.prototype.insert = async function () {

    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoCreate = await User.create({
            userName: this.body.nome,
            userEmail: this.body.email,
            userPwd: this.body.senha,
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
}

Usuario.select = async function (email) {

    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);

        console.log('EMAIL AQUI!!!: ' + email);
 
        const resultadoRead = await User.findOne({
            where: {
                userEmail: email
            }
        });
        console.log(resultadoRead);
        return resultadoRead;
    } catch (error) {
        console.log(error);
    }   
}

module.exports = Usuario;