const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors'); 
            
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    function computerPlay() {
        let selection = ['rock', 'paper', 'scissors'];
        let computerSelection = selection[Math.floor(Math.random() * selection.length)];
        return computerSelection;
    }
    const computerSelection = computerPlay();
    console.log(computerSelection)
            
    if (playerSelection == rock && computerSelection == 'scissors' ||
    playerSelection == paper && computerSelection == 'rock' ||
    playerSelection == scissors && computerSelection == 'paper') {
        playerScore += 1;
        return 'player wins';
    } else if (playerSelection == rock && computerSelection == 'rock' ||
    playerSelection == paper && computerSelection == 'paper' ||
    playerSelection == scissors && computerSelection == 'scissors') {
        return 'tie!';
    } else {
        computerScore += 1;
        return 'computer wins';
    };
};
const container = document.querySelector('#container');
const resultOutput = document.createElement('div');
const scoreOutputPlayer = document.createElement('div');
const scoreOutputComp = document.createElement('div')

container.appendChild(resultOutput);
container.appendChild(scoreOutputPlayer);
container.appendChild(scoreOutputComp);

function endGame() {
    if (playerScore === 5) {
        alert("GAME OVER, YOU BEAT THE COMPUTER!!");
        rock.removeEventListener('click', playRock);
        paper.removeEventListener('click', playPaper);
        scissors.removeEventListener('click', playScissors);
    } else if (computerScore === 5) {
        alert("GAME OVER, COMPUTER BEAT YOU!!");
        rock.removeEventListener('click', playRock);
        paper.removeEventListener('click', playPaper);
        scissors.removeEventListener('click', playScissors);
    }
}

function playRock() {
    resultOutput.textContent = `${playRound(rock)}`
    scoreOutputPlayer.textContent = `${playerScore}`
    scoreOutputComp.textContent = `${computerScore}`
    endGame();
}

function playPaper() {
    resultOutput.textContent = `${playRound(paper)}`
    scoreOutputPlayer.textContent = `${playerScore}`
    scoreOutputComp.textContent = `${computerScore}`
    endGame();
}

function playScissors() {
    resultOutput.textContent = `${playRound(scissors)}`;
    scoreOutputPlayer.textContent = `${playerScore}`;
    scoreOutputComp.textContent = `${computerScore}`;
    endGame()
}

rock.addEventListener('click', playRock)
paper.addEventListener('click', playPaper)
scissors.addEventListener('click', playScissors)


    