let contador = 1;

while (contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador++; //contador =  contador + 1
}

console.clear();
//WHILE ESTRUTURA DE REPETIÇÂO
let contador2 = 10;

while (contador2 >= 0){
    console.log (`Valor = ${contador2}`);
    contador2 = contador2 - 1;
}

console.clear();
//DO-WHILE ESTRUTURA DE RESPETIÇÂO
let i = 0;
    text = '';

do {
    text += `O número é ${i}\n`;
    i++;
}while (i < 10);
console.log(text);

console.clear();
//FOR LAÇO DE REPETIÇÃO
for(let i = 0; i <= 10; i = i +1)
        console.log(`Laço for número: ${i}`)

console.clear();

// LAÇOS DE REPETIÇÃO COM ARRAYS
const frutas = ['maça', 'laranja', 'laranja', 10, true];

console.log(frutas)

for(let j = 0; j < frutas.length; j++)
console.log(`O nome da fruta é: ${frutas[j]}`);
