//Metodo QuerySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';


//Acessando a tag e a classe
//let tagClasse = document.querySelector('p.exemplo');
//tagClasse.innerHTML = 'Alterei essa classe para Nutella';

let tagClasse = document.querySelector('p.exemplo').
innerHTML = 'Alterei essa classe para Nutella';

//Acessando somente a classe
//let elementoClass = document.querySelector('.myclass');
//elementoClass.style.fontSize = 'x-large';

let elementoClass = (document.querySelector('.myclass').style.fontSize = 'x-large');

//Função chamando pelo evento onclick()
const Clique = () =>{
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};

console.log(document.querySelectorAll('p'));
