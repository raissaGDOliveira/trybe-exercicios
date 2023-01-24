let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let average = 0;
let higherNumber = numbers[0];
let lowerNumber = numbers[0];
let oddValue = 0;
//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let number of numbers) {
    console.log(number);
}
//Some todos os valores contidos no array e imprima o resultado;
for (let index =0; index < numbers.length; index += 1) {
    result += numbers[index];
}
console.log(result);
//Calcule e imprima a média aritmética dos valores contidos no array;
for (index =0; index < numbers.length; index += 1) {
    average = result / numbers.length;
}
console.log(average);
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (result > 20) {
    console.log("valor maior que 20");
} else if (result <= 20) {
    console.log("valor menor ou igual a 20");
}
//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}
console.log(higherNumber);
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddValue += 1;
    } 
}
    if (oddValue === 0) {
        console.log("nenhum valor ímpar encontrado");
    } else {
        console.log(oddValue);
    }
//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowerNumber) {
        lowerNumber = numbers[index];
    }
}
console.log(lowerNumber);
//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numeros = [];

for(index = 0; index <= 25; index += 1) {
    numeros.push(index);
}
console.log(numeros);
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

