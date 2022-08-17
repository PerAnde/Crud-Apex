// Sequelize vai gerenciar as acoes entre banco de dados e aplicacao

// Importando sequelize
const Sequelize = require('sequelize');
// Utilizar em modo de ambiente ou desenvolvimento
const environment = process.env.NODE_ENV || 'development';
// Importando arquivo config
const config = require('../config/config.js')[environment];

// Passando informacoes do arquivo config para o sequelize
const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

// Exportando codigo para utilizar em outros arquivos
module.exports = sequelize;