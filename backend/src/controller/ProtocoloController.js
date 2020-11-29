const database = require('../database/connection');

class ProtocoloController {
    /**Função para retornar todos os testes da base de datos */
    listarTodosProtocolos (request, response) {
        database.select('*').table('tb_protocolo').then(protocolos=>{
            console.log(protocolos);
            response.json(protocolos);
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = new ProtocoloController()