/*****************************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 25/02/2026
 * Autor: Fernando de Sá
 * Versão: 1.0
 *****************************************************************************/

// Importando módulo do Node
const readline = require('readline')

// Criando interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Função anônima para gerar as tabuadas
const gerarTabuadas = function(tabInicial, tabFinal, contInicial, contFinal){

    for(let tab = tabInicial; tab <= tabFinal; tab++){

        console.log(`\nTabuada do ${tab}`)

        for(let cont = contInicial; cont <= contFinal; cont++){
            let resultado = tab * cont
            console.log(`${tab} x ${cont} = ${resultado}`)
        }
    }
}

// Função anônima para validar dados
const validarDados = function(tabInicial, tabFinal, contInicial, contFinal){

    if(!tabInicial || !tabFinal || !contInicial || !contFinal){
        console.log("Erro: Nenhum campo pode ficar vazio.")
        return false
    }

    tabInicial = Number(tabInicial)
    tabFinal = Number(tabFinal)
    contInicial = Number(contInicial)
    contFinal = Number(contFinal)

    if(isNaN(tabInicial) || isNaN(tabFinal) || isNaN(contInicial) || isNaN(contFinal)){
        console.log("Erro: Todos os valores devem ser números.")
        return false
    }

    if(tabInicial < 2 || tabInicial > 100 ||
       tabFinal < 2 || tabFinal > 100){
        console.log("Erro: A tabuada deve estar entre 2 e 100.")
        return false
    }

    if(contInicial < 0 || contInicial > 50 ||
       contFinal < 1 || contFinal > 50){
        console.log("Erro: O contador deve estar entre 0 e 50.")
        return false
    }

    if(tabInicial > tabFinal){
        console.log("Erro: A tabuada inicial não pode ser maior que a final.")
        return false
    }

    if(contInicial > contFinal){
        console.log("Erro: O contador inicial não pode ser maior que o final.")
        return false
    }

    return {
        tabInicial: Number(tabInicial),
        tabFinal: Number(tabFinal),
        contInicial: Number(contInicial),
        contFinal: Number(contFinal)
    }
}

// Entrada de dados
rl.question("Digite a tabuada inicial (2 a 100): ", function(ti){

    rl.question("Digite a tabuada final (2 a 100): ", function(tf){

        rl.question("Digite o contador inicial (0 a 50): ", function(ci){

            rl.question("Digite o contador final (1 a 50): ", function(cf){

                const dadosValidados = validarDados(ti, tf, ci, cf)

                if(dadosValidados){
                    gerarTabuadas(
                        dadosValidados.tabInicial,
                        dadosValidados.tabFinal,
                        dadosValidados.contInicial,
                        dadosValidados.contFinal
                    )
                }

                rl.close()
            })
        })
    })
})

