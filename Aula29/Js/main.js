//Objeto Window
//console.log(window);

//window.alert('Olá Mundo');
//alert('Olá Mundo 2');

//Objeto document
console.log(document);

//Alterar o titulo
document.title = 'Produtos Ivone';
//Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá Mundo!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';

let B = document.createElement('BUTTON');
B.innerHTML = 'Aceitar';
document.body.appendChild(B);
// B.style.backgroundColor = '#0000FF';

let C = document.createElement('p');
C.innerHTML = 'Estamos entendendo o DOM';
document.body.appendChild(C);
C.style.color = '#00ffff';