import leia = require("readline-sync");

let setcollection: Set<number> = new Set<number>();
let continuar = true
let num: number

console.log("Bem vindo ao programa de coleção Set\n")
console.log("AVISO! O programa NÃO aceita numeros repetidos\n")
console.log("Digite 0 para sair do programa.\n")


while(continuar){
    num = leia.questionInt("Digite um numero para adicionar: ")
    num === 0 ? continuar = false : setcollection.add(num)
    console.clear()
}

console.log("Lista dos dados do set:\n")
console.table(setcollection)