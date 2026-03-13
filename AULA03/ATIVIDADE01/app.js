/**************************************************************** 
 * Missão: Desenvolver uma aplicação para a empresa Viva Moda
 * Autor: Fernando de Sá Souza
 * Turma: DS2T
 * Data: 04/02/2026
 * *************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function (nome) {

    if (nome == '' || !isNaN(nome)) {
        console.log('Somente letras podem ser digitadas neste campo!')
    } else {
        let nomeCliente = nome

        entradaDeDados.question('Produto a ser comprado: ', function (produto) {

            if (produto == '' || !isNaN(produto)) {
                console.log('Somente letras podem ser digitadas neste campo!')
            } else {
                let nomeProduto = produto

                entradaDeDados.question('Insira o valor da compra: $', function (compra) {

                    if (compra == '' || isNaN(compra)) {
                        console.log('Somente números podem ser digitados neste campo!')
                    } else {
                        let valorCompra = Number(compra)
    
                        entradaDeDados.question('Insira a taxa de juros: ', function (juros) {
    
                            if (juros == '' || isNaN(juros)) {
                                console.log('Somente números podem ser digitados neste campo')
                            } else {
                                let valorJuros = Number(juros) / 100
    
                                entradaDeDados.question('\nInsira a forma que deseja parcelar:  \n[1] Mês(s) \n[2] Ano(s) \nDigite 1 ou 2: ', function (parcelamento) {
    
                                    if (parcelamento > 2 || parcelamento < 1) {
                                        console.log('Inválido')
                                    } else {
                                        let formaParcelamento = Number(parcelamento)
    
                                        entradaDeDados.question('Digite a quantidade de parcelas: ', function (parcelas) {
    
                                            if (parcelas == '' || isNaN(parcelas)) {
                                                console.log('Somente números podem ser digitados neste campo!')
                                            } else {
                                                let vezesParceladas = Number(parcelas)
    
                                                if (formaParcelamento == 2) {
                                                    vezesParceladas = vezesParceladas * 12
                                                }
    
                                                let montante = (valorCompra * (1 + valorJuros) ** vezesParceladas).toFixed(2)
    
                                                let diferenca = (montante - valorCompra).toFixed(2)
    
                                                console.log('\n********************* Viva Moda **************************')
                                                console.log(`Muito obrigado por realizar sua compra conosco, Sr(a) ${nomeCliente}.`)
                                                console.log(`A compra do produto ${nomeProduto} tem um valor de R$ ${valorCompra}.`)
                                                console.log(`A sua compra será parcelada em ${vezesParceladas} vezes e deverá ser pago R$ ${montante} pelos ${juros}% de juros.`)
                                                console.log(`O acréscimo realizado ao valor ${valorCompra} será de ${diferenca}.`)
                                                console.log('\nMuito obrigado por escolher a Viva Moda.')
                                                console.log('\n************************************************')
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})