/******************************************************************************************
 * Objetivo: Arquivo responsável pela padronização e status code do projeto de filmes 
 * Data: 17/04/2026
 * Autor: Fernando de Sá
 * Versão: 1.0
 ******************************************************************************************/

//Padronização dos retornos da API (Cabeçalho)
const DEFAULT_MESSAGE = {
    api_description: 'API para controlar o projeto de filmes',
    development: 'Fernando de Sá',
    version: '1.0.4.26',
    status: Boolean,
    status_code: Number,
    response: {}
}

//Mensagens de ERRO do projeto de filmes
const ERROR_BAD_REQUEST = {status: false, status_code: 400, message: 'Não foi possível processar a requisição devido a erros de entrada de dados'}
const ERROR_INTERNAL_SERVER_MODEL = {status: false, status_code: 500, message: 'Não foi possível processar a requisição devido a um erro interno no servidor [MODEL]'}
const ERROR_INTERNAL_SERVER_CONTROLLER = {status: false, status_code: 500, message: 'Não foi possível processar a requisição devido a um erro interno no servidor [CONTROLLER]'}
const ERROR_CONTENT_TYPE = {status: false, status_code: 415, message: 'Não foi possível processar a requisição pois o formato de dados encaminhado não é suportado pelo servidor, apenas deve ser utilizado JSON'}
const ERROR_NOT_FOUND = {status: false, status_code: 404, message: 'Não foram encontrados dados para retorno'}

//Mensagens de SUCESSO do projeto de filmes
const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Item inserido com sucesso'}
const SUCCESS_RESPONSE = {status: true, status_code: 200}
const SUCCESS_UPDATED_ITEM = {status: true, status_code: 200, message: 'Item atualizado com sucesso!'}
const SUCCESS_DELETED_ITEM = {status: true, status_code: 200, message: 'Item excluído com sucesso!'}



module.exports ={
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERROR_CONTENT_TYPE,
    ERROR_NOT_FOUND,
    SUCCESS_CREATED_ITEM,
    SUCCESS_RESPONSE,
    SUCCESS_UPDATED_ITEM,
    SUCCESS_DELETED_ITEM
}