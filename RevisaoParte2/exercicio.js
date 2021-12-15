// Classe
class contaBancaria {
    constructor(nome, saldoInicial, datAbertura){
        this.nome = nome;
        this.saldoInicial = saldoInicial;
        this.datAbertura = datAbertura;
    }

    deposito(){
        return (this.saldoInicial) - this.saldoInicial + 50;
    }

    valorFinal(){
        return this.saldoInicial + 50;
    }

    Retirada(){
        return this.saldoInicial - (this.saldoInicial - 300);
    }

    ConsultarSal(){
         return this.valorFinal() - 300 ;
    }

}


let correntista = new contaBancaria('Isabela',1500,'12/12/2021');

console.log(correntista);
console.log(`O depósito que o clinte fez:  ${correntista.deposito()} reais`);
console.log(`O saque que o cliente fez foi de :  ${correntista.Retirada()} reais`);
console.log (`O seu saldo atual é de: ${correntista.ConsultarSal()} reais`);


