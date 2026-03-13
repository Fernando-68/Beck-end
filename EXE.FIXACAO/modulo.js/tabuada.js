/*****************************************************************************
 * Objetivo: Arquivo responsável por gerar uma tabuada utilizando WHILE e FOR
 * Data: 25/02/2026
 * Autor: Fernando de Sá
 * Versão: 1.0
 *****************************************************************************/

//Import da biblioteca de operações matemáticas
const calculoMatematico = require('./calculo.js')

//Função para imprimir tabuada
const gerarTabuadaWhile = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0 
    let resultado

    while(cont <= 10){
        //Processamento
        resultado = calculoMatematico.multiplicar(tab, cont)
        console.log(tab + ' x ' + cont + ' = ' + resultado)

        //cont = cont + 1
        //cont++
        cont +=1
    }
}

gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    let resultado
    for(let cont = 0; cont <=10; cont++){
        //Processamento
        resultado = calculoMatematico.multiplicar(tab, cont)
        console.log(tab + ' x ' + cont + ' = ' + resultado)
        
    }
}

gerarTabuadaFor(7)