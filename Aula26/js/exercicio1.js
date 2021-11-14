//Array de Objeto
const alunas = [
    {
        id: 1,
        nome: "Alice",
        idade: 17,
        sexo: "Feminino",
        cor: "Branca",
        matricula: 024,
        notas: [5,4,9,10,9,6,3,8],
        endereco: ['Rua 22 de Agosto',50,'São Paulo'],
    },

    {
        id: 2,
        nome: "Vitória",
        idade: 20,
        sexo: "Feminino",
        cor: "Preta",
        matricula: 117,
        notas: [8,10,9,10,7,5,7,9],
        endereco: ['Rua 28 de Setembro', 248, 'São Paulo'],
    },

    {
        id: 3,
        nome: "Isabela",
        idade: 24,
        sexo: "Feminino",
        cor: "Parda",
        matricula: 053,
        notas: [5,2,1,7,8,7.7,10,8],
        endereco: ['Rua dos Americanos',647, 'São Paulo'],
    }
];

for( let aluna = 0; aluna < alunas.length; aluna++){ // aqui percorrer o array de objeto alunas 
 let nota = alunas[aluna].notas;
 let total = 0;

 for(let x = 0; x < nota.length; x++){ // Vai todo o array
    total = total + nota[x]; // somar as notas 
    media = total / nota[x]
    function alunasMedia(mediatotal = media){
        if(mediatotal > 7){
            return 'Aprovada'
        }else{
            return 'Reprovada'
        }
    }
}

console.log(`A aluna ${alunas[aluna].nome} teve as notas ${alunas[aluna].notas}, mora no endereço ${alunas[aluna].endereco}. Portanto sua média foi ${media}, e sua situação foi: ${alunasMedia()}`)
}

console.clear();

//Exercício 2 
const pizzas = [
    {
        id:1,
        sabor: 'Brócolis',
        ingredientes: ['brócolis', 'requeijão', 'muçarela', 'bacon'],
        tamanho: ['P', 'M', 'G', 'GG'],
        promoção: false,
        diadaPromoção: 'Segunda-Feira'
    },
    {
        id:2,
        sabor: 'Pomodoro',
        ingredientes: ['muçarela', 'tomate picado', 'alho frito'],
        tamanho: ['P', 'M', 'G', 'GG'],
        promoção: true,
        diadaPromoção: 'Quarta-Feira'
    },
    {
        id:3,
        sabor: 'Quatro Queijo',
        ingredientes: ['muçarela', 'provolone', 'parmesão', 'requeijão'],
        tamanho: ['P', 'M', 'G', 'GG'],
        promoção: true,
        diadaPromoção: 'Quinta-Feira'
    }
];

for(let i = 0 ; i < pizzas.length ; i++ ){
    let promododia = pizzas[i].promoção
    let valor = 27.99;

    function PromocaoDoDia(){
        if(promododia == true){
            let desconto = (valor * 0.25);
            let totalDesconto = valor - desconto;
            return `A pizza sai por ${totalDesconto} reais, promoção do dia 25%. Aproveite`
        }else{
            return 'não está na promoção';
        }
    }
    console.log(`A pizza ${pizzas[i].sabor.toUpperCase()} ou ${pizzas[i].sabor.substr(1,5)} de ${valor} reais, ${PromocaoDoDia()}`)
}