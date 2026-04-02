/*****************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação da API do projeto de Estados e Cidades
 * Data: 01/04/26
 * Autor: Fernando de Sá
 * Versão: 1.0
 *****************************************************************************************************/

/***********************
 * Para configurar a API:
 * Instalar o EXPRESS -> npm install espress --save
 *      Dependencia para configurar e utilizar o protocolo HTTP para criar a API
 * 
 * Instalar o CORS    -> npm install cors --save
 *      Dependencia para configurar as permissões de acesso da API
 * 
 **********************/

//Import das dependecias para criar a API
const express = require('express')
const cors = require('cors')

//Criando um objeto do express para criar a API
const app = express()

//Configuração dos CORS da API
const corsOptions = {
    origin: ['*'],  //Configuração de origem da requisição (IP ou Dominio)
    methods: 'GET', //Configuração dos verbos que serão utilizados na API
    allowedHeaders: ['Content-type', 'Authorization'] //Configurações de permissões
                      //Tipo de dados  //Autorização de acesso
}

//Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOptions))

//Import do arquivo de funções
const estadosCidades = require('./modulo/funcoes.js')

//Endpoint para listar os estados
app.get('/v1/senai/estados', function(request, response){
    let estados = estadosCidades.getListaEstados()
    response.status(200) //Requisição bem sucedida!!!
    response.json(estados)
})

app.get('/v1/senai/dados/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "Nenhum estado foi encontrado."})
    }
})

app.get('/v1/senai/capital/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getCapitalEstados(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "Nenhum estado foi encontrado."})
    }
    
})

//Retorna os estados filtrando por região
app.get('/v1/senai/estados/regiao/:regiao', function(request, response){
    let sigla = request.params.regiao
    let estado = estadosCidades.getEstadosRegiao(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "Nenhum estado foi encontrado."})
    }
})

//Retorna os estados que são da capital do Brasil 
app.get('/v1/senai/estados/capital/pais/brasil', function(request, response){
    let estado = estadosCidades.getCapitalPais()
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "Nenhum estado foi encontrado."})
    }
})

//Retorna as cidades de cada estado 
app.get('/v1/senai/cidades/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getCidades(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "Nenhum estado foi encontrado."})
    }
})

app.get('/v1/senai/help', function(request, response){
    let docAPI = {
        "api-description": "API para manipular dados de estados e cidades",
        "date": "2026/04/02",
        "development": "Fernando de Sá",
        "version": 1.0,
        "endpoints": [
            {   "rota1": "/v1/senai/estados",
                "description": "Retorna toda a lista de estados"
            },
            {
                "rota2": "/v1/senai/dados/estado/:uf",
                "description": "Retorna dados de um estado filtrando pela sigla"
            },
            {
                "rota3": "/v1/senai/capital/estado/:uf",
                "description": "Retorna dados da capital de um estado filtrando pela sigla"
            },
            {
                "rota4": "/v1/senai/estados/regiao/:regiao",
                "description": "Retorna estados filtrando pela região"
            },
            {
                "rota5": "/v1/senai/estados/capital/pais/brasil",
                "description": "Retorna estados que foram capitais do Brasil"
            },
            {
                "rota6": "/v1/senai/cidades/estado/:uf",
                "description": "Retorna as cidades filtrando pela sigla do estado"
            }
        ]
    }
    response.status(200)
    response.json(docAPI)
})

//Fazer o Start na API (aguardando as requisições)
app.listen(8080, function(){
    console.log('API aguardando requisições ...')
})