const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const infoContainer = document.querySelector('.info-container');
const pScore = document.querySelector('.p-score');
const cScore = document.querySelector('.c-score');

let playerScore = 0;
let computerScore = 0;


//generate random weapon selection for computer;
function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return weapons[random];
}


/*
logic for simulating one round of the game;
increments the score for winner; 
returns result of the battle;
*/
function playRound(playerSelection, computerSelection) {    
    if (playerSelection === 'rock'
        && computerSelection === 'paper') {
        computerScore++;
        return 'The computer wins!';
    } else if (playerSelection === 'rock'
        && computerSelection === 'scissors') {
        playerScore++;
        return 'Player wins!';
    } else if (playerSelection === 'paper'
        && computerSelection === 'rock') {
        playerScore++;
        return 'Player wins!';
    } else if (playerSelection === 'paper'
        && computerSelection === 'scissors') {
        computerScore++;
        return 'The computer wins!';
    } else if (playerSelection === 'scissors'
        && computerSelection === 'rock') {
        computerScore++;
        return 'The computer wins!';
    } else if (playerSelection === 'scissors'
        && computerSelection === 'paper') {
        playerScore++;
        return 'Player wins!';
    } else if (playerSelection === computerSelection) {
        return 'it\'s a tie...battle again';
    }
}


/*
End game when 3 points is reached;
alert winner and reset the scores/results
*/
function endGame() {
    if (playerScore === 3) {
        alert('Congratulations! You win the game')
        playerScore = 0;
        computerScore = 0;
        while (infoContainer.hasChildNodes()) {
            infoContainer.removeChild(infoContainer.firstChild);
        }

    } else if (computerScore === 3) {
        alert('The computer wins. Try again')
        playerScore = 0;
        computerScore = 0;
        while (infoContainer.hasChildNodes()) {
            infoContainer.removeChild(infoContainer.firstChild);
        }
    }
}

/*
render player selection and result of simulating one round;
update score and check for end-game;
*/
function renderGame() {
    const player = document.createElement('p');
    const computer = document.createElement('p'); 
    const result = document.createElement('p');  

    player.textContent = `You chose: ${playerSelection}`;
    computer.textContent = `The computer chose: ${computerSelection}`;
    result.textContent = `${playRound(playerSelection, computerSelection)}`;
    infoContainer.append(player, computer, result);

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    endGame();
   }

/*
when button is pressed player and computer selections are generated 
game information is rendered
*/
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    renderGame();
});
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    renderGame();
});
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    renderGame();
});





