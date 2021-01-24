const connection = require('../database/connection');
const express = require('express');
const router = express.Router();

const atletaController = require('../controller/AtletaController');
const protocoloController = require('../controller/ProtocoloController');
const avaliacaoController = require('../controller/avaliacaoController');

/**rota para inserção de atleta no banco de dados */
router.post('/atletas/novo-atleta', atletaController.inserirAtleta);
/**rota para trazer todos os atletas no bando de dados */
router.get('/atletas/', atletaController.listarTodosAtletas);
/**rota para trazer o total de atletas do banco de dados */
router.get('/total_atletas', atletaController.totalAtletas);



/**rota para trazer todos os protocolos de teste do banco de dados */
router.get('/protocolos/', protocoloController.listarTodosProtocolos);

/**rota para trazer a avaliação individual para cada atleta */
router.get('/avaliacao/individual/:atletaID/:protocoloID', avaliacaoController.listarAvaliacaoProtocoloAtleta);
router.get('/avaliacao', avaliacaoController.listarTodasAvaliaoes);

module.exports = router