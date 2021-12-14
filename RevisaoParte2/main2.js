//console.log(document.domain);

//console.log(document.URL);

//console.log(document.title);

//console.log(document.head);

//console.log(document.body);

//Metodo para pegar o Elemento pelo Id
let titulo = document.getElementById('titulo');

//Alterando o titulo da pagina web
titulo.innerHTML = 'Olá queridas pipocas!';

//Inserindo estilo Css no elementos H1
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';