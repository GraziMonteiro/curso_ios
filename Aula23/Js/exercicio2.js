// pop()
console.clear();
const vegetais1 = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
let x = vegetais1.pop(); // x = "Manga"

console.log(vegetais1);
console.log(x);

// push()
console.clear();
const vegetais2 = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
let y = vegetais2.push('Cebola'); // y = 5

console.log(vegetais2);

// delete()
console.clear();
const vegetais3 = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
delete vegetais3[3];

console.log(vegetais3);

//splice()
console.clear();
const vegetais4 = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
console.log(`Antes: ${vegetais4}`)
vegetais4.splice(1, 0, "Cebola", "Beterraba");
console.log(`Depois: ${vegetais4}`)

//concat()
console.clear();
const vegetais = ["Repolho", "Nabo", "Rabanete"];
console.log(`Antes: ${vegetais}`)
const feira = vegetais.concat("Cenoura");
console.log(`Depois: ${feira}`)



