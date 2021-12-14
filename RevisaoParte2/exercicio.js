// Classe
class contaBancaria {
    constructor(nomeCor, saldoIni, datAbert){
        this.nomeCor = nomeCor;
        this.saldoIni = saldoIni;
        this.datAbert = datAbert;
    }
    saque(){
        return this.saldoIni - 300;
    }

    deposito(){
        return this.saldoIni + 50;
    }

    Retirada(){
        return this.saldoIni - (this.saldoIni - 300);
    }
}


let correntista = new contaBancaria('Isabela',1500,'12/12/2021');

console.log(correntista);
console.log(`O saque que o cliente fez é:  ${correntista.Retirada()} reais`);
console.log(`O depósito que o clinte fez:  ${correntista.deposito()} reais`);