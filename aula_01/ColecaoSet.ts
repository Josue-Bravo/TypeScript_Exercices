import leia = require("readline-sync");

const cores: Set<string> = new Set<string>();

cores.add("Azul")
cores.add("Vermelho")
cores.add("Azul")
cores.add("Verde")
cores.add("Amarelo")

console.table(cores)

cores.delete("Azul")

console.table(cores)

