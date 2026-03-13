/***********************************************************************
 * Autor: Fernando de Sá Souza
 * Objetivo: Criar um sistema que gerencie números pares e ímpares
 * Data: 27/02/2026
 * Versão: 1.0
 ***********************************************************************/

const readline = require('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
}) 

const validarNumeros = function(inicial, final){
    if(inicial === '' || final === ''){
        console.log('ERRO: Os campos devem ser todos preenchidos!')
        return false
    }

    if(isNaN(inicial) || isNaN(final)){
        console.log('ERRO: Apenas números devem ser usados nestes campos!')
        return false
    }

    inicial = Number(inicial)
    final = Number(final)

    if(inicial < 0 || inicial > 500){
        console.log('ERRO: O número inicial deve estar entre 0 e 500!')
        return false
    }

    if(final < 0 || final > 1000){
        console.log('ERRO: O número final não deve estar entre 0 e 1000!')
        return false
    }

    if(inicial === final){
        console.log('O número inicial e o final não podem seer iguais')
        return false
    }

    if(inicial > final){
        console.log('ERRO: O número inicial e o final não podem seer iguais!')
    }

    return true

}

const calcularNumeros = function(inicial, final){
    let pares = []
    let impares = []

    for(let i = inicial; i <= final; i++){
        if(i % 2 === 0){
            pares.push(i)
        }else{
            impares.push(i)
        }
    }


console.log('\nLista de números Pares')
pares.forEach(function(num) {
   console.log(num) 
})

console.log('Quantidade números encontrados: ', pares.length)


console.log('\nLista de números Impares')
impares.forEach(function(num) {
console.log(num)
})

console.log('Quantidade de números encontrados: ', impares.length)

}

rl.question('Digite o número inicial: ', function(numeroInicial){
    rl.question('Digite o número final: ', function(numeroFinal){

        if(validarNumeros(numeroInicial, numeroFinal)){
            calcularNumeros(Number(numeroInicial), Number(numeroFinal))
        }

        rl.close()
    })
})
