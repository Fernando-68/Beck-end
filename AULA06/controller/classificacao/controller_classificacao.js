const configMessages = require('../modulo/configMessages.js')

const filmeDAO = require('../../model/DAO/filme/filme.js')

const validarClassificacao = async function(classificacao) {
    let customMessage = JSON.parse(JSON.stringify(configMessages))
    
    if (classificacao == undefined || classificacao == '' || classificacao == null || classificacao.length > 5) {
        customMessage.ERROR_BAD_REQUEST.field = '[CLASSIFICAÇÃO] INVÁLIDO'
        return customMessage.ERROR_BAD_REQUEST
    }else{
        return false
    }
}


const inserirClassificacao = async function () {

}


const atualizarClassificacao = async function() {

}