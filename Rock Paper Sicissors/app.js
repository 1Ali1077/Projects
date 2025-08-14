console.log("HI")
// 1 player will choose an rps  2 random number every time the player turn, take the number and turn it into rps done



function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber > 0.6) {
        console.log("Bot: rock");

    }
    else if (randomNumber < 0.4) {
        console.log("Bot: paper");
    }
    else {
        console.log("Bot: scissors");
    }
}

function getHumanChoice() {
    playerChoice = prompt("Rock Papers scissors");
    if (playerChoice === "Rock"){
        console.log("Player: Rock");
    }
    else if(playerChoice === "Paper"){
        console.log("Player: Paper");
    }
    else if(playerChoice === "scissors"){
        console.log("Player: scissors");
    }
    getComputerChoice();
    console.log(randomNumber)
}
getHumanChoice();