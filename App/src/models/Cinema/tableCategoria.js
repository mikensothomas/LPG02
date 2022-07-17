const Sequelize = require('sequelize');
const database = require('../bd');

const Categoria = database.define('categoria', {
    categoriaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoriaNome: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Categoria;