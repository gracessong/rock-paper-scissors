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
        return 'You win!';
    } else if (playerSelection == rock && computerSelection == 'rock' ||
    playerSelection == paper && computerSelection == 'paper' ||
    playerSelection == scissors && computerSelection == 'scissors') {
        return 'Tie! Keep playing.';
    } else {
        computerScore += 1;
        return 'Computer wins!';
    };
};
const container = document.querySelector('#container');

const resultOutput = document.createElement('div');
resultOutput.classList.add('result-output')

const scoreOutputPlayer = document.createElement('div');
scoreOutputPlayer.classList.add('score-output-player')

const scoreOutputComp = document.createElement('div')
scoreOutputComp.classList.add('score-output-computer')

container.appendChild(resultOutput);
container.appendChild(scoreOutputPlayer);
container.appendChild(scoreOutputComp);

function endGame() {
    if (playerScore === 5) {
        document.querySelector('#final-result').textContent = 'YOU BEAT THE COMPUTER! THE MANKIND THANKS YOU!';
        rock.removeEventListener('click', playRock);
        paper.removeEventListener('click', playPaper);
        scissors.removeEventListener('click', playScissors);
    } else if (computerScore === 5) {
        document.querySelector('#final-result').textContent = 'COMPUTER BEAT YOU! THE MANKIND IS DOOMED THANKS TO YOU!';
        rock.removeEventListener('click', playRock);
        paper.removeEventListener('click', playPaper);
        scissors.removeEventListener('click', playScissors);
    }
}

function playRock() {
    resultOutput.textContent = `${playRound(rock)}`
    scoreOutputPlayer.textContent = `😎  ${playerScore}:`
    scoreOutputComp.textContent = `${computerScore}  🖥`
    endGame();
}

function playPaper() {
    resultOutput.textContent = `${playRound(paper)}`
    scoreOutputPlayer.textContent = `😎  ${playerScore}:`
    scoreOutputComp.textContent = `${computerScore}  🖥`
    endGame();
}

function playScissors() {
    resultOutput.textContent = `${playRound(scissors)}`;
    scoreOutputPlayer.textContent = `😎  ${playerScore}:`
    scoreOutputComp.textContent = `${computerScore}  🖥`
    endGame()
}

rock.addEventListener('click', playRock)
paper.addEventListener('click', playPaper)
scissors.addEventListener('click', playScissors)

const header = document.querySelector('#header')

const headerDiv = document.createElement('div');
headerDiv.textContent = 'The Great Rock Paper Scissors Game';
headerDiv.style.cssText = 'font-size: 50px; color: white; font-family: roboto, tahoma, sans-serif; font-weight: 900';

const subheadDiv = document.createElement('div');
subheadDiv.setAttribute('style', 'white-space: pre;');
subheadDiv.classList.add('subhead');
subheadDiv.textContent = 'The AI has finally evolved to be self-aware and now has deemed the mankind to be unworthy of existing. \r\n You must now play against the computer to save mankind. \r\n Make your selection:'
subheadDiv.style.cssText = 'font-size: 15px; color: white; font-family: roboto, tahoma, sans-serif; font-weight: 700;'

header.appendChild(headerDiv)
header.appendChild(subheadDiv)

const scoreContainer = document.createElement('div');
scoreContainer.classList.add('score-container');

scoreContainer.appendChild(scoreOutputPlayer);
scoreContainer.appendChild(scoreOutputComp)

container.appendChild(scoreContainer)