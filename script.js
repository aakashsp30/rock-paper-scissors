let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultsDiv = document.querySelector("#results");
const humanScoreSpan = document.querySelector("#humanScore");
const computerScoreSpan = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#resetBtn");

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

function getEmoji(choice){
    if (choice === "rock") return "🪨";
    if (choice === "paper") return "📄";
    if (choice === "scissors") return "✂️";
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();

    resultsDiv.innerHTML = '';

    const humanChoiceDiv = document.createElement("div");
    humanChoiceDiv.className = "choice-display";
    humanChoiceDiv.textContent = `You chose: ${getEmoji(humanChoice)} ${humanChoice}`;
    resultsDiv.appendChild(humanChoiceDiv);

    const computerChoiceDiv = document.createElement("div");
    computerChoiceDiv.className = "choice-display";
    computerChoiceDiv.textContent = `Computer chose: ${getEmoji(computerChoice)} ${computerChoice}`;
    resultsDiv.appendChild(computerChoiceDiv);

    const resultP = document.createElement("p");

    if(humanChoice === computerChoice){
        resultP.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultP.textContent = `You win this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
        resultP.style.color = 'green';
        resultP.style.fontWeight = 'bold';
        humanScore++;
    } else {
        resultP.textContent = `You lose this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;
        resultP.style.color = 'red';
        resultP.style.fontWeight = 'bold';
        computerScore++;
    }

    resultsDiv.appendChild(resultP);
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    checkGameWinner();

}

function checkGameWinner(){
    if(humanScore === 5) {
        const winnerDiv = document.createElement("div");
        winnerDiv.className = "winner-announcement";
        winnerDiv.textContent = "🎉 CONGRATULATIONS! YOU WON THE GAME! 🎉"
        resultsDiv.appendChild(winnerDiv);
        disableButtons();
        resetBtn.style.display = "inline-block";
    } else if (computerScore === 5) {
        const loserDiv = document.createElement("div");
        loserDiv.className = "loser-announcement";
        loserDiv.textContent = "💻 COMPUTER WINS THE GAME! 💻";
        resultsDiv.appendChild(loserDiv);
        disableButtons();
        resetBtn.style.display = 'inline-block';
    }
}

function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';

    resultsDiv.innerHTML = '';
    const initialP = document.createElement('p');
    initialP.textContent = 'Choose your weapon to start the game!';
    resultsDiv.appendChild(initialP);
    
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    resetBtn.style.display = 'none';
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
resetBtn.addEventListener("click", resetGame);