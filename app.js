//generate random weapon selection for computer
function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return weapons[random];
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(`Player chose ${playerSelection}`);
console.log(`Computer chose ${computerSelection}`)

//simulate one round of the game and return results of the battle based on which weapons went against each other
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'
        && computerSelection === 'paper') {
        console.log('Paper beats rock. The computer wins!');
    } else if (playerSelection === 'rock'
        && computerSelection === 'scissors') {
        console.log('Rock beats scissors. Player wins!');
    } else if (playerSelection === 'paper'
        && computerSelection === 'rock') {
        console.log('Paper beats rock. Player wins!');
    } else if (playerSelection === 'paper'
        && computerSelection === 'scissors') {
        console.log('Scissors beats paper. The computer wins!');
    } else if (playerSelection === 'scissors'
        && computerSelection === 'rock') {
        console.log('Rock beats scissors. The computer wins!');
    } else if (playerSelection === 'scissors'
        && computerSelection === 'paper') {
        console.log('Scissors beats paper.Player wins!');
    } else if (playerSelection === computerSelection) {
        console.log('it\'s a tie...battle again');
    } else {
        console.log('something went wrong :(')
    }
}

playRound(playerSelection, computerSelection);
