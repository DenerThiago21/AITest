const database = require('../database/connection');

class AtletaController {
    /**Função para inserir um novo atleta na base de dados */
    inserirAtleta(request, response) {
        const {nome, sexo, cpf, graduacao, dataNasc, peso, senha, professorID} = request.body;

        console.log(nome);

        database.insert({nome, sexo, cpf, graduacao, dataNasc, peso, senha, professorID}).table('tb_atleta').then(data=>{
            console.log(data);
            response.json({message: "Criado com Sucesso"});
        }).catch(err =>{
            console.log(err);
        })
    };

    /**Função para buscar todos os atletas na base (SELECT * FROM tb_atletas) */
    listarTodosAtletas(request, response) {
        database.select('*').table('tb_atleta').then(atletas=>{
            console.log(atletas);
            response.json(atletas);
        }).catch(err=>{
            console.log(err);
        })
    };

}

module.exports = new AtletaController();