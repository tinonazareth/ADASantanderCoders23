// Estrutura Condicional

const idade = 17;
if (idade >= 18) {
    console.log('Você é maior de idade')
    
} else {
    console.log('Você é menor de idade')
}

console.clear();

let media = 4;

if (media >= 7) {
    console.log('Aprovado')
} else if (media >= 5) {
    console.log('Recuperação') 
} else {
    console.log('Reprovado')
}

console.clear();

// Estrutura de Repetição não controlada

const input = require('readline-sync')

const numeroSorteado = 5;
let numero_usuario = Number(input.question('Escolha um numero'));

while (numero_usuario !== numeroSorteado) {
    console.log('Numero errado tente novamente')
    numero_usuario = Number(input.question('Escolha um numero'))
} 

console.log('Parabens você acertou');

console.clear()

// Laços Numéricos contolada

for (let i = 0; i < 10; i++) {
    console.log('S' , i)
}


for (let i = 12; i > 8; i--) {
    console.log('M' , i)
}

// Usando pra obter uma média de um aluno
let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota: ${nota} `))
    soma = soma + nota
}

console.log(`A média obtida pelo estudande foi ${soma / 3}.`)

// Arrays

// Criando
let arr = ['Valtino', 47, 1.73, true];

console.log(arr);
 
// Acessando
console.log(arr[0]); // primeiro elemento

// Obter o tamnho
console.log(arr.length)

// Percorrer
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

 // outra forma de percorrer
for (let elemento of arr) {
    console.log(elemento)
}

// mais uma forma de percorrer
for (let indice in arr) { // Percorrendo os indices
    console.log(indice, arr[indice])
}

// Métodos de arrays

// fatiamento: slice
let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

console.log(arr1.slice(0, 2));
console.clear();
console.log('antes de adicionar', arr2)


// Adicionando elementos: push | unshift
arr1.push(10) // adiciona no final
console.log('Adicionando')

arr2.unshift(0) // adiciona no começo

// Removendo elementos
arr2.pop() //remove o ultimo elemento

arr2.shift() // remove o primeiro elemento

// Concatenando arrays: concat
arr1.concat(arr2);
console.log(arr1.concat(arr2)); // pode se inverter a ordem dos arrays

// Buscar elementos: IndexOf | lastIndexOf
let indiceDoElemento = arr1.indexOf(34); //retorna apenas o primerio encontrado
console.log(indiceDoElemento);

let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3))

//Descobrindo a existência de um elemento: includes
console.indexOf(arr1.includes(10)); // retorna true ou false

// Invertendo arrays: reverse
console.log('arr1 normal', arr1);

const arr1Invertido = arr1.reverse();
console.log('arri invertido', arr1Invertido);

// Funções reaproveitar código
function saudacao() { // definindo a função
    console.log('Ola seja bem vindo(a) a aula de javaScript')
}

saudacao(); // chamando a função

// Como enviar parâmetros para as funções

function saudacao(nome, curso='JavaScript') { // definindo a função
    console.log(`Olá, ${nome} seja bem vindo(a) a aula de ${cuso}`)
}

saudacao('Valtino');

console.clear();

// Retorno da função
function soma(numero1, numero2) {
    return numero1 + numero2
}
const resultado = soma(10, 20);
console.log(resultado  / 2); //média

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true;
    }
    return false;
}

// Objetos
// Como criar um objeto?
let pessoa = { // chave-valor
    nome: 'Valtino', 
    idade:47,

}

console.log(pessoa.nome);
console.log(pessoa['idade']); // forma alternativa para acessar o objeto

// Como adicionar um par de chave-valor?
pessoa.altura = 1.73;

console.log(pessoa);

// Remover elemento

delete pessoa.altura

console.log(pessoa)

// Como percorrer o objeto?
for (let chave in pessoa) {
    console.log(chave)
}

