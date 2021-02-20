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

    /**Função para atualizar o registro de um atleta no banco de dados */
    updateAtleta(request, response) {
        const {nome, cpf, graduacao, peso, senha} = request.body;
        const { id } = request.params;
        database('tb_atleta').update({ nome, cpf, graduacao, peso, senha }).where({'atletaID': id}).then(updated=>{
            response.json();
        }).catch(err=>{
            console.log(err);
        })
    }

    /**Função para buscar todos os atletas na base (SELECT * FROM tb_atletas) */
    listarTodosAtletas(request, response) {
        database.select('*').table('tb_atleta').then(atletas=>{
            //console.log(atletas);
            response.json(atletas);
        }).catch(err=>{
            console.log(err);
        })
    };

    /**Função para listar alguns campos da tabela atleta */
    listarTableAtletas(request, response) {
        database.select('atletaID as ID', 'nome', (database.raw('year(from_days(to_days(now())-to_days(dataNasc))) as idade')), 'peso', 'graduacao')
                .table('tb_atleta')
                .then(atletas=> {
                    response.json(atletas);
                }).catch(err=>{
                    console.log(err);
                })
    }

    /**Função para contar o total de atletas na base de dados (select count(atletaID) as total_atletas from tcc.tb_atleta) */
    totalAtletas(request, response) {
        database('tb_atleta').count('atletaID', {as: 'totalAtletas'}).then(total=>{
            response.json(total);
        }).catch(err=>{
            console.log(err);
        })
    }

    /**Função para deletar atleta do banco de dados pelo ID do atleta */
    deleteAtleta(request, response) {
        const { id } = request.params;
        database('tb_atleta').where({ 'atletaID': id }).del().then(deleted=>{
            response.json(deleted);
        }).catch(err=>{
            console.log(err);
        })
        //teste
    }

}

module.exports = new AtletaController();