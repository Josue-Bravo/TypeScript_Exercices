import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

console.log("Existem alguns números em um Set neste programa.")
let numero = leia.questionInt("Digite o numero que deseja encontrar: ",{limitMessage: "Isso nao e um numero"})

numeros.has(numero) ? console.log(`O número ${numero} foi encontrado!`) : console.log(`O número ${numero} não foi encontrado`)