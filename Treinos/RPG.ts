import leia = require("readline-sync");

let força: number = 4, defesa: number = 5

let playerHP = 100, playerDMG = 1 * força
let defender = false
let monsterHP: number = Math.floor(Math.random() * (65 - 45 + 1) + 45)

while (playerHP > 0 && monsterHP > 0) {
    defender = false
    let danoRecebido: number = 0
    let monsterDMG: number = Math.floor(Math.random() * (4 - 2 + 1) + 2)

    console.log(`Vida do player: ${playerHP}`)
    console.log(`Vida do monstro: ${monsterHP}`)

    console.log("\n| 1- Atacar | 2- Defender |\n")

    let resposta = leia.questionInt(":")
    switch (resposta) {
        case 1:
            monsterHP -= playerDMG
            console.log(`Player causou ${playerDMG} de dano`)
            break
        case 2:
            defender = true
            break
    }

    if (monsterHP <= 0) {
        break
    } else {
        console.log("Turno do Player acabou")
        console.log("Começando turno do monstro")

        if (defender == true) {
            danoRecebido = monsterDMG - (monsterDMG * (defesa / 100))
            playerHP -= Math.max(0, danoRecebido)
        } else {
            danoRecebido = monsterDMG
            playerHP -= monsterDMG
        }

        console.log(`Monstro causou ${danoRecebido} de dano ao player`)
        console.log("Começando turno do player")
    }
}


if (monsterHP <= 0) {
    console.log("O monstro morreu!")
} else {
    console.log("O player morreu!")
}

console.log("\nFim de jogo")


