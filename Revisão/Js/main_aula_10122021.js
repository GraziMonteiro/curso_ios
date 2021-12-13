let nome = 'Hellen' + 'Marcela' + 'Ingrid';
let firstname = 'Hellen';
let lastname = 'Iwata';
let juncao = firstname + lastname;
let frase = 'Estamos fazendo revisão de JS \\ Aprendendo Strings';
let nome1 = 'Catarina';
let exemplo = "IOS é bom de 'mais '";

console.log(exemplo);
console.log(frase);

console.clear();

let comparacao = 10 == 2; //false
let comparacao2 = 100 > 67; // True
let comparacao3 = 34 >= 34; // True
let comparacao4 = 23 == 5; // False
console.log(comparacao, comparacao2, comparacao3, comparacao4);

console.clear();

var exercicio1 = 23 <= 23; // Marcela // TRUE
var exercicio2 = 33 == 04; // Hellen // FALSE
var exercicio3 = 12 != 12; // Ingrid // TRUE // FALSE
var exercicio4 = 634 > 265; // Josiane // FALSE // TRUE
var exercicio5 = 33 >= 23; // Lara // TRUE
var exercicio6 = 33 <= 43; // Greice // FALSE // TRUE
var exercicio7 = 43 >= 233; // Drielly // FALSE
var exercicio8 = 22 != 22; // Thays // FALSE
console.log(
    exercicio2,
    exercicio3,
    exercicio1,
    exercicio4,
    exercicio8,
    exercicio6
);

//var exercicio3 = 12 != 22; // Ingrid // TRUE

let numero;
// if (numero == undefined) {
//     alert('Variavel numero está indefinida');
// }
let numero2 = 3;
let soma = numero + numero2;
console.log(soma);

console.clear();

var demo = 2;
var demo2 = '2';

var compa = demo == demo2;
var compa2 = demo === demo2;

console.log(compa, compa2);

console.clear();

var demo = 2;
var demo2 = '2';
//FALSE     OU      // FALSE  == TRUE
var Lara = demo == demo2 || demo === demo2;

//FALSE     E      // FALSE  == FALSE

//TRUE     E      // FALSE  == FALSA

//FALSE     OU      // FALSE  == FALSE

//TRUE     OU      // FALSE  == TRUE
var vaiLa = 'Vai mesmo';
var sistema = 33;

function seila() {
    let vaiLa = 'Vou mesmo';
}

function seila2() {
    vaiLa = 'Vou mesmo';
}

function seila3() {
    vaiLa = 'Vou mesmo';
}

if (sistema == 33) {
    vaiLa = 'Estamos aqui';
    alert('Foi mal');
}
console.log(vaiLa);

let vamos = 2;

vamos = '20';

const vamos2 = 2;

vamos2 = 30;