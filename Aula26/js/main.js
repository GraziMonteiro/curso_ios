let string = 'Instituto da Oportunidade Social';

// Acessando o primeiro caracter
console.log(string.charAt(3));
console.log(string[0]);

console.clear();

let texto = "Graziela"
console.log(texto.length);

console.clear();

let s ="hello world!"
console.log(s.toUpperCase());

let d = "HELLO WORLD!"
console.log(d.toLowerCase());

console.clear();

let str = 'Graziela';
console.log(str.substring(0,3));
console.log(str.substring(4));

console.clear();

const str1 = 'A  raposa é um animal esperto';

const palavras = str1.split(' ');
console.log(palavras[3]);

console.clear();

let mensagem = 'Venha para a Microsoft';
console.log(mensagem);

let novaMensagem = mensagem.replace('Microsoft','IOS');
console.log(novaMensagem);

console.clear();

let text = '   Olá alunas do IOS!    ';
console.log(text);
console.log(text.trim());

console.clear();

let frase = 'Sou um aluno do IOS e o IOS é muito bom!';

console.log(frase.indexOf('do'));
console.log(frase.indexOf('IOS'));

console.log(frase.lastIndexOf('IOS'));
console.log(frase.indexOf('IOS'));

console.log(frase.startsWith('D'));
console.log(frase.startsWith('um'));

console.log(frase.endsWith('!'));