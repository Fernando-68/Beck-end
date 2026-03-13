const validacao = require("./validacao.js")

//Função para calcular os valores
function calcularSituacao(fator1, fator2, operacao){
    let valor1 = Number(fator1)
    let valor2 = Number(fator2)
    let sinal = validacao.identificarOperacao(operacao)

    if(sinal == "+"){
        return valor1 + valor2
    } else if(sinal == "-"){
        return valor1 - valor2
    } else if(sinal == "*"){
        return valor1 * valor2
    } else if(sinal == "/"){
        return valor1 / valor2
    } else{
        return false
    }
}

module.exports = {
    calcularSituacao
}