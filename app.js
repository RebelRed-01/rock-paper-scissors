//generate random weapon selection for computer
function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return weapons[random];
}

const playerSelection = prompt('Choose your weapon').toLocaleLowerCase();
const computerSelection = getComputerChoice();



//simulate one round of the game and return results of the battle based on which weapons went against each other
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'
        && computerSelection === 'paper') {
        return 'Paper beats rock. The computer wins!';
    } else if (playerSelection === 'rock'
        && computerSelection === 'scissors') {
        return 'Rock beats scissors. Player wins!';
    } else if (playerSelection === 'paper'
        && computerSelection === 'rock') {
        return 'Paper beats rock. Player wins!';
    } else if (playerSelection === 'paper'
        && computerSelection === 'scissors') {
        return 'Scissors beats paper. The computer wins!';
    } else if (playerSelection === 'scissors'
        && computerSelection === 'rock') {
        return 'Rock beats scissors. The computer wins!';
    } else if (playerSelection === 'scissors'
        && computerSelection === 'paper') {
        return 'Scissors beats paper.Player wins!';
    } else if (playerSelection === computerSelection) {
        return 'it\'s a tie...battle again';
    } else {
        return 'INVALID SELECTION. YOU MUST CHOOSE ROCK, PAPER, OR SCISSORS';
    }
}


function game() {
    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt('Choose your weapon').toLocaleLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

