const connection = require('../database/connection');
const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
require ('dotenv/config');

const SECRET = process.env.SECRET;

const atletaController = require('../controller/AtletaController');
const protocoloController = require('../controller/ProtocoloController');
const avaliacaoController = require('../controller/avaliacaoController');
const loginController = require('../controller/LoginController');

function verifyJWT(req, res, next) {
    const token = req.headers['authorization'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).end();
        }
        req.professorID = decoded.professorID;

        next();
    })
}

router.post('/login', loginController.fazerLogin);

/**rota para inserção de atleta no banco de dados */
router.post('/atletas/novo-atleta', verifyJWT, atletaController.inserirAtleta);
/**rota para atualização de um atleta no banco de dados */
router.put('/atletas/:id', verifyJWT, atletaController.updateAtleta);
/**rota para deletar atleta do banco de dados */
router.delete('/atletas/:id', verifyJWT, atletaController.deleteAtleta);
/**rota para trazer todos os atletas no bando de dados */
router.get('/atletas/', verifyJWT, atletaController.listarTodosAtletas);
/**rota para trazer dados de atletas porém para os campos, nome, idade, peso e graduacao */
router.get('/tbatletas', verifyJWT, atletaController.listarTableAtletas);
/**rota para trazer o total de atletas do banco de dados */
router.get('/total_atletas', verifyJWT, atletaController.totalAtletas);



/**rota para trazer todos os protocolos de teste do banco de dados */
router.get('/protocolos/', verifyJWT, protocoloController.listarTodosProtocolos);
/**rota para trazer o protocolo de acordo com o ID */
router.get('/protocolos/:id', verifyJWT, protocoloController.listarProtocoloID);

/**rota para trazer a avaliação individual para cada atleta */
router.get('/avaliacao/individual/:atletaID/:protocoloID', verifyJWT, avaliacaoController.listarAvaliacaoProtocoloAtleta);
/**Rota para trazer todas as avaliações */
router.get('/avaliacao', verifyJWT, avaliacaoController.listarTodasAvaliaoes);
/**Rota para Trazer as ultimas avaliações feitas pelos atletas */
router.get('/ultimas_avaliacoes', verifyJWT, avaliacaoController.listarAvaliacaoPorData);
/**Rota para aplicação das avaliações - gravação no banco de dados */
router.post('/avaliacao/aplicar', verifyJWT, avaliacaoController.aplicaTeste);

/**Rota para exevutar a StoredProcedure */
router.get('/sp', verifyJWT, avaliacaoController.executaSP);
/**rota para trazer dados utilizados na geração do gráfico geral de atletas */
router.get('/lista', verifyJWT, avaliacaoController.listaGeraAtleta);

module.exports = router