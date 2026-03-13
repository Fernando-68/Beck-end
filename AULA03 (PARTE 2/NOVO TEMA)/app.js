/****************************************************************************************************************
 * Objetivo: Criar uma aplicação que realiza cálculos de juros utilizando funções para modularizar o código
 * Autor: Fernando de Sá Souza
 * Data: 11/02/2026
 * Versão: 1.0
 ****************************************************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o nome do Cliente: ', function (nome) {
    let nomeCliente = nome


    entradaDeDados.question('Digite o nome do produto: ', function (produto) {
        let nomeProduto = produto


        entradaDeDados.question('Digite o valor da compra: $', function (valor) {
            let valorProduto = valor


            entradaDeDados.question('Digite a taxa de juros: ', function (taxa) {
                let taxaJuros = taxa


                entradaDeDados.question('Digite a quantidade de parcelas: ', function (parcelas) {
                    let qtdeParcelas = parcelas

                    let calculos = require('./modulo/calculos.js')

                    let montante = calculos.calcularJurosCompostos(valorProduto, taxaJuros, qtdeParcelas)
                   
                    //Chama a função para realizar o calculo do montante
                    if(montante){
                    console.log('O valor final é : ' + montante)
                    } else{
                        console.log('ERRO: Não foi possível realizar o cálculo')
                        entradaDeDados.close()
                    }

                })
            })
        })
    })

})

