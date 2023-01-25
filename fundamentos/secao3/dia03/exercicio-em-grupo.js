// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:
let soma = 0;
for (index = 1; index <= 50; index += 1) {
    soma += index;
}
console.log(soma);

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let count = 0;
for (index = 2; index <= 150; index += 1) {
    if (index % 3 === 0) {
        count += 1;
    }
    if (count === 50) {
        console.log('Mensagem secreta.');
    }
}
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

// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.
let age = 17;

if (age >= 18) {
    console.log('A pessoa é maior de idade');
} else {
    console.log('A pessoa é menor de idade');
}

let result = age >= 18 ? 'A pessoa é maior de idade' : 'A pessoa é menor de idade';
console.log(result);


// 5 - Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let ageCarolzita = 29;
let ageFlavio = 35;
let ageNoel = 36;

if (ageCarolzita < ageFlavio && ageCarolzita < ageNoel) {
    console.log('Carolzita é a pessoa mais nova.');
} else if (ageFlavio < ageCarolzita && ageFlavio < ageNoel) {
    console.log('Flávio é a pessoa mais nova.');
} else if (ageNoel < ageCarolzita && ageNoel << ageFlavio) {
    console.log('Noel é a pessoa mais nova.');
}
