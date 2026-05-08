const informacoesContatos = require("./contatos")

const listaUsuarios = informacoesContatos.contatos["whats-users"]


//Listagem de usuários
const getListaUsuarios = function(){
    let lista = []
    let quantidade

        listaUsuarios.forEach(function(user){
            lista.push(user)
        })

        quantidade = lista.length

        return {lista, quantidade}
}

//Dados de perfil
const getPerfilUsuario = function(idUsuario){
    let id = Number(idUsuario)
    let dadosPerfil = false

    for(let user of listaUsuarios){
        if(user.id == id){
            dadosPerfil = {
                "account": user.account,
                "nickname": user.nickname,
                "number": user.number,
                "profile_image": user["profile-image"],
                "background": user.background,
                "created_since": user["created-since"] 
            }
        }
    }

    return dadosPerfil
}

//Listar os contatos
const getContatosUsuario = function(idUsuario){
    let id = Number(idUsuario)
    let listaContatos = []
    let retorno

    listaUsuarios.forEach(function(user){
        if(user.id == id){
            user.contacts.forEach(function(contato){
                listaContatos.push({
                    "name": contato.name,
                    "description": contato.description,
                    "image": contato.image
                })
            })
        }
    })

    if(listaContatos.length === 0){
        return false
    }

    retorno = {
        "usuario": id,
        "quantidade": listaContatos.length,
        "contatos": listaContatos
    }
    return retorno
}

//Listagem de todas as mensagens trocadas com outro usuário
const getMensagensUsuario = function(idUsuario){
    let id = Number(idUsuario)
    let conversas = []

    for(let user of listaUsuarios){
        if(user.id == id){
            user.contacts.forEach(function(contato){
                conversas.push({
                    "contato": contato.name,
                    "mensagens": contato.messages
                })
            })
        }
    }

    if(conversas.length === 0){
        return false
    }

    return conversas
}

//Listar uma convesa de um usuário e o contato
const getConversa = function(userId, nomeContato){
    let id = Number(userId)
    let contatoNome = String(nomeContato)
    let resultado = false

    for(let user of listaUsuarios){
        if(user.id == id){
            user.contacts.forEach(function(contato){
                if(contato.name == contatoNome){
                    resultado = {
                        "usuario": user.account,
                        "numero": user.number,
                        "contato": contato.name,
                        "mensagens": contato.messages 
                    }
                }
            })
        }
    }
    return resultado
}

//Filtro de pesquisa por palavra chave
const getBuscaMensagem = function(userId, nomeContato, palavra){
    let id = Number(userId)
    let termo = String(palavra).toLowerCase()
    let resultado = []

    for(let user of listaUsuarios){
        if(user.id == id){
            user.contacts.forEach(function(contato){
                if(contato.name == nomeContato){
                    contato.messages.forEach(function(msg){
                        if(msg.content.toLowerCase().includes(termo)){
                            resultado.push(msg)
                        }
                    })
                }
            })
        }
    }

    if(resultado.length === 0){
        return false
    }

    return{
        "contato": nomeContato,
        "palavra": palavra,
        "mensagens": resultado
    }
}

console.log(getListaUsuarios())
console.log()
console.log(getPerfilUsuario(1))
console.log()
console.log(getContatosUsuario(1))
console.log()
console.log(getMensagensUsuario(1))
console.log()
console.log(getConversa(1, "Ana Maria"))
console.log()
console.log(getBuscaMensagem(1, "Ana Maria", "weekend"))


module.exports= {
    getListaUsuarios,
    getPerfilUsuario,
    getContatosUsuario,
    getMensagensUsuario,
    getConversa,
    getBuscaMensagem
}