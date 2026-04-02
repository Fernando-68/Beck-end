/***********************************************************************
* Autor: Fernando de Sá Souza
* Objetivo: Criar um sistema que gerencie números pares e ímpares
* Data: 27/02/2026
***********************************************************************/

const informacoesDeEstados = require("./arquivo.js");

const localizarEstados = informacoesDeEstados.listaDeEstados.estados

const getListaEstados = function(){
    let uf = []
    let quantidade
    let lista

    localizarEstados.forEach(function(sigla){
        uf.push(sigla.sigla)
    })

    quantidade = uf.length
    lista = {uf, quantidade}

    return lista
}

const getDadosEstado = function (siglaEstado){
    let sigla = String(siglaEstado).toUpperCase()
    let dadosEstados = false

    for (let estado of localizarEstados){
        if(estado.sigla == sigla){
            dadosEstados = {
                "uf": estado.sigla,
                "descricao": estado.nome,
                "capital": estado.capital,
                "regiao": estado.regiao
            }
        }
    }

    return dadosEstados
}

const getCapitalEstados = function(siglaEtado){
    let sigla = String(siglaEtado).toUpperCase()
    let dadosEstado = false

    localizarEstados.forEach(function(estado){
        if(estado.sigla == sigla) {
            dadosEstado = {
                "uf": estado.sigla, "descricao": estado.nome, "capital": estado.capital
            }
        }
    })

    return dadosEstado
}

const getEstadosRegiao = function(regiaoEscolhida){
    let regiao = String(regiaoEscolhida).toUpperCase()
    let dadosRegiao = {
        "regiao": regiaoEscolhida.toUpperCase(),
        "estados": []
    }

    for(let estado of localizarEstados){
        if(regiao == String(estado.regiao).toUpperCase()){
            dadosRegiao.estados.push({
                "uf": estado.sigla, "descricao": estado.nome
            })
        }
    }

    if(dadosRegiao.estados.length === 0){
        return false
    }

    return dadosRegiao
}

const getCapitalPais = function(){
    let capitaisPais = {
        "capitais": []
    }

        localizarEstados.forEach(function(pegarCapitais){
            if(pegarCapitais.capital_pais){
                capitaisPais.capitais.push({
                    "capital_atual": pegarCapitais.capital_pais.capital,
                    "uf": pegarCapitais.sigla,
                    "descricao": pegarCapitais.nome,
                    "capital": pegarCapitais.capital,
                    "regiao": pegarCapitais.regiao,
                    "capital_pais_ano_inicio": pegarCapitais.capital_pais.ano_inicio,
                    "pais_capital_ano_termino": pegarCapitais.capital_pais.ano_fim
                })
            }
        })

        return capitaisPais
}

const getCidades = function(cidadesSigla){
    let siglaInf = String(cidadesSigla).toUpperCase()
    let infoCidades
    let cidades = []

    for(let sigla of localizarEstados){
        if(siglaInf == String(sigla.sigla).toUpperCase()){
            sigla.cidades.forEach(function(todasAsCidades){
                cidades.push(todasAsCidades.nome)

                infoCidades = {
                    "uf": sigla.sigla,
                    "descricao": sigla.nome,
                    "quantidade_cidades": sigla.cidades.length,
                    "ciades": cidades
                }
            })
        }
    }
    if(cidades.lenghth === 0){
        return false
    }

    return infoCidades
}
console.log(getListaEstados())
console.log()
console.log(getDadosEstado('sp'))
console.log()
console.log(getCapitalEstados('mg'))
console.log()
console.log(getEstadosRegiao('nordeste'))
console.log()
console.log(getCapitalPais())
console.log()
console.log(getCidades('ac'))
