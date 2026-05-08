//Import das dependecias para criar a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Permitindo a utilização do body das requisições
const bodyParserJSON = bodyParser.json()

//Criando um objeto do express para criar a API
const app = express()

//Configuração dos CORS da API
const corsOptions = {
    origin: ['*'],  //Configuração de origem da requisição (IP ou Dominio)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //Configuração dos verbos que serão utilizados na API
    allowedHeaders: ['Content-type', 'Authorization'] //Configurações de permissões
                      //Tipo de dados  //Autorização de acesso
}

//Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOptions))

//Import da controller do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//ENDPOINTS
app.post('/v1/senai/locadora/filmes', bodyParserJSON, async function(request, response){
    //Recebendo o body da requisição
    let dados = request.body

    //Recebendo os tipos de dados da requisição para validar se é JSON 
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filmes', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filmes/:id', async function(request, response){
    let id = request.params.id
    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})


app.put('/v1/senai/locadora/filmes/:id', bodyParserJSON, async function(request, response){
    //Requisição para validar se é um JSON
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado 
    let id = request.params.id
    //Recebe os dados do Body, que serão modificados no banco de dados
    let dados = request.body 

    //Chama a função para atualizar o filme, devemos encaminhar as 3 variáveis na mesma sequência
    //que a função foi criada na controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/senai/locadora/filme/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
})
//Fazer o Start na API (aguardando as requisições)
app.listen(8080, function(){
    console.log('API aguardando requisições ...')
})