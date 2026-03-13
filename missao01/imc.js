/***********************************************************************
 * Autor: Fernando de Sá Souza
 * Objetivo: Crie um sistema que faça o cálculo do IMC de uma pessoa
 * Data: 27/02/2026
 * Versão: 1.0
 ***********************************************************************/

const calcularImc = function(valor1, valor2) {
    let peso = Number(valor1)
    let altura = Number(valor2)

    altura = altura / 100

    let imc = peso /(altura * altura)

    return imc.toFixed(2)
}

const statusImc = function(valorImc){
    let imc = Number(valorImc)
    let status

    if(imc < 18.5)
        status = 'Abaixo do peso'
    else if(imc >= 18.5 && imc <= 24.9)
        status = 'Peso normal'
    else if(imc >= 25 && imc <= 29.9)
        status = 'Sobrepeso'
    else if(imc >= 30 && imc <= 34.9)
        status = 'Obesidade 1'
    else if(imc >=35 && imc <= 39.9)
        status = 'Obesidade 2'
    else 
        status = 'Obesidade 3'
    
        return status
}

//Exemplo
let peso = 100
let altura = 190

let imcCalculado = calcularImc(peso, altura)

console.log('IMC: ', imcCalculado)
console.log('Classificação: ', statusImc(imcCalculado))

