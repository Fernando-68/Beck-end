/**************************************************************************
 * Objetivo: Projeto para realizar o cálculo de médias escolares
 * Autor: Fernando de Sá Souza
 * Data: 29/01/2026
 * Versão: 1.0
 **************************************************************************/

/*
    Tipos de variáveis

    var -> Permite criar um espaço em memória do tipo variável.
            Essa forma de criação é considerada mais antiga,
            é provavel que seja encontrada apenas em projetos
            mais antigos.
            Dica: Caso você precise utilizar o var, recomenda-se
            que seja utilizado apenas em escopo Global. 

    let -> Permite criar um espaço em memória do tipo variável.
            Essa forma de ciração é realizada somente no escopo Local,
            ou seja, dentro de bloco de programação { }.
            Esse tipo de variável deixa de existir ao término do bloco.

    const -> Permite criar um espaço em memória do tipo contante,
        ou seja, esse conteúdo não podera sofrer mudanças durante
        o projeto.
        Dica: Se pissível voc^pode criar essa const escrita em 
        MAIUSCULO para facilitar a sua utilização. Pode ser criada 
        de forma Local ou Global.

        Operadores de comparação

        == -> Permite a comparação de dois conteúdos
        != -> Permite comparar a diferença de dois conteúdos
        < -> Permite validar o valor menor
        > -> Permite validar o valor maior
        <= -> Permite validar se o valor é igual ou menor
        >= -> Permite validar se o valor é igual ou maior 
        === -> Permite comparar a igualdade dos conteúdos e a
                igualdade da tipagem de dados
        !== -> Permite comparar a diferença de conteúdos e a
                igualdade de tipagem de dados
        ==! -> permite comparar a igualdade de conteúdos e a 
                diferença de tipagem de dados

                Tipos de operadores lógicos

                E -> AND -> &&
                OU -> OR -> ||
                NAO -> NOT -> !

        
        Formas de conversão de tipos de dados

        parseINT() -> Permite converter um conteúdo em número inteiro
        parseFloat() -> Permite conerter um conteúdo em número decimal
        Number() -> Permite converter um conteúdo para NúMERO, podendo ser
            inteiro ou decimal 

        String() - Permite converter um conteúdo para STRING
        Boolean() - Permite converter um conteúdo para BOOLEANO

        typeof() -> Retorna o tipo de dados de uma variável
            (String, Number, Boolean ou Object) 
*/

//Import da biblioteca de entrada de dados
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
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        
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

