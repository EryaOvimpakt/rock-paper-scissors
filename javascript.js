function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber <= 0.33) {return "ROCK"}
    else if (randomNumber > 0.66) {return "PAPER"}
    else {return "SCISSORS"}
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, scissors!").toUpperCase()
    if (humanChoice == "ROCK"
        || humanChoice == "PAPER"
        || humanChoice == "SCISSORS") {return humanChoice }
    else {return getHumanChoice()
    }
}

let humanScore = 0;
let computerScore = 0;