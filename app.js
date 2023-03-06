function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return console.log(weapons[random])
}

getComputerChoice()