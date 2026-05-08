/**********************************************************************************************************************
 * Objetivo: Arquivpo responsável pela validação, tratamento, manipulação de dados para realixzar o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Fernando de Sá
 * Versão: 1.0
 ***********************************************************************************************************************/

//Import do arquivo de configurações de mensagens do projeto
const configMessages = require('../modulo/configMessages.js')

//Import do arquivoDAO para manipular os dados do filme do banco de dados
const filmeDAO = require('../../model/DAO/filme/filme.js')
//const { application } = require('express')

//Função para inserir um novo filme
const inserirNovoFilme = async function (filme, contentType) {

    //Cria uma cópia dos JSONs do arquivo de configuração de mensagens
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {

        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            
            //Chama a função para validar a entrada dos dados do Filme 
            let validar = await validarDados(filme)
           
            //Retorna JSON de ERRO caso algum atributo seja inválido,
            //caso contrário, retorna um false (Não teve erro)
            if (validar) {
                return validar //400
            } else {
                //Encaminha os dados do Filme para o DAO inserir no banco de dados
                let result = await filmeDAO.insertFilme(await tratarDados(filme))

                if (result) { //201
                    filme.id = result
                    
                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_CREATED_ITEM.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_CREATED_ITEM.status_code
                    customMessage.DEFAULT_MESSAGE.message = customMessage.SUCCESS_CREATED_ITEM.message
                    customMessage.DEFAULT_MESSAGE.response = filme

                    return customMessage.DEFAULT_MESSAGE //201
                } else { //Erro 500 (model)
                    return customMessage.ERROR_INTERNAL_SERVER_MODEL //500
                }

            }
        }
        else {
            return customMessage.ERROR_CONTENT_TYPE //415
        }
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para atualizar um filme existente
const atualizarFilme = async function (filme, id, contentType) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))
    
    try {
        //Validação para verificar se o conteúdo do Body é um Jso
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){
        
            //Chama a função para buscar o Filme e validar se o ID esta correto, 
            //ou se o ID existe no banco de dados e se o Filme existe 
            let resultBuscarFilme = await buscarFilme(id)

            console.log(resultBuscarFilme)

            //Chama a função para validar os dados de alteração do filme (Body)
            if(resultBuscarFilme.status){
                let validar = await validarDados(filme)

                if(!validar){

                    //Adiciona um atributo Id no JSON de filme, para enviar ao DAO um único objeto
                    filme.id = Number(id)

                    //Chama a função para atualizar o filme no banco de dados
                    let result = await filmeDAO.updateFilme(await tratarDados(filme))

                    if(result){
                        customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_UPDATED_ITEM.status
                        customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_UPDATED_ITEM.status_code
                        customMessage.DEFAULT_MESSAGE.message = customMessage.SUCCESS_UPDATED_ITEM.message
                        customMessage.DEFAULT_MESSAGE.response = filme

                        return customMessage.DEFAULT_MESSAGE //200 (atualizado)
                    }else {
                        return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                    }
                }else {
                    return validar //400 de validação dos campos do banco de dados
                }
            }else{
                return resultBuscarFilme //400 (ID inválido) ou 404 (não encontrado) ou 500
            }
        }else{
            return customMessage.ERROR_CONTENT_TYPE //415
        }
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller) 
    }
}

//Função para retornar todos os filmes existentes 
const listarFilme = async function () {
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    //Chama a função DAO para retornar a lista de filmes do banco de dados
    try {
        let result = await filmeDAO.selectAllFilme()

        //Validação para verificar se o DAO conseguiu processar o Script nobanco de dados 
        if(result){
            //Validação para verifiar se o conteúdo do array tem dados de retorno ou se está vazio
            if(result.length > 0){
                customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_RESPONSE.status
                customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_RESPONSE.status_code
                customMessage.DEFAULT_MESSAGE.response.count = result.length
                customMessage.DEFAULT_MESSAGE.response.filme = result
                

                return customMessage.DEFAULT_MESSAGE //200
            }else {
                return customMessage.ERROR_NOT_FOUND //404
            }
        }else {
            return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 (model)
        }
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)    
    }
}

//Funçãpo para retornar um filme filtrando um ID
const buscarFilme = async function (id) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        //Validação para garantir que o ID seja um número válido 
        if(id == undefined || String(id).replaceAll(' ', '') == '' || id == null || isNaN(id) || id <= 0){
            customMessage.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'

            return customMessage.ERROR_BAD_REQUEST//400
        }else {
            //Chama a função do DAO para pesquisar pelo ID 
            let result = await filmeDAO.selectByIdFilme(id)
            //Validação para verificar se o DAO retornou dados ou um FALSE (erro)
            if(result){
                //Validação para verificar se o DAO tem algum dado no Array
                if(result.length > 0){
                    customMessage.DEFAULT_MESSAGE.status = customMessage.SUCCESS_RESPONSE.status
                    customMessage.DEFAULT_MESSAGE.status_code = customMessage.SUCCESS_RESPONSE.status_code
                    customMessage.DEFAULT_MESSAGE.response.filme = result

                    return customMessage.DEFAULT_MESSAGE //200
                }else {
                    return customMessage.ERROR_NOT_FOUND //404
                }
            }else {
                return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }
        }
    } catch (error) {
        return customMessage.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}
//console.log(buscarFilme(2))

//Funçaõ para excluir um filme 
const excluirFilme = async function (id) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    try {
        //Chama a função buscar filme para validar se o filme existe
        let resultBuscarFilme = await buscarFilme(id)

        //Validação
        if(resultBuscarFilme.status){
            let result = await filmeDAO.deleteFilme(id)

            if(result)
                return customMessage.SUCCESS_DELETED_ITEM //200 ou 204
            else
            return customMessage.ERROR_INTERNAL_SERVER_MODEL //500 (model)
        }else{
            return resultBuscarFilme //400 e 404
        }
    } catch (error) {
        return configMessages.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para validar os dados de cadastro do Filme
const validarDados = async function (filme) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))

    if (filme.nome == undefined || filme.nome == '' || filme.nome == null || filme.nome.length > 80) {
        customMessage.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    } else if ( filme.sinopse == undefined || filme.sinopse == '' || filme.sinopse == null) {
        customMessage.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    } else if ( filme.capa == undefined || filme.capa == '' || filme.capa == null || filme.capa.length > 255) {
        customMessage.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.data_lancamento == undefined || filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento.length != 10) {
        customMessage.ERROR_BAD_REQUEST.field = '[DATA DE LANÇAMENTO] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.duracao == undefined ||filme.duracao == '' || filme.duracao == null || filme.duracao.length < 5) {
        customMessage.ERROR_BAD_REQUEST.field = '[DURAÇÃO] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.valor == undefined || isNaN(filme.valor) || filme.valor.lenght > 5) {
        customMessage.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    } else if (filme.avaliacao == undefined || isNaN(filme.avaliacao) || filme.avaliacao.lenght > 3) {
        customMessage.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    } else {
        return false
    }
}

const tratarDados = async function(filme){
    //Tratamento para eliminar a chegada das aspas (') com carácter inválido
    filme.nome = filme.nome.replaceAll("'", "")
    filme.sinopse = filme.sinopse.replaceAll("'", "")
    filme.capa = filme.capa.replaceAll("'", "")
    filme.data_lancamento = filme.data_lancamento.replaceAll("'", "")
    filme.duracao = filme.duracao.replaceAll("'", "")
    filme.valor = filme.valor.replaceAll("'", "")
    filme.avaliacao = filme.avaliacao.replaceAll("'", "")

    return filme
}

module.exports = {
    inserirNovoFilme,
    atualizarFilme,
    listarFilme,
    buscarFilme,
    excluirFilme
}