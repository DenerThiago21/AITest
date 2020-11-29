const connection = require('../database/connection');
const express = require('express');
const router = express.Router();

const atletaController = require('../controller/AtletaController');
const protocoloController = require('../controller/ProtocoloController');

/**rota para inserção de atleta no banco de dados */
router.post('/atletas/novo-atleta', atletaController.inserirAtleta);
/**rota para trazer todos os atletas no bando de dados */
router.get('/atletas/', atletaController.listarTodosAtletas);



/**rota para trazer todos os protocolos de teste do banco de dados */
router.get('/protocolos/', protocoloController.listarTodosProtocolos);

module.exports = router