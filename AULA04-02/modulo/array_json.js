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
    console.log(aluno.email)

    aluno.telefone = "011-975845252"
    aluno.data_nascimento = "13/03/2000"

    console.log(aluno)

    delete aluno.email
    console.log(aluno.nome)

    aluno.RA = 123456789
    console.log(aluno)

    aluno.nota = null
    console.log(aluno)
}

const cadastroDeProdutos = function(){
    let cores = [
        
        {"id":1, "cor":"Branco", "Hexa": "#ffffff"}, //0
        {"id":2, "cor":"Preto", "Hexa": "#00000"}, //1
        {"id":3, "cor": "Azul", "Hexa": "#0000ff"}, //2
        {"id":4, "cor": "Amarelo", "Hexa": "#ffff00"}, //3
        {"id":5, "cor": "Rosa", "Hexa": "#ffb5c0"} //4


    ]

    let marcas = [ 
        {"id":1, "marca": "Nvidida", "Telefone": "11 42378-1237", "Email":"nvidia@gmail"}, //0
        {"id":2, "marca": "Dell", "Telefone": "11 12344-5678", "Email":"dell@gmail"}, //1
        {"id":3, "arca": "Asus", "Telefone": "11 33624-6789", "Email":"asus@gmail"}, //2
        {"id":4, "marca": "Intel", "Telefone": "11 12321-3232", "Email":"intel@gmail"}, //3
        {"id":5, "marca": "MultiLaser", "Telefone": "11 45673-9087", "Email":"multilaser@gmail"}, //4
        {"id":6, "marca": "Acer", "Telefone": "11 76456-8899", "Email":"acer@gmail"}, //5
        {"id":7, "marca": "Rayzer", "Telefone": "11 14532-6745", "Email":"Nvidia@gmail"} //6
    ]

    let produtos = [
        {   "id": 1,
            "nome": "Monitor",
            "descrição": "Monitor de 27 Polegadas",
            "valor": 1500,
            "qtde": 20,
            "cor": [
                cores[0],
                cores[1]
            ],
            "marca": [
                marcas[1].marca
            ]
        },
        {
            "id": 2,
            "nome": "Teclado",
            "descrição": "Teclado Mecânico RGB",
            "valor": 250,
            "qtde": 500,
            "cor": cores,
            "marca": [
                marcas[4].marca,
                marcas[6].marca
            ]
        },
        {
            "id": 3,
            "nome": "Mouse",
            "descrição": "Mouse sem fio",
            "valor": 80,
            "qtde": 160,
            "cor": [
                cores[1],
                cores[3],
                cores[4]

            ],
            "marca": [
                marcas[1].marca,
                marcas[4].marca,
                marcas[6].marca
            ]
        }
    ]
    console.log(produtos)
    console.table(produtos)
    console.log(produtos[0].Cor)

    //Exibindo as cores referente ao produto "MONITOR"
    produtos[0].cor.forEach(function(itemCor){
        console.log(itemCor.cor)
    })

    console.log(produtos)
    console.table(produtos)

    //permite extarir os produtos
    produtos.forEach(function(itemProduto){
        console.log(`Produto: ${itemProduto.nome}`)

        //Permite extrair as cores dentro de cada produto
        itemProduto.cor.forEach(function(itemCor){
            console.log(`   Cor: ${itemCor.cor}`)
        })

            //Permite extrair as marcas dentro de cada produto
            itemProduto.marca.forEach(function(itemMarca){
                console.log(`   Marca: ${itemMarca}`)
            }) 
                
    })
       
     //Filtrando produtos pelo nome
     console.log('Exemplo de como pesquisar um produto pelo nome')

     let nomeProduto = 'Mouse'
     produtos.forEach(function(itemProduto){
        if(String(nomeProduto).toUpperCase == String(itemProduto.nome).toUpperCase){
            console.log(itemProduto)
        }
     })

     console.log('Exemplo de como pesquisar um produto pela cor do produto')

     let nomeCor = 'rosa'

     produtos.forEach(function(itemProduto){
       itemProduto.cor.forEach(function(itemCor){
        if(String(nomeCor).toUpperCase() == String(itemCor).toUpperCase()){
            console.log(itemProduto
            
            )
        }
       })
       
        })
     

    
   
    

    //console.log(cores[2].Cor)

    //for(let contador = 0; contador < cores.length; contador++){
       // let item = cores[contador]
       // console.log(`O nome da cor: ${item.Cor}`)
  //  }

}


cadastroDeProdutos()
//manipularDadosJson()
//console.log(verificaritem('Maria'))
//console.table(listaDeAlunos)
//removerItem('Maria')
//console.table(listaDeAlunos)