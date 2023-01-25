let array = ['java', 'javascript', 'python', 'html', 'css'];
//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra
//desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let biggerWord = array[0];
let smallerWord = array[0];
for (i = 0; i < array.length; i++) {
    if (array[i].length > biggerWord.length) {
        biggerWord = array[i];
    }
    if (array[i].length < smallerWord.length) {
        smallerWord = array[i];
    }
}
console.log(biggerWord);
console.log(smallerWord);
//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja,
//é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console
//o maior número primo entre 2 e 50.
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber++) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor++) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestPrimeNumber = currentNumber;
    }
}
console.log(biggestPrimeNumber);