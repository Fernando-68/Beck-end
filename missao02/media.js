/**************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 25/02/2026
 * Autor: Fernando de Sá
 * Versão: 1.0
 **************************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Função para validar campo vazio
function validarCampo(valor) {
    return valor.trim() === ""
}

// Função para validar nota
function validarNota(nota) {
    return isNaN(nota) || nota < 0 || nota > 100
}

// Entrada de dados
entradaDeDados.question("Digite o nome do aluno: ", function(nomeAluno){

    entradaDeDados.question("Digite o sexo do aluno (M/F): ", function(sexoAluno){

        entradaDeDados.question("Digite o nome do professor: ", function(nomeProfessor){

            entradaDeDados.question("Digite o sexo do professor (M/F): ", function(sexoProfessor){

                entradaDeDados.question("Digite o nome do curso: ", function(nomeCurso){

                    entradaDeDados.question("Digite o nome da disciplina: ", function(nomeDisciplina){

                        entradaDeDados.question("Digite a nota 1: ", function(n1){
                        entradaDeDados.question("Digite a nota 2: ", function(n2){
                        entradaDeDados.question("Digite a nota 3: ", function(n3){
                        entradaDeDados.question("Digite a nota 4: ", function(n4){

                            // Validação campos vazios
                            if (
                                validarCampo(nomeAluno) ||
                                validarCampo(sexoAluno) ||
                                validarCampo(nomeProfessor) ||
                                validarCampo(sexoProfessor) ||
                                validarCampo(nomeCurso) ||
                                validarCampo(nomeDisciplina) ||
                                validarCampo(n1) ||
                                validarCampo(n2) ||
                                validarCampo(n3) ||
                                validarCampo(n4)
                            ) {
                                console.log("ERRO: Nenhum campo pode ficar vazio!")
                                entradaDeDados.close()
                                return
                            }

                            let nota1 = Number(n1)
                            let nota2 = Number(n2)
                            let nota3 = Number(n3)
                            let nota4 = Number(n4)

                            // Validação notas
                            if (
                                validarNota(nota1) ||
                                validarNota(nota2) ||
                                validarNota(nota3) ||
                                validarNota(nota4)
                            ) {
                                console.log("ERRO: As notas devem estar entre 0 e 100!")
                                entradaDeDados.close()
                                return
                            }

                            let media = (nota1 + nota2 + nota3 + nota4) / 4
                            let status = ""
                            let notaExame = ""
                            let mediaFinalExame = ""

                            // Ajuste de palavras conforme sexo
                            let alunoTexto = sexoAluno.toUpperCase() === "F" ? "A aluna" : "O aluno"
                            let professorTexto = sexoProfessor.toUpperCase() === "F" ? "Professora" : "Professor"

                            if (media >= 70) {
                                status = "aprovado"
                            } 
                            else if (media < 50) {
                                status = "reprovado"
                            } 
                            else {

                                // EXAME
                                entradaDeDados.question("Digite a nota do exame: ", function(nEx){

                                    if (validarCampo(nEx)) {
                                        console.log("ERRO: Nota do exame não pode ser vazia!")
                                        entradaDeDados.close()
                                        return
                                    }

                                    notaExame = Number(nEx)

                                    if (validarNota(notaExame)) {
                                        console.log("ERRO: Nota do exame deve estar entre 0 e 100!")
                                        entradaDeDados.close()
                                        return
                                    }

                                    mediaFinalExame = (media + notaExame) / 2

                                    if (mediaFinalExame >= 60) {
                                        status = "aprovado no exame"
                                    } else {
                                        status = "reprovado no exame"
                                    }

                                    console.log("\n===== RELATÓRIO FINAL =====\n")
                                    console.log(`${alunoTexto} ${nomeAluno} foi ${status} na disciplina ${nomeDisciplina}.`)
                                    console.log(`Curso: ${nomeCurso}`)
                                    console.log(`${professorTexto}: ${nomeProfessor}`)
                                    console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`)
                                    console.log(`Média Final: ${media.toFixed(1)}`)
                                    console.log(`Média Final do Exame: ${mediaFinalExame.toFixed(1)}`)

                                    entradaDeDados.close()
                                })

                                return
                            }

                            // Relatório sem exame
                            console.log("\n===== RELATÓRIO FINAL =====\n")
                            console.log(`${alunoTexto} ${nomeAluno} foi ${status} na disciplina ${nomeDisciplina}.`)
                            console.log(`Curso: ${nomeCurso}`)
                            console.log(`${professorTexto}: ${nomeProfessor}`)
                            console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
                            console.log(`Média Final: ${media.toFixed(1)}`)
                            console.log(`Média Final do Exame: Não houve exame`)

                            entradaDeDados.close()

                        })
                        })
                        })
                        })

                    })

                })

            })

        })

    })

})