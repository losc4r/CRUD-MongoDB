/**
 * Modelo de dados para construção das coleções ("Tabelas")
 * Clientes
 */

// importação dos recurso do framework mongoose
const { model, Schema } = require('mongoose')

// criação da estrutura da coleção clientes
const clienteSchema = new Schema({
    nomeCliente: {
        type: String
    },

    foneCliente: {
        type: String
    },

    cpf: {
        type: String,
        unique: true,
        index: true,
    },

    dataCadastro: {
        type: Date,
        default: Date.now
    }

}, {versionkey: false}) // não versionar os dados armazenados

// exportar para o main o modelo de dados
// OBS: Clientes será o nome da coleção

module.exports = model('Clientes', clienteSchema)