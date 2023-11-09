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



