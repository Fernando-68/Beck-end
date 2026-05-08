/**********************************************************************************************************************
 * Objetivo: Criar uma API para o "Projeto Whatsapp" que será integrado ao Front-end futuramente.
 * Autor: Fernando de Sá
 * Data: 08/04/2026
 * versão: 1.0
 **********************************************************************************************************************/

//Dependências da API
const express = require('express')
const cors = require('cors')

//Criação do objeto express para a API
const app = express()

//Configuração do CORS
const corsOption = {
    origin: ["*"], //Configuração de origem de requisição (IP ou Domínio)
    methods: ["GET"], //Configuração de verbos que serão utilizados na API
    allowedHeaders: ["Content-type", "Authorization"] //Configuração de permissões
}

//Aplica as configurações do CORS no app
app.use(cors(corsOption))

//Import das funções 
const whatsappApi = require('./modulo/funcoes.js')

//Criação dos Endpoints

//1 - Listar os Usuários
app.get("/v1/senai/usuarios", function(request, response){
    let dados = whatsappApi.getListaUsuarios()
    response.status(200)
    response.json(dados)
})

//2 - Perfil de Usuários por ID
app.get("/v1/senai/usuarios/perfil/:id", function(request, response){
    let id = request.params.id
    let dados = whatsappApi.getPerfilUsuario(id)
    
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({"message": "Nenhum perfil foi encontrado "})
    }
})

//3 - Contatos dos Usuários
app.get("/v1/senai/usuarios/contatos/:id", function(request, response){
    let id = request.params.id
    let dados = whatsappApi.getContatosUsuario(id)
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({"message": "Contatos não encontrados"})
    }
})

//4 - Mensagens recebidas pelos Usuários
app.get("/v1/senai/usuarios/mensagens/:id", function(request, response){
    let id = request.params.id
    let dados = whatsappApi.getMensagensUsuario(id)
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({"message": "As mensagens não foram encontradas"})
    }
})

//5 - Conversas de cada Usuário por ID
app.get("/v1/senai/usuarios/conversas", function(request, response){
    let userId = request.query.userId
    let nomeContato = request.query.nomeContato

    let dados = whatsappApi.getConversa(userId, nomeContato)
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({"message": "Conversa não encontrada"})
    }
})

//6 - Busca de conversa por PALAVRA-CHAVE
app.get("/v1/senai/usuarios/busca", function(request, response){
    let userId = request.query.userId
    let nomeContato = request.query.nomeContato
    let palavra = request.query.palavra

    let dados = whatsappApi.getBuscaMensagem(userId, nomeContato, palavra)
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({"message": "Nenhuma mensagem encontrada"})
    }
})

//7 - Documentação para apoio ao Front-end
app.get('/v1/senai/help', function(request, response){
    let docAPI = {
        "api-description": "API para manipular dados e conversas",
        "date": "2026/04/13",
        "development": "Fernando de Sá",
        "version": 1.0,
        "endpoints": [
            {   "rota1": "/v1/senai/usuarios",
                "description": "Retorna toda a lista de todos os usuários"
            },
            {
                "rota2": "/v1/senai/usuarios/perfil/:id",
                "description": "Retorna dados do perfil do Usuário usando o ID"
            },
            {
                "rota3": "/v1/senai/usuarios/contatos/:id",
                "description": "Retorna dados dos contatos do Usuário usando o ID"
            },
            {
                "rota4": "/v1/senai/usuarios/mensagens/:id",
                "description": "Retorna as mensagens do Usuário usando o ID"
            },
            {
                "rota5": "/v1/senai/usuarios/conversas",
                "description": "Retorna as conversas do Usuário via query"
            },
            {
                "rota6": "/v1/senai/usuarios/busca",
                "description": "Retorna uma conversa filtrando por uma palavra-chave"
            }
        ]
    }
    response.status(200)
    response.json(docAPI)
})

//Start da API  (aguardando requisições)
app.listen(8080, function(){
    console.log('API aguardando requisições...')
})

