//Array de objetos FOREACH 
const funcionários = [
    {
        id: 1,
        nome: 'José',
        salario: 1500,  
    },
    {
        id: 2,
        nome: 'Karen',
        salario: 2000,
    },
    {
        id: 3,
        nome: 'Maria',
        salario:2500,
    },
    {
        id: 4,
        nome: 'Wally',
        salario: 4800,
    },
    {
        id: 5,
        nome: 'Ana Catarina',
        salario: 5500,
    },
];


funcionários.forEach((lista) => console.log(`O nome do funcionário é ${lista.nome} e seu salário é ${lista.salario} reais`));


//MAP REAJUSTE
console.clear();
let Novosalario = funcionários.map((dissidio) => {
    let reajuste = dissidio.salario * 0.05;
        return reajuste + dissidio.salario; 
});

console.log('Antes: ');
console.log(funcionários);
console.log('Reajuste Salarial:');
console.log(Novosalario);

//Filter Recebem mais de 5000
console.clear();
let filtrosalario = Novosalario.filter((salarios) =>{
    return salarios >= 5000;
});

console.log(`O Salário mais alto são: ${filtrosalario}`);

//Find() Encontrar Wally
console.clear();
console.log(
funcionários.find((busca) => {
return busca.nome === `Wally`;
})

);
