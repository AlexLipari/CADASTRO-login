var nomes = []
var senhas = []
var contador = 0
var continuar =1
while (continuar == 1) {
    nomes[contador] = prompt("insira um nome:")
    senhas[contador] = prompt("insira uma senha:")
    contador++
    continuar = parseInt(prompt("Deseja continuar? (1) SIM (2) NÃO"))
}
continuar=1
console.log(nomes)
console.log(senhas)

