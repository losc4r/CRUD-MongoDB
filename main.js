/**
 * Processor Principal
 * Estudo do banco de dados MongoDB (CRUD)
 * @author Carlos Antonio
 */

// Importação do módulo de conexão
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados do cliente
const clienteModel = require("./src/models/clientes.js")

// função para cadastrar um novo cliente
// atenção para trabalhar com banco de dados usar sempre async-await e try-catch
const salvarCliente = async (nomeCli, foneCli, cpfCli) => {
    try {
        // setar a estrutura de dados com os valores
        // obs: usar os mesmos nomes da estrutura
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli
        })
        // a linha abaixo salva os dados no banco de dados
        await novoCliente.save()
        console.log("Cliente adicionado com sucesso")
    } catch (error) {
        console.log(error)
    }
}
//========================================================
const iniciarSistema = async () => {
    console.clear()
    console.log("Estudo MongoDB")
    console.log("--------------------")
    await conectar()
    // CRUD Create (inserção no banco de dados)
    await salvarCliente("Bill Portões","99999-9999","99993999999")
    await salvarCliente("Billa Portões","99999-9999","99994999999")
    await salvarCliente("Bille Portões","99999-9999","99999699999")
    await salvarCliente("Billi Portões","99999-9999","99999979999")
    await salvarCliente("Billu Portões","99999-9999","99999998999")
    await desconectar()
}

iniciarSistema()