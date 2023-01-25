// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let player1 = 'paper';
let player2 = 'rock';

if (player1 === 'paper' && player2 === 'rock') {
    console.log('Player 1 is the winner!');
} else if (player1 === 'scissors' && player2 === 'paper') {
    console.log('Player 1 is the winner!');
} else if (player1 === 'rock' && player2 === 'scissors') {
    console.log('Player 1 is the winner!');
} else if (player1 === player2) {
    console.log('Its a tie!');
} else {
    console.log('Player 2 is the winner!');
}