// Importando express
const express = require('express');
// Importando arquivo controller
const UsuarioController = require('../controllers/usuarioController.js');
// Importando router de express
const router = express.Router();

// Na rota /usuarios vai chamar o arquivo usuarioController fazendo um create
router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

// Exportando codigo para utilizar em outros arquivos
module.exports = router;