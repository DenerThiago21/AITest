const connection = require('../database/connection');
const express = require('express');
const router = express.Router();

const atletaController = require('../controller/AtletaController');
const protocoloController = require('../controller/ProtocoloController');
const avaliacaoController = require('../controller/avaliacaoController');

/**rota para inserção de atleta no banco de dados */
router.post('/atletas/novo-atleta', atletaController.inserirAtleta);
/**rota para atualização de um atleta no banco de dados */
router.put('/atletas/:id', atletaController.updateAtleta);
/**rota para deletar atleta do banco de dados */
router.delete('/atletas/:id', atletaController.deleteAtleta);
/**rota para trazer todos os atletas no bando de dados */
router.get('/atletas/', atletaController.listarTodosAtletas);
/**rota para trazer dados de atletas porém para os campos, nome, idade, peso e graduacao */
router.get('/tbatletas', atletaController.listarTableAtletas);
/**rota para trazer o total de atletas do banco de dados */
router.get('/total_atletas', atletaController.totalAtletas);



/**rota para trazer todos os protocolos de teste do banco de dados */
router.get('/protocolos/', protocoloController.listarTodosProtocolos);
/**rota para trazer o protocolo de acordo com o ID */
router.get('/protocolos/:id', protocoloController.listarProtocoloID);

/**rota para trazer a avaliação individual para cada atleta */
router.get('/avaliacao/individual/:atletaID/:protocoloID', avaliacaoController.listarAvaliacaoProtocoloAtleta);
/**Rota para trazer todas as avaliações */
router.get('/avaliacao', avaliacaoController.listarTodasAvaliaoes);
/**Rota para Trazer as ultimas avaliações feitas pelos atletas */
router.get('/ultimas_avaliacoes', avaliacaoController.listarAvaliacaoPorData);
/**Rota para aplicação das avaliações - gravação no banco de dados */
router.post('/avaliacao/aplicar', avaliacaoController.aplicaTeste);

/**Rota para exevutar a StoredProcedure */
router.get('/sp', avaliacaoController.executaSP);
/**rota para trazer dados utilizados na geração do gráfico geral de atletas */
router.get('/lista', avaliacaoController.listaGeraAtleta);

module.exports = router