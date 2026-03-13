/**************************************************************************
 * Objetivo: Treino de 'função' com a primeira atividade realizada
 * Autor: Fernando de Sá Souza
 * Data: 11/02/2026
 * Versão: 1.0
 **************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o nome do aluno
    let nomeAluno = nome

    //Entrada de dados da nota 1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

            //Entrada de dados da nota 2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

                //Entrada de dados da nota 3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                    //Entrada de dados da nota 4
                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4

                    //Validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: Existem campos obrigatórios que não foram preenchidos !!!')
                    //Validação de entrada de números apenas entre 0 e 100    
                    }else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
                        console.log('ERRO: Somente são aceitos valores entre 0 e 100 !!!')
                    //isNaN() -> Permite a validação de números ou letras
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: Somente números são permitidos na entrada de notas')
                    
                    }else{
                        let statusAluno
                        let media = calcularMedia(nota1, nota2, nota3, nota4)
                        
                         if (media >= 70){
                            statusAluno = 'APROVADO'
                         }else if (media = 50 && media < 70){
                            statusAluno = 'RECUPERAÇÃO'
                         }else if (media < 50){
                            statusAluno = 'REPROVADO'
                         }
                           //tofixed() -> É um método que permite fixar a quantidade de casas decimais
                    console.log(`ALUNO: ${nomeAluno} \nMÉDIA FINAL ${media.toFixed(1)} \nSTATUS DO ALUNO: ${statusAluno}`)
                    } 
                    
                })
            })
        })
    })
})

function calcularMedia(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    if(nota1 == '' || isNaN(nota1) || nota1 < 0 || nota1 > 100 || nota2 == ''|| isNaN(nota2)  || nota2 < 0 || nota2 > 100
    || nota3 == '' || isNaN(nota3) || nota3 < 0 || nota3 > 100 || nota4 == '' || isNaN(nota4) || nota4 < 0 || nota4 > 100){
        console.log('ERRO: Campo(s) preenchido(s) incorretamente.')
        return false   
    } else{
        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(4))/4
    } 
    

}