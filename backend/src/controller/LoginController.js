const database = require('../database/connection');
const jwt = require('jsonwebtoken');
require ('dotenv/config');

const SECRET = process.env.SECRET;

class LoginController {
    fazerLogin(req, res) {
        const {nome, senha} = req.query;

        database('tb_professor').where({ 'nome': nome, 'senha': senha }).then(prof=>{
            if(prof.length === 0) {
                res.status(401).end();    
            } else {
                const token = jwt.sign({ professorID: prof.professorID }, SECRET, {expiresIn: 10800});
                res.json({'token': token});
            }
        }).catch(err=>{
            res.status(401).end();
        })

    }
}

module.exports = new LoginController();