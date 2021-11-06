// unshift()
console.clear();
const pessoas1 = ['Joaquim', 'José' , 'Silva', 'Xavier'];
let w = pessoas1.unshift('Amanda'); // w = 5
console.log(pessoas1);
console.log('Amanda Chegou');

// pop()
const pessoas2 = ['Amanda', 'Joaquim', 'José', 'Silva', 'Xavier'];
let x = pessoas2.pop(); // x = "Xavier"

console.log(pessoas2);
console.log('Xavier Saiu');

// push()
const pessoas3 = ['Amanda', 'Joaquim', 'José', 'Silva',];
let y = pessoas3.push('Zuleica'); // y = 5

console.log(pessoas3);
console.log('Zuleica Chegou');

// shift()
const pessoas4 = ['Amanda', 'Joaquim', 'José', 'Silva', 'Zuleica'];
let z = pessoas4.shift(); // z = 'Amanda'

console.log(pessoas4);
console.log('Amanda Saiu ');

// delete
const pessoas5 = ['Joaquim', 'José', 'Silva', 'Zuleica'];
delete pessoas5[2];

console.log(pessoas5);
console.log('Silva Saiu ');

// unshift()
const pessoas6 = ['Silvana', 'Zuleica'];
let f = pessoas6.unshift('Joaquim', 'José'); // w = 3

console.log(pessoas6);
console.log('Silvana chegou');

console.log(`Ficaram 4 pessoas na festa, que são: Joaquim, José, Silvana e Zuleica`)


