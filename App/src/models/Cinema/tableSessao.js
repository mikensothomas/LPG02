const Sequelize = require('sequelize');
const database = require('../bd');

const Sessao = database.define('sessoes', {
    sessaoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sessaoDia: {
        type: Sequelize.STRING(30),
        allowNull: false,
        validator: {
            notEmpty: true
        }
    },
    sessaoHorario: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    sessaoIdioma: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    sessaoPreco: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    idFilme: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: 'filmes',
            key: 'filmeId'
        }
    }
});

module.exports = Sessao;