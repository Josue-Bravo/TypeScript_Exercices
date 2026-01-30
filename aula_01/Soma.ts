import leia = require("readline-sync");

let numero1: number, numero2: number; 

numero1 =  leia.questionInt("Digite o primeiro numero: ") 
numero2 = leia.questionInt("Digite o segundo numero: ")

let soma = numero1 + numero2

console.log(`${numero1} + ${numero2} = ${soma} `)