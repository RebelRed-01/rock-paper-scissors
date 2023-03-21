//generate random weapon selection for computer;
function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return weapons[random];
}

let playerScore = 0;
let computerScore = 0;


/*
logic for simulating one round of the game;
increments the score; 
returns weapon choice and result of the battle;
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'
        && computerSelection === 'paper') {
        computerScore++;
        return 'Paper beats rock. The computer wins!';
    } else if (playerSelection === 'rock'
        && computerSelection === 'scissors') {
        playerScore++;
        return 'Rock beats scissors. Player wins!';
    } else if (playerSelection === 'paper'
        && computerSelection === 'rock') {
        playerScore++;
        return 'Paper beats rock. Player wins!';
    } else if (playerSelection === 'paper'
        && computerSelection === 'scissors') {
        computerScore++;
        return 'Scissors beats paper. The computer wins!';
    } else if (playerSelection === 'scissors'
        && computerSelection === 'rock') {
        computerScore++;
        return 'Rock beats scissors. The computer wins!';
    } else if (playerSelection === 'scissors'
        && computerSelection === 'paper') {
        playerScore++;
        return 'Scissors beats paper.Player wins!';
    } else if (playerSelection === computerSelection) {
        return 'it\'s a tie...battle again';
    } else {
        return alert('INVALID SELECTION. YOU MUST CHOOSE ROCK, PAPER, OR SCISSORS');
    }
}

/*
play 5 rounds of the game and alert winner at the end;
present scores for each player at the end of 5 rounds;
alerts the winner;
*/
function game() {
    for (let round = 1; round < 6; round++) {
        const playerSelection = prompt('Choose your weapon').toLocaleLowerCase();
        const computerSelection = getComputerChoice();

        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`)

        console.log(playRound(playerSelection, computerSelection));

        if (round === 5) {
            console.log(`Player scored ${playerScore} points`);
            console.log(`Computer scored ${computerScore} points`);
            if (playerScore > computerScore) {
                alert('Player wins the game!');
            } else if (computerScore > playerScore) {
                alert('Computer wins the game!');
            } else {
                alert('You tied the game. Play again for a tie breaker?')
            }
        }
    }
}

game();

