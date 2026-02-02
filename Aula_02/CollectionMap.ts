import leia = require("readline-sync")

const participantes: Map<number, string> = new Map<number, string>()

participantes.set(1,"Pedro");
participantes.set(2,"Breno");
participantes.set(3,"Juah");
participantes.set(4,"Luca");

for(let [matricula, nome] of participantes){
    console.log(`Matrícula: ${matricula} - Nome: ${nome}`)
}


