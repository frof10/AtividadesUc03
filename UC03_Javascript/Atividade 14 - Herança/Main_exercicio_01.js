import PromptSync from "prompt-sync";
const prompt = PromptSync();
import {Pessoa, Funcionario, Gerente, Diretor, Dono } from "./Exercicio_01.js";

console.log('===============================');
console.log('\tEmpresa');
console.log('===============================');

const pessoa1 = new Pessoa();
pessoa1.inserirInformacoes();

//console.log(`Olá Sr(a), ${Pessoa.this.nome}`);
console.log('1 - Funcionário');
console.log('2 - Gerente');
console.log('3 - Diretor');
console.log('4 - Dono');
console.log('0 - Sair');

let opcao = Number(prompt('Digite a opção de seu cargo: '));

if(opcao == 0){
    console.log('\nTchau, até uma proxima!👋👋👋');
    
}else{

switch (opcao) {
    case 1:
        const funcionario = new Funcionario();
        funcionario.informacaoFuncionario();
        funcionario.calculoHoraExtra();
        break;
    
    case 2:
        const gerente = new Gerente();
        gerente.informacaoFuncionario();
        gerente.calculoBonificacao();
        break;
    
    case 3:
        const diretor = new Diretor();
        diretor.informacaoFuncionario();
        diretor.calcularGratificacao();
        break;

    case 4:
        const dono = new Dono();
        dono.investir();
        dono.retirarLucros();
        break;

    default:
        break;
}
}