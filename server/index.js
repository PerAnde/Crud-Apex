// Importando htpp
const http = require('http');
// Importando express
const express = require('express');
// Importando http-stats
const status = require('http-status');
// Importando arquivo database que contem informacoes do sequelize
const db = require('./src/database/database');
// Iniciar a aplicacao pela const app
const app = express();
// Importando arquivo routes
const routes = require('./src/routes/routes.js');
// Importando Cors
const cors = require('cors');

// Configurando o express para trabalhar com o JSON
app.use(express.json());

// Utilizando cors
app.use(cors());

// Antes de qualquer rota vem /sistema
app.use('/sistema', routes);

// Caso der algum erro de pagina nao existente
app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});

// Caso der algum erro interno
app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});

// Sincronizando banco de dados
db.sync().then(() => console.log("Banco conectado com sucesso!"))

// Rodando servidor na porta 3001
app.listen(3001, () => {
    console.log("Servidor rodando!");
 })