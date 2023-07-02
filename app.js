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
increments the score; 
returns wresult of the battle;
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


//End game when 5 points is reached

function endGame() {
    if (playerScore === 5) {
        alert('Congratulations! You win the game')
    } else if (computerScore === 5) {
        alert('The computer wins. Try again')
    }
}

/*
player makes selection and one round of the game is simulated;
once pressed render choices and result
update score.
*/
function renderGame() {
    const player = document.createElement('p');
    player.textContent = `You chose: ${playerSelection}`;

    const computer = document.createElement('p');
    computer.textContent = `The computer chose: ${computerSelection}`;

    const result = document.createElement('p');
    result.textContent = `${playRound(playerSelection, computerSelection)}`;

    infoContainer.append(player, computer, result);


    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    endGame()
   }


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





