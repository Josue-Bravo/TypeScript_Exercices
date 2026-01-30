import leia = require("readline-sync");

let cores: Array<string> = new Array<string>();
let continuar: boolean = true
let cor: string

console.log("Bem vindo ao programa Guardar Cores")
while(continuar){
    cor = leia.question("Escreva a cor que deseja adicionar.\nEscreva 'sair' para fechar o programa: ")
    cor.toLowerCase() === "sair" ? continuar = false: cores.push(cor)
    console.clear()
}

console.log("Cores Adicionadas:")
console.table(cores)

console.log("\nCores Ordenadas em ordem Alfabética:")
console.table(cores.sort())





