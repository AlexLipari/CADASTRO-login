var nomes = []
var senhas = []
var nomesAux = []
var senhasAux = []
var contador = 0
var opcao = 0
var nomeLogin
var senhaLogin
var loginValido = false
var continuar = 1, continuarTotal = 1
var nomeDeletar
var nomeInvalido = true
while (continuarTotal == 1) {
    opcao = prompt("O que deseja? (1) Cadastrar (2) Login (3) Excluir (4) Finalizar")
    if (opcao == 1) {
        while (continuar == 1) {
            nomes[contador] = prompt("insira um nome:")
            senhas[contador] = prompt("insira uma senha:")
            contador++
            console.log(nomes)
            console.log(senhas)
            continuar = parseInt(prompt("Deseja continuar? (1) SIM (2) NÃO"))
        }
        continuar = 1
    } else if (opcao == 2) {
        nomeLogin = promp("nome login:")
        senhaLogin = prompt("senha login")
        loginValido = false
        for (var i = 0; i < contador; i++) {
            if (nomeLogin == nomes[i] && senhaLogin == senhas[i]) {
                loginValido = true
                console.log("login realizado com sucesso!")
            }
        }
        if (!loginValido) {
            console.log("nome ou senha incorretos")
        }
        console.log("Login feito")
    } else if (opcao == 3) {
        nomeDeletar = prompt("digite o nome que deseja excluir:")
        nomeInvalido = true
        for (var i = 0; i < contador; i++) {
            if (nomeDeletar == nomes[i]) {
                nomes[i] = 0
                senhas[i] = 0
                nomeInvalido = false
                console.log("cadastro excluido com sucesso")
            }
        }
        for (var atual = 0; atual - 1; atual++) {
            for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
                if (nomes[atual] == 0) {
                    nomes[atual] = nomes[seguinte]
                    senhas[atual] = senhas[seguinte]
                    nomes[seguinte] = 0
                    senhas[seguinte] = 0
                }

            }
        }
        for (var i = 0; i < contador; i++) {
            if (nomes[i] != 0) {
                nomesAux[i] = nomes[i]
                senhasAux[i] = senhas[i]
            }
        }
        if (nomeInvalido) {
            console.log("Não achamos cadastro com esse nome!")
        }
        nomes = nomesAux
        senhas = senhasAux
        nomesAux = []
        senhasAux = []
        contador--
        console.log(nomes)
        console.log(senhas)

    } else {
        continuarTotal = 3
    }
}

console.log(nomes)
console.log(senhas)

