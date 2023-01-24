//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numeros = [];

for(index = 0; index <= 25; index += 1) {
    numeros.push(index);
}
console.log(numeros);
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let numero of numeros )