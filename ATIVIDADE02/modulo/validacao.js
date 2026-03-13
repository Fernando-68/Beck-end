function validarNumeros(fator1, fator2) {
    let valor1 = Number(fator1)
    let valor2 = Number(fator2)

    if (isNaN(valor1) || isNaN(valor2)) {
        console.log("------------------------------------------------------------------------")
        console.log("Os campos não foram preenchidos corretamente.")
        console.log("------------------------------------------------------------------------")
        return true //Retorna o erro
    } else {
        return false //Está ok
    }
}

//Função para identificar a operação
function identificarOperacao(operacaoEscolhida) {
    let operacao = operacaoEscolhida.toLowerCase() //padroniza tudo para minúsculo
    let sinal

    if (operacao === "adição" || operacao === "adicao" || operacao === "mais" || operacao === "somar" || operacao === "+") {
        sinal = "+"
        return sinal
    } else if (operacao === "subtração" || operacao === "subtracao" || operacao === "menos" || operacao === "-") {
        sinal = "-"
        return sinal
    } else if (operacao === "multiplicação" || operacao === "multiplicacao" || operacao === "vezes" || operacao === "*") {
        sinal = "*"
        return sinal
    } else if (operacao === "divisão" || operacao === "divisao" || operacao === "/") {
        sinal = "/"
        return sinal
    } else {
        console.log("------------------------------------------------------------------------")
        console.log("ERRO: NÃO FOI POSSÍVEL PROSSEGUIR, VERIFIQUE SE PREENCHEU CORRETAMENTE.")
        console.log("------------------------------------------------------------------------")
        return false
    }
}

module.exports = {
    validarNumeros,
    identificarOperacao,
    
}