import leia = require("readline-sync");

let setcollection: Set<number> = new Set<number>();
let continuar = true;
let num: number;

console.log("Bem vindo ao programa de coleção Set\n");

while(continuar){
    num = leia.questionInt("Digite um numero para adicionar: ");
    num === 0 ? continuar = false : setcollection.add(num);
    console.clear();
}

// O SEGREDO ESTÁ AQUI: Converter apenas quando terminar de ler os dados
let ordenado = Array.from(setcollection); 

console.log("Lista dos dados do set (ordenados):\n");
console.table(ordenado.sort((a, b) => a - b));
