const humanScoreElement = document.querySelector(".play-score");
const computerScoreElement = document.querySelector(".computer-score");
const roundScoreElement = document.querySelector(".rounds");
const displayElement = document.querySelector(".display")

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

 const reset = () => {
    playerScore = 0;
    computerScore = 0;
    round = 0
 }
const playRound = (button) => {
    const computerSelection = getComputerChoice();
    const playerSelection = getHumanChoice(button)
    if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++
        round++
        displayElement.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}`
    }else if(button === computerSelection){
        round++
        displayElement.textContent = `It's a tie Player's Option: ${playerSelection} - Conputer's Option${computerSelection}`
    }else{
        computerScore++
        round++
        displayElement.textContent = `You loss! ${computerSelection} beats ${playerSelection}`
    }
    humanScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundScoreElement.textContent = round;
    if(playerScore === 5 || computerScore === 5 || round === 5){
        if(playerScore > computerScore){
            displayElement.textContent = `Player wins ${playerScore}`
            reset()
        }else if(playerScore === computerScore){
            displayElement.textContent = `its a tie ${playerScore} : ${computerScore}`
            reset()

        }else{
            displayElement.textContent= `Computer wins ${computerScore}`
            reset()
        }
    }

}
