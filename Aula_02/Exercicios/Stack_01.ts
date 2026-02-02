import Stack = require("../Stack");
import leia = require("readline-sync")

const pilhadeLivros: Stack<string> = new Stack<string>()

const optionLimit: Array<string> = new Array<string>("0","1","2","3")

let continuar: boolean = true

while (continuar) {
    console.log("\n*******************************************************\n")
    console.log("\t1 - Adicionar Livros na pilha")
    console.log("\t2 - Listar todos os Livross")
    console.log("\t3 - Retirar Livros da pilha")
    console.log("\t0 - Sair")
    console.log("\n*******************************************************")

    let opcao = leia.keyIn("Entre com a opcao desejada: ", {limit: optionLimit, limitMessage: "Opcao invalida."})

    switch (parseInt(opcao)) {
        case 0:
            continuar = false
        break
        case 1:
            let nome = leia.question("Escreva o nome do Livro: ")
            pilhadeLivros.push(nome)
            console.log("Livro adicionado.")
            console.log("Pilha atual:")
            pilhadeLivros.printStack()
        break
        case 2:
            console.log("Pilha atual:")
            pilhadeLivros.printStack()
            if (pilhadeLivros.isEmpty()){
                console.log("A Pilha está vazia.")
            }
        break
        case 3:
            if (pilhadeLivros.isEmpty()){
                console.log("A Pilha está vazia.")
            } else {
            console.log(`Livros ${pilhadeLivros.peek()} retirado da pilha.`)
            pilhadeLivros.pop()
            console.log("Pilha atual:")
            pilhadeLivros.printStack()
            }
        break
    }

}
console.log("Saindo...")