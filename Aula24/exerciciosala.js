function calculo(salario = 460,porcentagem,novoSalario) {
    if (salario <= 280){
        porcentagem = (salario * 0.2);
    } else if (salario > 280 && salario <= 700){
        porcentagem = (salario * 0.15);
    }else if (salario > 700 && salario <= 1500){
        porcentagem = (salario * 0.1);
    }else {
        porcentagem = (salario * 0.05);
    }

    return novoSalario = salario + porcentagem;

}

console.log(`Salario atual: R$ ${calculo()} `);

function maiorNumero(){
    let num1 = 10;
    let num2;
    let num3;

 if (num1 > num2)
 return `O numero ${num1} é maior`;
 else if (num2 > num3) return 'O numero: ' + num2 + 'é maior'
 else return `O numero ${num3} é maior`;
}

console.log(maiorNumero()); 