/********************************************************************************************************************
 * Objetivo: Arquivo responsável SOMENTE pelo processamento de calculos matematicos (SOMAR, SUBTRAIR,
 * MULTIPLICAR E DIVIDIR)
 * Data:20/02/2026
 * Autor: Fernando de Sá 
 * Versão: 1.0
 ********************************************************************************************************************/

//toUpperCase -> devolve uma String em letras MAIUSCULAS
//toLowerCase -> devolve uma String em letrsa minusculas

const validarDados = function (numero1, numero2, operador){
    if(numero1 == '' || isNaN(numero1) || numero2 == '' || isNaN(numero2) || operador == ''){
        return false
    }else{
        return true
    }
}

// Exemplo de função anônima

// Função para calcular as 4 funções mamtemáticas

// Entrada de dados
const calcular = function(numero1, numero2, operador) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    console.log(operador)
    console.log(operadorMatematico)

    let resultado = false


    // Processamento
    //if(operadorMatematico == 'SOMAR'){
        //resultado = valor1 + valor2
    //}else if(operadorMatematico == 'SUBTRAIR'){
       // resultado = valor1 - valor2
   // }else if(operadorMatematico == 'MULTIPLICAR'){
        //resultado = valor1 * valor2
    //}else if(operadorMatematico == 'DIVIDIR'){
       // resultado = valor1 / valor2
    //}

    switch (operadorMatematico) {
        case 'SOMAR':
            resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR': 
            resultado = subtrair(valor1, valor2)
            break;
        case 'MULTIPLICAR' :
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR':
            resultado = dividir(valor1, valor2)
            break;         
    }
    

    // Saída
   
     return resultado

}

//Função baseada em formato de seta (ARROW FUNCTION)
const somar = (numero1, numero2) => Number(numero1) + Number(numero2)
   
const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)

const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)

const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)

module.exports ={
    calcular,
    somar, 
    subtrair, 
    multiplicar, 
    dividir
}
    


//if(result){
  //  console.log(result)
//}else{
  //  console.log('ERRO')
//}


