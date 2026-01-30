import leia = require("readline-sync");

let numeros: Array<number> = new Array<number>();

numeros = [2,5,1,3,4,9,7,8,10,6]

console.log("Existem Alguns números em um Array neste programa.")
let numero = leia.questionInt("Digite o numero que deseja encontrar.",{limitMessage: "Isso nao e um numero"})

numeros.includes(numero) ? console.log(`O número ${numero} está na posição: ${numeros.indexOf(numero)}`) : console.log(`O número ${numero} não foi encontrado`)