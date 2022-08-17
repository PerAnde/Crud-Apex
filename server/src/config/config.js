// String de conexao

// Exportando codigo para utilizar em outros arquivos
module.exports = {
    // Informacoes de conexao do banco de dados
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'crudexercicioapex',
            dialect: 'mysql',
            user: 'root',
            password: 'root'
        }
    },
    // Imformacoes de ambiente - host e porta
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}