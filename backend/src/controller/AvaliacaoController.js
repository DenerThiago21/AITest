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
                    response.json(avaliacaoProtocoloAtleta);
                }).catch(err => {
                    console.log(err);
                })
    };

    /**Função que retornará todas as avalações feitas, (somente para testes interos) */
    listarTodasAvaliaoes (request, response) {
        database.select('*').table('tb_avaliacao').then(avaliacoes=> {
            response.json(avaliacoes);
        }).catch(err=>{
            console.log(err);
        })
    }

    /**Função para retornar as avaliações com data mais recente
        select ta.atletaID, ta.protocoloID, tp.nome as nome_protocolo, ta.score, ta.dataAvaliacao from tcc.tb_avaliacao as ta
	        inner join (select atletaID, protocoloID, max(dataAvaliacao) as ultimaData from tcc.tb_avaliacao group by atletaID, protocoloID ) as ta2
		    on ta.atletaID = ta2.atletaID and ta.protocoloID = ta2.protocoloID and ta.dataAvaliacao = ta2.ultimaData
		    inner join tcc.tb_protocolo tp
		        on ta.protocoloID = tp.protocoloID 
        order by ta.atletaID
     */
    listarAvaliacaoPorData (request, response) {
        database.select('ta.atletaID', 'ta.protocoloID', { Nome_Protocolo: 'tp.nome'}, 'ta.score', 'ta.dataAvaliacao').table({ ta: 'tb_avaliacao' })
            .innerJoin(database.select('atletaID', 'protocoloID').max({ ultimaData: 'dataAvaliacao' }).table('tb_avaliacao').groupBy('atletaID', 'protocoloID').as('ta2'),
                   function(){
                       this.on('ta.atletaID', '=', 'ta2.atletaID')
                            .andOn('ta.protocoloID', '=', 'ta2.protocoloID')
                            .andOn('ta.dataAvaliacao', '=', 'ta2.ultimaData')  
                   } 
                )
            .innerJoin({ tp: 'tb_protocolo' }, 'ta.protocoloID', '=', 'tp.protocoloID')
            .orderBy('ta.atletaID').then(avalicaoUltimaData=>{
                response.json(avalicaoUltimaData);
            }).catch(err=>{
                console.log(err);
            })
    }
    listaGeraAtleta(request, response) {       
        database.select('*').table('tb_generealevolutiuon').then(totalTests=>{
            response.json(totalTests);
        }).catch(err=>{
            console.log(err);
        })        
    }
    executaSP(request, response) {
        database.raw('call SP_Evolucao_Geral()').then(result=>{
            response.json(true)
        }).catch(err=>{
            callback(err);
        }); 
    }

    /**Gravando os testes feitos(podendo ser mais de um) */
    aplicaTeste(request, response) {
        const req = request.body;
        //console.log(protocoloID);

        database('tb_avaliacao').insert(req).then(create=>{
            response.status(201).send();
        }).catch(err=>{
            console.log(err);
        })
    }

}

module.exports = new AvaliacaoController();