/**********************************************************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de dados do Filme no banco de dados MySQL
 * Data: 15/04/2026
 * Autor: Fernando de Sá
 * Versão: 1.0
 **********************************************************************************************************************************/

//Import da biblioteca para manipular dados do banco de dados MySQL
const knex = require('knex')

//Import do arquivo de configuração para acesso ao banco de dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

//Criar a conexão com o banco de dados MySQL com o arquivo de configuração 
const knexConection = knex(knexDatabaseConfig.development)

//Função para inserir um novo filme no banco de dados.
const insertFilme = async function (filme) {
    try {


        let sql = `insert into tbl_filmes (
	nome, 
    sinopse,
    capa,
    data_lancamento,
    duracao,
    valor,
    avaliacao
) values (
	'${filme.nome}',
    '${filme.sinopse}',
    '${filme.capa}',
    '${filme.data_lancamento}',
    '${filme.duracao}',
    '${filme.valor}',
    if('${filme.avaliacao}' = '', null, '${filme.avaliacao}')
);`

        //Essa linha encaminha para o banco de dados o Script SQL
        let result = await knexConection.raw(sql)

        if (result) {
            return result[0].insertId
        } else {
            return false
        }

    } catch (error) {
        return false
    }


}

//Função para atualizar um filme existente para o banco de dados
const updateFilme = async function (filme) {
    try {
        let sql = `update tbl_filmes set
        nome = '${filme.nome}',
        sinopse = '${filme.sinopse}',
        capa = '${filme.capa}',
        data_lancamento = '${filme.data_lancamento}',
        duracao = '${filme.duracao}',
        valor = '${filme.valor}',
        avaliacao = if('${filme.avaliacao}' = '', null, '${filme.avaliacao}')
    where id = ${filme.id}`

        let result = await knexConection.raw(sql)

        if(result){
            return true
        }else{
            return false
        }

    } catch (error) {
        

        return false
    }
}

//Função para retornar todos os dados de filme do banco de dados
const selectAllFilme = async function () {
    try {
        //Script SQL para listar todos os filmes 
        let sql = 'select * from tbl_filmes order by id desc'

        //Executa no banco de dados o script e guarda o retorno do banco de dados
        //Pode ser um ERRO (false) ou um ARRAY com os dados 
        let result = await knexConection.raw(sql)

      

        //Validação para verificar se o retorno do banco de dados é um
        //ARRAY ou BOOLEAN (false)
        if(Array.isArray(result)){
            return result[0] //Retorna somente o índice com a lista de filmes
        }else{
            return false
        }
    } catch (error) {
        return false 
        
    }
}

//Função para retornar um filme filtrando pelo ID
const selectByIdFilme = async function (id) {
    try {
        let sql = `select * from tbl_filmes where id = ${id}`

        let result = await knexConection.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else {
            return false
        }
    } catch (error) {
        return false
    }
}

//Função para excluir um filme filtrando pelo ID
const deleteFilme = async function (id) {
    try {
        let sql = `delete from tbl_filmes where id=${id}`

        let result = await knexConection.raw(sql)

        if(result){
            return true
        }else{
            return false
        }
    } catch (error) {
        return false 
    }
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
}