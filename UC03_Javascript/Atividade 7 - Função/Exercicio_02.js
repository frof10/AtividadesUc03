import PromptSync from "prompt-sync";
const prompt = PromptSync();
import {depositar,sacar} from "./funcoes_exercicios.js";

let saldoConta = 1000;

let nome = prompt('Digite o seu nome: ');
console.log('1 - Saque');
console.log('2 - Deposito');
let opcao = Number(prompt(`Olá Sr(a) ${nome}, Digite a opção: `));

switch (opcao) {
    case 1:
    let pedidoSaque = Number(prompt('Digite o valor para saque: '));
    if (pedidoSaque > saldoConta){
        console.log('\tSaque não realizado!');
        console.log('Saldo inexitente. Digite um valor menor.');
        break;
    }else{
        let saqueConta = sacar(saldoConta,pedidoSaque);
        console.log('\nSAQUE REALIZADO COM SUCESSO! 💸💸💸\n');
        console.log(`Sr(a)${nome}, esse é o resumo da operação:\n `);
        console.log(`Saldo anterior ao saque: R$ ${(saldoConta).toFixed(2)}`);
        console.log(`Saldo após o saque: R$ ${(saqueConta).toFixed(2)}`);
            break;
    }    
    
    case 2: 
        let pedidoDeposito = Number(prompt('Digite o valor para deposito: '));
        let depositoConta = depositar(saldoConta,pedidoDeposito);
        console.log('\nDEPóSITO REALIZADO COM SUCESSO!💰💰💰\n');
        console.log(`Sr(a) ${nome}, esse é o resumo da operação:\n`);
        
        console.log(`Saldo anterior ao depósito: R$ ${(saldoConta).toFixed(2)}`);
        console.log(`Saldo após o deposito: R$ ${(depositoConta).toFixed(2)}`);
            break;
}





