const database = require('../database/connection');

class ProtocoloController {
    /**Função para retornar todos os testes da base de datos */
    listarTodosProtocolos (request, response) {
        database.select('*').table('tb_protocolo').then(protocolos=>{
            //console.log(protocolos);
            response.json(protocolos);
        }).catch(err=>{
            console.log(err);
        })
    }
    /**Função para retornar teste pelo ID selecionado */
    listarProtocoloID (request, response) {
        const {id} = request.params;
        database('tb_protocolo').where({ 'protocoloID': id }).then(protocolo=>{
            response.json(protocolo);
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = new ProtocoloController()