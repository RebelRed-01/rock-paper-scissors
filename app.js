//generate random weapon selection for computer
function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return weapons[random];
}

let playerScore = 0;
let computerScore = 0;


/*logic for simulating one round of the game;
return results of the battle based on 
which weapons went against each other*/
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
        return 'INVALID SELECTION. YOU MUST CHOOSE ROCK, PAPER, OR SCISSORS';
    }
}

//play 5 rounds of the game
function game() {
    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt('Choose your weapon').toLocaleLowerCase();
        const computerSelection = getComputerChoice();

        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`)

        console.log(playRound(playerSelection, computerSelection));

        if (round === 4) {
            console.log(`Player scored ${playerScore} points`);
            console.log(`Computer scored ${computerScore} points`);
            if (playerScore > computerScore) {
                console.log('Player wins the game!');
            } else if (computerScore > playerScore) {
                console.log('Computer wins the game!');
            } else {
                console.log('You tied the game. Play again for a tie breaker?')
            }
        }

    }
    /*next need to create a score keeper + 
    announce the winner after 5 rounds

    might also need to clean up code 
    and try alternative approach 
    (maybe use do while loop)*/
}

game();

