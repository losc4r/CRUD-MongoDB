/**
 * Módulos de conexão com o banco de dados
 * Uso de Framework mongoose
 */

// Importação do Mongoose

const mongoose = require('mongoose')

// Configuração do acesso ao banco de dados
// up/link - authenticação
// obs: Atlas(Obert via Atlas)
// para criar um banco de dados personalizado basta escolher um nome no final da string da url(ex: dbclientes)

const url = 'mongodb+srv://admin:123Senac@projetoestudo.ib3ye.mongodb.net/dbclientes'

// Criar uma variavel de apoio para validação

let conectado = false

// metodo para conectar o banco de dados
// async - executar a função de forma assincrona
const conectar = async () => {
    // validação (se não estiver conectado, conectar)
    if (!conectado) {
        // conectar com o banco
        // try catch - tratamento de exceções
        try {
            await mongoose.connect(url) //conectar
            conectado = true //setar a variável
            console.log("MongoDB conectado")
        } catch (erro) {
            // se o código de erro = 8000 (autenticação)
            if (error.code = 8000) {
                console.log("Erro de autenticação")
        } else {
            console.log(error)
        }
        
        }
    }
}

// metodo para desconectar o banco de dados

const desconectar = async () => {
    // validação (se estiver conectado, desconectar)
    if (!conectado) {
        // desconectar com o banco
        try {
            await mongoose.disconnect(url) //desconectar
            conectado = false //setar a variável
            console.log("MongoDB desconectado")
        } catch (erro) {
            console.log(error)
        
        }
    }
}

// exportar para o main os metódos conectar e desconectar
module.exports = { conectar, desconectar}
