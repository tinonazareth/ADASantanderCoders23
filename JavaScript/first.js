// Curso lest´s Code JavaScript 
// VÁRIAVEIS

let idade = 47; // criando a primeira váriavel

console.log(idade);

// Tipos de váriaveis

idade = 30;             // Number
let numero = 56;         // Number
let altura = 1.77;       // Number
let nome = 'Valtino';    // String
let estudando = true;    // Boolean (true ou false)

console.log(numero, typeof numero); // Imprimi o tipo da váriavel
console.log(altura);
console.log(nome);
console.log(estudando);

let outra;
console.log(outra); // Imprimi valor underfield

let nula = null;
console.log(nula); // Imprimi valor NULL

var variavel = 30; // Sintaxe mais antiga, evite usar

const constante = 100; // Não altera o valor já atribuido

// Operadores aritméticos
let numero1 = 20;
let numero2 = 2;

const Soma = numero1 + numero2;

console.log('Soma =', Soma);
console.log('Subtração =', numero1 - numero2);
console.log('Multiplicação =', numero1 * numero2);
console.log('Divisão =', numero1 / numero2);
console.log('Exponenciação =', numero1 ** numero2);
console.log('Resto da divisão =', numero1 % 3);

// Precedência de operadores

console.log((3 + 7 )* 3);
console.log((10 + 7 + 8) / 3);

// Biblioteca Math

console.log(Math.PI);
console.log(Math.sqrt(16));

// Operadores Booleans

const numero3 = 10;
console.log(numero3 == 10);
console.log(numero3 > 20);
console.log(numero3 >= 15);
console.log(numero3 != 50);
console.log(numero3 < 5);
console.log(numero3 <= 10);

console.log(numero3 === '10') // Comparando tipos diferentes * recomenda utlizar sempre === / !== no diferente


// Conjunção lógicas

// &&
let idade1 = 18;
let tenhoCNH = true;

const possoDirigir = idade1 >= 18 && tenhoCNH === false;

console.log('Posso dirigir?',possoDirigir);
 // OR

let idade2 = 40;
const votoFacultativo = idade2 < 18 || idade2 >= 70;

// NOT

const estouGostando = false;
console.log(!estouGostando);

console.clear();

// Coerção de tipos
// Explicita (manual)

const numero4 = 10;
console.log(numero4, typeof numero4);

const numeroEmFormaroDeString = String(numero4);
console.log(numeroEmFormaroDeString, typeof numeroEmFormaroDeString);

console.log(Number('1234567'));
console.log(parseFloat('1234.568'));
console.log(Boolean(1)) // 0 vai ser false

console.clear();

// Implicita (Automática)

console.log('10' + 1);
console.log('10' -1); // quando subtração funciona e pra outras opedrações tambem menos na soma

// 

