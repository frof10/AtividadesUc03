import PromptSync from "prompt-sync";
const prompt = PromptSync();

let salarioInicial = 510
let salarioAtual = salarioInicial
let anoInicial = 2010
let anoFinal = 2025
let percentual = 0
    console.log('\tAno\t-\tAumento\t\t- Salário\n')
for(let ano = 2010; ano <= 2025; ano++){
    if (ano === 2011){
        percentual = 1.5;
    }else if (ano > 2011){
        percentual *= 2;
    }
    if (ano => 2011){
        salarioAtual += salarioAtual * (percentual/100);
    }
    let percentualNovo = percentual.toFixed(2).replace('.', ',') + '%';
    let salarioNovo = salarioAtual.toFixed(2).replace('.', ',');

    console.log(`\t${ano}\t-\t${percentualNovo}\t\t- R$ ${salarioNovo}`);
}