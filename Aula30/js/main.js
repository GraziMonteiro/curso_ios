// Método getElementById
let titulo = document.getElementById('titulo');
// Alterando o conteúdo do elemento
titulo.innerHTML = "Olá meus caros alunos!";
// Configurando o estilo Css do elemento
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

// Método getElementByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[0]);
// Configurando o estilo Css do elemento
// items[0].textContent = 'Hello 2';
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'yellow';

// Utilixando o laço de repetição For para alterar todos os elementos do HTML

// for (let i = 0; i < items.length; i++) {
//     items[1].style.backgroundColor = 'yellow';
// }

console.clear();
// Método getElementByTagName
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++){
    if (i % 2) li[i].style.backgroundColor = '#4f2eeb';
    else li[i].style.backgroundColor = '#fff';
}

// Método getElementsByName
let nome = document.getElementsByName('fitem');
console.log(nome);

nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem ?';
nome[1].style.backgroundColor = '#BAC1FB'


// Remover elemento no DOM
let item2 = document.getElementById('item2');
item2.remove();

let lista = document.getElementById('items');
let item1 = document.getElementsById('item1');

