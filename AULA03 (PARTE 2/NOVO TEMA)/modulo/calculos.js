/*****************************************************************************
 * Objetivo: Arquivo responsável pelas funções de cálculos financeiros
 * Autor: Fernando de Sá Souza
 * Data: 11/02/2026
 * Versão: 1.0
 *****************************************************************************/

function calcularPercentual(numero) {

    // Recebe número encaminhado
    let numeroPercentual = Number(numero)

    // Validação de entrada vazia, menor ou igual
    if (numero == '' || numero <= 0 || isNaN(numero)) {
        return false
    } else {

        // Calcula percentual do número
        let percentual = numeroPercentual / 100

        return Number(percentual.toFixed(2))
    }
}

// Função para retornar montante referente a juros compostos
function calcularJurosCompostos(valor, taxa, parcelas){
    
    //Recebe os valores dos argumentos e converte em número
    let valorPrincipal = Number(valor)
    let taxaJuros = Number(taxa)
    let qtdeParcelas = Number(parcelas)

    if(valor == '' || isNaN(valor) || valor <= 0 || parcelas <= 0 || parcelas == '' || isNaN(parcelas)){
        return false
    }else{
    //chama fução para retornar o percentual da taxa
        let percentual = calcularPercentual(taxaJuros)

    if(percentual){
        //calculo
        let montante = valorPrincipal * ((1 + percentual) ** qtdeParcelas)
        return Number(montante.toFixed(2))
    }else{
        return false
    }

    }
}

module.exports = {
    calcularPercentual,
    calcularJurosCompostos
}