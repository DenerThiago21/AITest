const database = require('../database/connection');
const {format} = require('date-fns');

class AvaliacaoController {

    /**função para retornar dados das avaliações (será utilizado para geração do gfráfico de evolução 
     * individual de cada atleta) */
    listarAvaliacaoProtocoloAtleta (request, response) {
        const atlID = request.params.atletaID;
        const protID = request.params.protocoloID;

        database.select('avaliacaoID', 'dataAvaliacao', 'valores', 'score')
                .table('tb_avaliacao')
                .where({atletaID: atlID, protocoloID: protID})
                .then(avaliacaoProtocoloAtleta => {
                    for(let i in avaliacaoProtocoloAtleta){
                        avaliacaoProtocoloAtleta[i].dataAvaliacao = format(avaliacaoProtocoloAtleta[i].dataAvaliacao, 'dd/MM/yyyy') ;
                    }
                    console.log(avaliacaoProtocoloAtleta);
                    response.json(avaliacaoProtocoloAtleta);
                }).catch(err => {
                    console.log(err);
                })
    };

    /**Função que retornará todas as avalações feitas, (somente para testes interos) */
    listarTodasAvaliaoes (request, response) {
        database.select('*').table('tb_avaliacao').then(avaliacoes=> {
            console.log(avaliacoes);
            response.json(avaliacoes);
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = new AvaliacaoController();