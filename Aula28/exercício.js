// Classe
class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }

    contaPoupança(){
        return this.salario * 0.015;
    }

    contaCorrente(){
        return this.salario * 0.036;
    }

    contaEstudante(){
        return this.salario * 0.012;
    }
}

let aluna = new contaBancaria('Isabela', 20, 1500, 'Feminino', 'Banco Pipoca',)