const humanScoreElement = document.querySelector(".play-score");
const computerScoreElement = document.querySelector(".computer-score");
const roundScoreElement = document.querySelector(".rounds");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors=btn");

let playerScore = 0;
let computerScore = 0;
let round = 0;



const getComputerChoice = () => {
    const choices = ["Rock","Paper","Scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
const getHumanChoice = (button) => {
    return button 
}

rockBtn.addEventListener("click", () => {
    playRound("Rock")
})

paperBtn.addEventListener("click", () => {
    playRound("Paper")
})

scissorsBtn.addEventListener("click", () => {
    playRound("Scissors")
})

const playRound = (button) => {
    const computerSelection = getComputerChoice();
    const playerSelection = getHumanChoice(button)
    if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++
        round++
        console.log("You win", playerScore)
    }else if(button === computerSelection){
        round++
        console.log("It's a tie", playerScore)
    }else{
        computerScore++
        round++
        console.log("You loss", computerScore)
    }
    console.log(round)
}
