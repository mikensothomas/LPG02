const Sequelize = require('sequelize');
const database = require('../bd');

const Venda = database.define('venda', {
    vendaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: 'users',
            key: 'userId'
        }
    },
    idSessao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: 'sessoes',
            key: 'sessaoId'
        }
    }
}); 

module.exports = Venda;