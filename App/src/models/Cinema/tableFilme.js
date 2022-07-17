const Sequelize = require('sequelize');
const database = require('../bd');

const Filme = database.define('filmes', {
    filmeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    filmeNome: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    filmeBanner: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    idCategoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: 'categoria',
            key: 'categoriaId'
        }
    }
});

module.exports = Filme;