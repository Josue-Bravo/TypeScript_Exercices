import leia = require("readline-sync")
import Stack = require("./Stack");

const fila = new Stack<string>()



fila.push("Pedro")
fila.push("Bulma")
fila.push("Guila")
fila.push("Andy")

fila.pop()

console.log(fila.peek())

fila.clear()

console.log(fila.peek())
