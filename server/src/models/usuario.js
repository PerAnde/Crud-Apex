// Importando sequelize
const Sequelize = require('sequelize');
// Importando arquivo database
const sequelize = require('../database/database.js');

// Criando tabela no banco de dados
const Usuario = sequelize.define("usuario", {
    // Definindo colunas
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
            len: [5, 50]
        }
    },
    tel: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
            len: [5, 15]
        }
    },
    message: {
        allowNull: true,
        type: Sequelize.STRING(999)
    }
});

// Exportando codigo para utilizar em outros arquivos
module.exports = Usuario;