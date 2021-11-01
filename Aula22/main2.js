// Funções (simples)
// var num3 = 3;
function addNums(num1 = 2, num2 = 5) {
    return num1 + num2;
}

console.log(addNums());
console.log(addNums);

let x = addNums(0, 25);
console.log(x);

function valida(x) {
    if (x == 25) {
        return 'Igual';
    } else return 'Diferente';
}

console.log(valida(25));

// Faz a chamada da função
let z = myFunc(1, 5);
console.log(z);

function myFunc(num1, num2) {
    return num1 * num2;
}

// ARROW FUNCTION
const hello = () => {
    return 'Olá Arrow Function';
};

console.log(hello());

console.clear();

const addNums2 = (num1 = 1, num2 = 2) => {
    return num1 + num2;
};
console.log(addNums2());

console.clear();

// Função boasVindas() carregando evento onload
//(Função Simples)
function boasVindas() {
    alert('Bem vindo a nossa página');
    console.log('Bem vindo a nossa página');
}

// Função eventClique() carregando evento onclick
//(Arrow Function)
const eventClique = () => {
    alert('Você clicou em um botão');
    console.log('Você clicou em um botão');
};

// Função mouseEmCima() carregando evento onmouserover
//(Arrow Function)
const mouseEmCima = () => {
    console.log('Mouse está em cima do título');
};

console.clear();

// Crie um função que calcule a média de 4 notas e exiba o resultado no console.log
function media(nota1 = 3, nota2 = 5, nota3 = 7, nota4 = 10) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}
console.log(media());
console.log(media);

// Crie um função que faça a conversão de Celsius para Fahrenheit e exiba o resultado no console.log
const Celsius = (num1 = 23) => {
    return num1 * 1.8 + 32;
};

console.log(Celsius());
console.log(Celsius);
