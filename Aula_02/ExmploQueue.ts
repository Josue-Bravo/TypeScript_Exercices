import leia = require("readline-sync")
import Queue = require("./Queue");

const fila = new Queue<string>()

fila.enqueue("Pedro")
fila.enqueue("Bulma")
fila.enqueue("Guila")
fila.enqueue("Andy")

fila.dequeue()

console.log(fila.peek())

fila.clear()

console.log(fila.peek())
