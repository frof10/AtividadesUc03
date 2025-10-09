import PromptSync from "prompt-sync"
const prompt = PromptSync();

class contaError extends Error{
    constructor(message){
        super(message)
    }
}


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
            console.log(`Deposito no valor: ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso!`);
        }if(valor <= 0){
            throw new contaError('Error! O valor deve ser maior que 0')
        }
    }

    sacar(valor){
        if (valor > 0 && valor < this.#saldo){
            this.#saldo -= valor; 
            console.log(`\nSaque de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso!`);
        }if(valor <= 0 ){
            throw new contaError ('Erro! o valor para saque tem que ser maior que zero');
        }if(valor > this.#saldo){
            throw new contaError ('Erro! Saldo Insuficiente.');
        }
    }

    calcularRendimento(){
        if(this.#saldo > 0){
        var rendimento = this.#saldo * 0.10;
        console.log('\n=======================================');
        console.log(`Saldo atual: ${this.#saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        console.log(`Seu rendimento no mês é de ${rendimento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);
        console.log(`Saldo total: ${this.#saldo += rendimento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        console.log('=======================================\n');
        }else{
            throw new contaError('Opção Invalida! Saldo abaixo de R$0,00');
            
            
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
    prompt('Digite a agência: '),
    prompt('Digite a conta: ')
);

console.log(`\nBom dia, Sr(a) ${cliente.nomeTitular}:`);
cliente.imprimirCabecalho();

var opcao = -1
while (opcao !== 0) {

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
        console.log('\n======================');
        console.log(`Saldo: R$ ${cliente.saldo.toFixed(2).replace('.',',')}`);
        console.log('======================\n');
        break;

    case 2:
        try{
        var saque = Number(prompt('Digite um valor para saque: '));
        cliente.sacar(saque);
        console.log('\n======================');
        console.log(`Saldo após o saque: R$ ${cliente.saldo.toFixed(2).replace('.',',')}`);
        console.log('======================\n');
        }catch(error){
            console.error(error.message);
        }
        break;
    
    case 3:
        try{
        var deposito = Number(prompt('Digite um valor para deposito: '))
        cliente.depositar(deposito);
        console.log('\n======================');
        console.log(`Saldo após o depósito: R$ ${cliente.saldo.toFixed(2).replace('.',',')}`);
        console.log('======================\n');
        }catch(error){
            console.error(error.message);
        }
        break;
    
    case 4:
        try{
        cliente.calcularRendimento();
        }catch(error){
            console.error(error.message);
        }
        break;

    case 0:
        console.log('Seção encerrada. Até logo! 👋');
        break;
        
    default:
        console.log('Opção inválida, Digite novamente!');
        break;
}

}
