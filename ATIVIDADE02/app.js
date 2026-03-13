/**************************************************************************************
 * Objetivo: Desenvolver uma aplicação que possa realizar cálculos matemáticos
 * Autor: Fernando de Sá Souza
 * Data: 13/02/2026
 * Versão: 1.0
 ***************************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

console.log('Insira dois números para começar')
entradaDeDados.question('Insira o primeiro número: ', function(numero1){
    let valor1 = Number(numero1.trim().replace(",", "."))

    entradaDeDados.question("Digite o segundo fator: ", function (numero2) {
        let segundoFator = Number(numero2.trim().replace(",", "."))

        entradaDeDados.question("Digite qual dessas operações você deseja utilizar (Adição, Subtração, Multiplicação ou Divisão): ", function (operacao) {
            let operacaoEscolhida = operacao

           
            let sinal = validacao.identificarOperacao(operacaoEscolhida)
            let verificarNumeros = validacao.validarNumeros(primeiroFator, segundoFator)

            if (verificarNumeros) {
                entradaDeDados.close()
                return false
            } else if (!sinal) {
                entradaDeDados.close()
            } else {
                let calculoFinal = calculo.calcularSituacao(primeiroFator, segundoFator, operacaoEscolhida)

                console.log("------------------------------------------------------------------------")
                console.log("Primeiro número escolhido: " + primeiroFator)
                console.log("Segundo número escolhido: " + segundoFator)
                console.log("Operação escolhida: " + validacao.identificarOperacao(operacaoEscolhida))
                console.log("\nO resultado final foi: " + calculoFinal)
                console.log("------------------------------------------------------------------------")
                
                entradaDeDados.close()
            }

        })
    })
                
})
