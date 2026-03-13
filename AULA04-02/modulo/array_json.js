/**************************************************************
* Objetivo: Manipular dados em ARRAY e JSON
* Data: 05/03/2026
* Autor: Fernando de Sá
* Versão: 1.0
**************************************************************/

/*
    [] -> representa um objeto do tipo ARRAY
    {} -> representa um objeto do tipo JSON 

    Array -> É um espaço na memória para armazenar dados sem a necessidade de criar outros objetos
        EX: 
            let nome  = 'José'
            let nome2 = 'Maria'
            let nome3 = 'João'

                indices   0       1        2
            let nomes ['José', 'Maria', 'João']

    JSON -> É um espaço na memória para armazenar dados com CHAVE e VALOR 
    
        EX: 
            let nome = 'José'
            let telefone = '123456789'
            let email = 'jose@gmail.com'

                            Atributo
                            Chave    Valor   Chave        Valor       Chave       Valor
            let cliente = {"nome" : "José", "telefone" : "123456789", "email" : "jose@gmail.com"}


 */

//Criando objetos do tipo ARRAY
const listaDeAlunos = ['José', 'Maria', 'Luis', 'Antônio', 'Carlos']
const listaDeClientes = []
const listaDeFornecedores = []

const exibirDados = function(){
    //Exibe um objeto ARRAY com seu conteúdo
    console.log(listaDeAlunos)

    //Exibindo os tipos de dados de um indice
    console.log(typeof(listaDeAlunos))

    //Exibe o objeto ARRAY em formato de tabela, mostrando indice e conteúdo
    console.table(listaDeAlunos)

    console.log(listaDeAlunos[3])

    //Exibindo os dados de forma individual pelo indice
    console.log(`O nome do aluno é: ${listaDeAlunos[0]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[1]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[2]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[3]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[4]}`)

    //Usando o WHILE
    console.log('*******Exemplo com While*******')
    let cont = 0
    while(cont < listaDeAlunos.length){
        console.log(`O nome do aluno é: ${listaDeAlunos[cont]}`)
        cont+=1
    }

    //Usando o FOR
    console.log('*******Exemplo com For*******')
    for(let contador = 0; contador < listaDeAlunos.length; contador++){
        console.log(`O nome do aluno é: ${listaDeAlunos[contador]}`)
    }

    //Usando o FOR EACH
    console.log('*******Exemplo com For Each*******')
    listaDeAlunos.forEach(function(aluno){
        console.log(`O nome do aluno é: ${aluno}`)
    })

    //Usando o FOR OF
    console.log('*******Exemplo com For Of*******')
    for(aluno of listaDeAlunos){
        console.log(`O nome do aluno é: ${aluno}`)
    }

    //Usando o FOR IN
    console.log('*******Exemplo com For In*******')
    for(item in listaDeAlunos){
        console.log(`O nome do aluno é: ${listaDeAlunos[item]}`)
    }

    console.log(listaDeAlunos.length)
}

const manipularDados = function(){
    //Adicionando elementos de forma manual pelo indice
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'Luis da Silva'
    listaDeClientes[3] = 'Ana da Silva'

    console.log(listaDeClientes)

    //Permite adicionar novos elementos no Array sempre no FINAL da lista
    listaDeFornecedores.push('Antônio')
    listaDeFornecedores.push('Caio')
    listaDeFornecedores.push('Luis')
    listaDeFornecedores.push('Hugo', 'Maria', 'José', 'André')

    console.table(listaDeFornecedores)

    //Permite adicionar novos elementos no ARRAY, sempre no INICIO
    //Após adicionar o elemento, ele vai reoganizar a sua lista
    listaDeFornecedores.unshift('Luciano')

    console.table(listaDeFornecedores)

    //Permite adicionar um novo elemento em uma determinada posição no ARRAY
                        // splice(indice, qtde de elementos a ser removido, 'Novo conteúdo')
    listaDeFornecedores.splice(3,0,'Bernardo')

    console.table(listaDeFornecedores)

    //Permite remover um determinado conteudo do ARRAY no indice do 
    // elemento do ARRAY
                        // splice(indice, qtde de elementos a ser removido)
    listaDeFornecedores.splice(6,1)

    console.table(listaDeFornecedores)

    //Permite remover o ultimo elemento do ARRAY
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover o primeiro elemto do ARRAY
    //Após ele remover, irá reorganizar todos os elementos
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

}

const removerItem = function(nomeAluno){

    //indexOf() -> Retorna o indice referente ao conteúdo que está sendo pesquisado
    listaDeAlunos.splice(listaDeAlunos.indexOf(nomeAluno), 1)     

    
    
    
    
    // for(cont in listaDeAlunos)
          //  if(nomeAluno == listaDeAlunos[cont]){
          //      listaDeAlunos.splice(cont, 1)
          //  }
//}

//const removerAluno = function(nomeAluno) {
   // let cont = 0
   // let qtde = listaDeAlunos.length

   // while(cont < qtde){
   //     if(nomeAluno == listaDeAlunos[cont]){
     //       listaDeAlunos.splice(cont, 1)
     //   }
      //  cont++
   // }
}

const verificaritem = function(nomeAluno){

    //Verifica se o conteúdo existe dentro do ARRAY e retorna TRUE ou FALSE
   return listaDeAlunos.includes(nomeAluno)

}

const manipularDadosJson = function(){

    //Criando um objeto JSON
        //A estrutura do JSON é, Chave (atributo) : Valor (conteúdo)
    let aluno = {"id" : 1, "nome": "José da Silva", "RA":123456, "email": "jose@gmail.com"}

    //Exibe o objeto JSON
    console.log(aluno)
    console.table(aluno)

    console.log(aluno.nome)
}

manipularDadosJson()
//console.log(verificaritem('Maria'))
//console.table(listaDeAlunos)
//removerItem('Maria')
//console.table(listaDeAlunos)