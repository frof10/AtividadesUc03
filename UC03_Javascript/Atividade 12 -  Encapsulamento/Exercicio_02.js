import PromptSync from "prompt-sync";
const prompt = PromptSync();

class contaBancaria {
    #nomeTitular
    numeroConta
    numeroAgencia
    #saldo 
    dataAbertura
    constructor(nomeTitular, numeroConta, numeroAgencia, saldo = 0, dataAbertura) {
        this.#nomeTitular = nomeTitular
        this.numeroConta = numeroConta
        this.numeroAgencia = numeroAgencia
        this.#saldo = saldo
        this.dataAbertura = dataAbertura
    }
    set nomeTitular(nclie){
        this.#nomeTitular = nclie
    }
    get nomeTitular(){
        return this.#nomeTitular
    }
    set saldo(SaldoCliente){
        this.#saldo = SaldoCliente
    }
    get saldo(){
        return this.#saldo
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Deposito no valor: R$${valor.toFixed(2)} realizado com sucesso!`);
        }else{
            console.log('Valor invalido, Digite novemente!');
        }
    }

    sacar(valor){
        if (valor > 0 && valor < this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
        }else{
            console.log('Valor maior que o saldo, informe outro valor abaixo do saldo.');
        }
    }

imprimirCabecalho(){
    console.log(`Cliente: ${this.#nomeTitular}\t\tAgencia: ${this.numeroAgencia} - Conta: ${this.numeroConta}.`);    
}    
}

console.log('=========================');
console.log('Banco dinheiro perdido 🏦');
console.log('=========================\n');

var cliente = new contaBancaria (
    prompt('Digite o seu nome: '),
    prompt('Digite a agencia: '),
    prompt('Digite a conta: ')
);

console.log(`\nBom dia, Sr(a) Cliente:`);
cliente.imprimirCabecalho();

var opcao = -1
while (opcao !== 0) {
console.log(`\nBom dia, Sr(a) Cliente:`);
cliente.imprimirCabecalho();

console.log('\n');
console.log('==== Menu ====');
console.log('1 - Saldo 🧾');
console.log('2 - Saque 💸');
console.log('3 - Deposito 💰');
console.log('4 - Rendimentos 🤑 ');
console.log('0 - Sair 👋\n');

opcao = Number(prompt('Digite a opção: '))

switch (opcao) {
    case 1:
        console.log(`Saldo: R$${cliente.saldo.toFixed(2)}`);
        
        break;

    case 2:
        var saque = Number(prompt('Digite um valor para saque: '));
        cliente.sacar(saque);
        console.log(`Saldo após o saque: R$${cliente.saldo.toFixed(2)}`);
        
        break;
    
    case 3:
        var deposito = Number(prompt('Digite um valor para deposito: '))
        cliente.depositar(deposito);
        break;
    
    case 4:
        console.log('lofofo');
        
        break;

    case 0:
        console.log('Seção encerrada. Até logo! 👋');
        break;
        
    default:
        console.log('Opção inválida, Digite novamente!');
        break;
}

}


