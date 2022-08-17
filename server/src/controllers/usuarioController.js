// Importando arquovo usuario
const Usuario = require('../models/usuario');
// Importando http-stats
const status = require('http-status');

// Pegando dados e armazenando em const
exports.Insert = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
    const message = req.body.message;

    // Inserindo dados no banco de dados
    Usuario.create({
        name: name,
        email: email,
        tel: tel,
        message: message
    })
        // Depois
        .then(usuario => {
            // Se usuario for verdadeiro retorna os dados
            if (usuario) {
                res.status(status.OK).send(usuario);
                // Se nao retorna vazio
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        // Caso falhar o .then
        .catch(error => next(error));
}

// Buscar todos os usarios
exports.SearchAll = (req, res, next) => {
    // Buscar 
    Usuario.findAll()
        // Se tiver, mostra os usuarios
        .then(usuario => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            }
        })
        // Se der algum erro
        .catch(error => next(error));
}

// Buscar apenas um usuario
exports.SearchOne = (req, res, next) => {
    // Salvar paramentor id na const id
    const id = req.params.id;

    // Buscar pela chave primaria
    Usuario.findByPk(id)
        // Depois
        .then(usuario => {
            // Se achar
            if (usuario) {
                res.status(status.OK).send(usuario)
                // Se nao achar
            } else {
                res.status(status.NOT_FOUND).send()
            }
        })
        // Se der algum erro
        .catch(error => next(error));
}

// Atualizar usuario
exports.Update = (req, res, next) => {
    // Pegando dados e armazenando em const
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
    const message = req.body.message;

    // Pegando usuario pelo id
    Usuario.findByPk(id)
        // Depois   
        .then(usuario => {
            // Se existir usuario, fazer update
            if (usuario) {
                usuario.update({
                    name: name,
                    email: email,
                    tel: tel,
                    message: message
                },
                    // Fazer update apenas no id
                    {
                        where: { id: id }
                    })
                    // Tudo ok mostra status ok
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    // Caso der erro
                    .catch(error => next(error));
                // Se nao achar o id
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        // Caso der erro
        .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    // Pegando dados e armazenando em const
    const id = req.params.id;

    // Pegando usuario pelo id
    Usuario.findByPk(id)
        // Depois
        .then(usuario => {
            // Se existir usuario, deletar
            if (usuario) {
                usuario.destroy({
                    where: { id: id }
                })
                    // Tudo ok mostra status ok
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    // Caso der erro
                    .catch(error => next(error));
                // Se nao achar o id
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        // Caso der erro
        .catch(error => next(error));
}