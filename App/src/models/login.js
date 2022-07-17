const Usuario = require('./crudUsuario');
const validator = require('validator');

class Login {
    constructor (body) {
        this.body = body;
        this.user = null;
        this.erro = [];
    }

    async register () {
        this.valida();
    
        if (this.erro.length > 0) return;
    
    }
    
    valida () {
        this.cleanUp();
    
        if (!validator.isEmail(this.body.email)) {
            this.erro.push('Usuário inválido');
        }
        if (this.body.senha.length < 8 || this.body.senha.length > 30) {
            this.erro.push('A senha precisa ter no mínimo 8 e no máximo 30 caracteres');
        }
    }
    
    cleanUp () {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') this.body[key] = '';
        }
    
        this.body = {
            email: this.body.email,
            senha: this.body.senha
        }
    }
    
    async login () {
    
        this.user = await Usuario.select(this.body.email);
    
        console.log('USER AQUI!!!: ' + this.user);
    
        if (!this.user) {
            console.log('ENTROU AQUI!!!');
            this.erro.push('Usuário inválido');
            console.log('ERROS!!!: ' + this.erro);
            return;
        } 
    
        if (this.body.senha !== this.user.userPwd) {
            this.erro.push('Senha inválida');
            console.log('ERROS!!!: ' + this.erro);
            return;
        }        
    }
}

module.exports = Login;