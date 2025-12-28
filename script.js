function getComputerChoice(){
    const r = Math.floor(Math.random() * 3);
    if(r === 0){
        return "rock";
    } else if(r === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    const ch = prompt("Rock, Paper or Scissors?");
    return ch;
}

function playGame(){

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if(normalizedHumanChoice===computerChoice){
        console.log("It's a tie!")
    } else {
        if(normalizedHumanChoice==="rock"){
            if(computerChoice==="scissors"){
                console.log("You Win! Rock beats Scissors.")
                humanScore++;
            } else if (computerChoice==="paper"){
                console.log("You lose! Paper beats Rock.")
                computerScore++;
            }
        } else if(normalizedHumanChoice==="paper"){
            if(computerChoice==="rock"){
                console.log("You Win! Paper beats Rock.")
                humanScore++;
            } else if(computerChoice==="scissors"){
                console.log("You lose! Scissors beats Paper.")
                computerScore++;
            }
        } else{
            if(computerChoice=="paper"){
                console.log("You Win! Scissors beats Paper.");
                humanScore++;
            } else if(computerChoice==="rock"){
                console.log("You lose! Rock beats Scissors.")
                computerScore++;
            }
        }
    }
}

for(let i=0; i<5; i++){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log("C: " + computerChoice)
    console.log("H: " + humanChoice);
    playRound(humanChoice, computerChoice);
    console.log("HumanScore: " + humanScore);
    console.log("ComputerScore: " + computerScore);
    }

    console.log("FinalHumanScore: " + humanScore);
    console.log("FinalComputerScore: " + computerScore);

    if(humanScore > computerScore){
        console.log("Congratulations! You won the game!");
    } else if(computerScore > humanScore){
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();