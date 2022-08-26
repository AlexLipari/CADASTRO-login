var nomes = []
var senhas = []
var contador = 0
var opcao = 0
var nomeLogin
var senhaLogin
var loginValido = false
var continuar = 1, continuarTotal = true
while (continuarTotal == 1) {
    opcao = prompt("O que deseja? (1) Cadastrar (2) Login (3) Finalizar")
    if (opcao == 1) {
        while (continuar == 1) {
            nomes[contador] = prompt("insira um nome:")
            senhas[contador] = prompt("insira uma senha:")
            contador++
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
    } else {
        continuarTotal = false
    }
}

console.log(nomes)
console.log(senhas)

