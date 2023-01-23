// Exercícios Operadores Aritméticos e Operadores Lógiocos
const a = -18;
const b = 200;
const c = 1000;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

if (a>b) {
    console.log(a + " é o maior número.");
} else {
    console.log(b + " é o maior número.");
}

if (a>b && a>c) {
    console.log(a + " é o maior número.");
} else if (b>a && b>c) {
    console.log(b + " é o maior número");
} else {
    console.log(c + " é o maior número.")
}

if ( a > 0 ) {
    console.log("Número positivo.")
} else if (a < 0) {
    console.log("Número negativo.")
} else {
    console.log("Zero.")
}

// Exercício triângulo 
const primeiroAngulo = -200;
const segundoAngulo = 35;
const terceiroAngulo = 85;

const soma = primeiroAngulo + segundoAngulo + terceiroAngulo;

if (soma === 180) {
    console.log(true);
} else if (soma !=180 && soma >= 0) {
    console.log(false);
} else if (soma <= 0) {
    console.log("ERRO");
}
    

// Exercício xadrez
const ChessPieces = "QUEEN";

switch (ChessPieces.toLocaleLowerCase()) {
    case "king":
        console.log("KING: One move to any direction");
        break;
    case "queen":
        console.log("QUEEN: Any amount of moves to any direction");
        break;
    case "rook":
        console.log("TOWER: Any amount of moves horizontally or vertically");
        break;
    case "bishop":
        console.log("BISHOP: Any amount of moves horizontally");
        break;
    case "knight":
        console.log("KNIGHT: Moves in a L shape, two spaces vertically and one horizontally");
        break;
    case "pawns":
        console.log("PAWNS: One space forward. Unless it's their first move, then they can move two squares");
        break;
    default:
        console.log("ERRO");
}


// Exercício notas
const notaDeclarada = 101;

if (notaDeclarada < 0 || notaDeclarada > 100) {
    console.log("ERRO");
} else if (notaDeclarada >= 90) {
    console.log("Nota A!");
} else if (notaDeclarada >= 80) {
    console.log("Nota B!");
} else if (notaDeclarada >= 70) {
    console.log("Nota C!");
} else if (notaDeclarada >= 60) {
    console.log("Nota D!");
} else if (notaDeclarada >= 50) {
    console.log("Nota E!");
} else if (notaDeclarada < 50) {
    console.log("Nota F!");
} 


// Exercício par e ímpar
const primeiroNumero = 1;
const segundoNumero = 9;
const terceiroNumero = 3;

let numeroPar = true;
let numeroImpar = true;

if (primeiroNumero % 2 === 0 || segundoNumero % 2 === 0 || terceiroNumero % 2 === 0) {
    numeroPar = true;
} else {
    numeroPar = false;
}

console.log(numeroPar);

if (primeiroNumero % 2 !== 0 || segundoNumero % 2 !== 0 || terceiroNumero % 2 !== 0) {
    numeroImpar = true;
} else {
    numeroImpar = false;
}

console.log(numeroImpar);


// Exercício custo, valor de venda e lucro
const custoDoProduto = 200;
const vendaDoProduto = 400;
const valorRealDoProduto = custoDoProduto * 1.20;
let lucroReal = 0;
const numeroDeVendas = 1000;

if (custoDoProduto >= 0 && vendaDoProduto >= 0) {
    lucroReal = (vendaDoProduto - valorRealDoProduto) *1000;
    console.log("Lucro de " + lucroReal + " reais.");
} else {
    console.log("ERRO");
}


// Exercício salário
let salarioBruto = 3000;
let aliquotaINSS = 0;
let aliquotaIR = 0;
let parcelaINSS = 0;
let parcelaIR = 0;
let salarioBase = 0;
let salarioLiquido = 0;
let descontoDeIR = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    salarioBase = salarioBruto * 0.92;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = 0.09;
    salarioBase = salarioBruto * 0.91;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = 0.11;
    salarioBase = salarioBruto * 0.89;
} else if (salarioBruto >= 5189.82) {
    parcelaINSS = 570.88;
    salarioBase = salarioBruto - parcelaINSS;
} else {
    console.log("ERRO");
}

if (salarioBase > 0 && salarioBase <= 1903.98) {
    aliquotaIR = 0;
    salarioLiquido = salarioBase;
    console.log("Salário líquido de R$" + salarioLiquido);
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = 0.075;
    parcelaIR = 142.80;
    descontoDeIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoDeIR;
    console.log("Salário líquido de R$" + salarioLiquido);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = 0.15;
    parcelaIR = 354.80;
    descontoDeIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoDeIR;
    console.log("Salário líquido de R$" + salarioLiquido);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = 0.225;
    parcelaIR = 636.13;
    descontoDeIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoDeIR;
    console.log("Salário líquido de R$" + salarioLiquido);
} else if (salarioBase >= 4664.68) {
    aliquotaIR = 0.275;
    parcelaIR = 869.36;
    descontoDeIR = (salarioBase * aliquotaIR) - parcelaIR;
    salarioLiquido = salarioBase - descontoDeIR;
    console.log("Salário líquido de R$" + salarioLiquido);
} else {
    console.log("ERRO");
}

