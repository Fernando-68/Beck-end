/***********************************************************************
 * Autor: Fernando de Sá Souza
 * Objetivo: Calcular o Fatorial de um número
 * Data: 27/02/2026
 * Versão: 1.0
 ***********************************************************************/

const readline = require('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
}) 
//Validação
const validar = function (valor) {
    if(valor.trim() == '')
        console.log('ERRO: O campo não foi preenchido!')

    const numero = Number(valor)

        if(isNaN(numero)){
         console.log('ERRO: Apenas números são aceitos neste campo!')
        }else if(numero === 0){
         console.log('ERRO: O fatorial de 0 não é permitido!')
        }else if(numero === 1){
         console.log('ERRO: Informe um número maior que 1!')
        }else{
            return null
        }

}

//Cálculo
const calcularFatorial = function(numero){
    let resultado = 1
    let conta = ''

    for(let i = numero; i >= 1; i--){
        resultado = resultado * i
        conta = conta + i

        if(i > 1)
            conta = conta + 'x'
    }

    console.log(`Fatorial de ${numero} é ${conta} = ${resultado}`)
}

//Função principal
const iniciar = function(){
    rl.question('Digite um número: ', function(input) {
        const erro = validar(input)

        if(erro){
            console.log(erro)
            rl.close()
            return
        }

        const numero = Number(input)
        
        console.log(calcularFatorial(numero))

        rl.close()
    })
}

iniciar()

