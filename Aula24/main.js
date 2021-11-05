const a = 10;
if (a == 10) {
    console.log ("Os valores são iguais");
}else if (a > 10) {
    console.log("A é maior que 10")
}else {
    console.log("A variavel A não é igual a 10 e não maior que 10")
}

//SWITCH
const nota = 9;

switch(nota) {
    case 4:
        console.log("Reprovado!");
        break;
    case 6:
        console.log("Recuperação");
        break;
    default:
        console.log("Nota acima da media");
        break;
}

console.clear();
const b = 10;
if (b == 10) {
    console.log ("Os valores são iguais");
}else {
    console.log("Os valores são diferentes")
}
console.clear();

let c = b == 16 ? "É igual a 10" : "São diferentes";
console.log(c);

let resultado = 3 != 4 ? "3 é diferente de 4" : "3 é igual a 4";