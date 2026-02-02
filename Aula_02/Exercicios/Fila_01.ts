import leia from "readline-sync";
import { Queue } from "../Queue";

const fila: Queue<string> = new Queue<string>()
const optionLimit: Array<string> = new Array<string>("0","1","2","3")

let continuar: boolean = true

while (continuar) {
    console.log("\n*******************************************************\n")
    console.log("\t1 - Adicionar Cliente na Fila")
    console.log("\t2 - Listar todos os Clientes")
    console.log("\t3 - Retirar Cliente da Fila")
    console.log("\t0 - Sair")
    console.log("\n*******************************************************")

    let opcao = leia.keyIn("Entre com a opcao desejada: ", {limit: optionLimit, limitMessage: "Opcao invalida."})

    switch (parseInt(opcao)) {
        case 0:
            continuar = false
        break
        case 1:
            let nome = leia.question("Escreva o nome do cliente: ")
            fila.enqueue(nome)
            console.log("Cliente adicionado.")
            console.log("Fila atual:")
            fila.printQueue()
        break
        case 2:
            console.log("Fila atual:")
            fila.printQueue()
            if (fila.isEmpty()){
                console.log("A fila está vazia.")
            }
        break
        case 3:
            if (fila.isEmpty()){
                console.log("A fila está vazia.")
            } else {
            console.log(`Cliente ${fila.peek()} retirado da fila.`)
            fila.dequeue()
            console.log("Fila atual:")
            fila.printQueue()
            }
        break
    }

}
console.log("Saindo...")