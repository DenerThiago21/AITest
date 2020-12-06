const database = require('../database/connection');

class AvaliacaoController {

    /**função para retornar dados das avaliações (será utilizado para geração do gfráfico de evolução 
     * individual de cada atleta) */
    listarAvaliacaoProtocoloAtleta (request, response) {
        const atlID = request.params.atletaID;
        const protID = request.params.protocoloID;

        database.select('avaliacaoID', 'dataAvaliacao', 'valores')
                .table('tb_avaliacao')
                .where({atletaID: atlID, protocoloID: protID})
                .then(avaliacaoProtocoloAtleta => {
                    const arr = avaliacaoProtocoloAtleta;
                    console.log(arr);
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